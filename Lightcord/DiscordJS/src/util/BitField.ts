/**
 * Data structure that makes it easy to interact with a bitfield.
 */
export default class BitField {
    /**
     * @param {BitFieldResolvable} [bits=0] Bits(s) to read from
     */
    constructor(bits: BitFieldResolvable) {
        this.bitfield = (this.constructor as any).resolve(bits);
    }

    /**
     * Bitfield of the packed bits
     * @type {number}
     */
    bitfield:number

    /**
     * Checks whether the bitfield has a bit, or any of multiple bits.
     * @param {BitFieldResolvable} bit Bit(s) to check for
     * @returns {boolean}
     */
    any(bit: BitFieldResolvable): boolean {
        return (this.bitfield & (this.constructor as any).resolve(bit)) !== 0;
    }

    /**
     * Checks if this bitfield equals another
     * @param {BitFieldResolvable} bit Bit(s) to check for
     * @returns {boolean}
     */
    equals(bit: BitFieldResolvable): boolean {
        return this.bitfield === (this.constructor as any).resolve(bit);
    }

    /**
     * Checks whether the bitfield has a bit, or multiple bits.
     * @param {BitFieldResolvable} bit Bit(s) to check for
     * @returns {boolean}
     */
    has(bit: BitFieldResolvable, ...hasParams: any[]): boolean {
        if (Array.isArray(bit)) return bit.every((p) => this.has(p));
        bit = (this.constructor as any).resolve(bit) as number;
        return (this.bitfield & bit) === bit;
    }

    /**
     * Gets all given bits that are missing from the bitfield.
     * @param {BitFieldResolvable} bits Bits(s) to check for
     * @param {...*} hasParams Additional parameters for the has method, if any
     * @returns {string[]}
     */
    missing(bits: BitFieldResolvable, ...hasParams: any[]): string[] {
        if (!Array.isArray(bits))
            bits = new (this.constructor as any)(bits).toArray(false)
        return (bits as string[]).filter((p) => !this.has(p, ...hasParams));
    }

    /**
     * Freezes these bits, making them immutable.
     * @returns {Readonly<BitField>} These bits
     */
    freeze(): Readonly<BitField> {
        return Object.freeze(this);
    }

    /**
     * Adds bits to these ones.
     * @param {...BitFieldResolvable} [bits] Bits to add
     * @returns {BitField} These bits or new BitField if the instance is frozen.
     */
    add(...bits: BitFieldResolvable[]): BitField {
        let total = 0;
        for (const bit of bits) {
            total |= (this.constructor as any).resolve(bit);
        }
        if (Object.isFrozen(this))
            return new (this.constructor as any)(this.bitfield | total);
        this.bitfield |= total;
        return this;
    }

    /**
     * Removes bits from these.
     * @param {...BitFieldResolvable} [bits] Bits to remove
     * @returns {BitField} These bits or new BitField if the instance is frozen.
     */
    remove(...bits: BitFieldResolvable[]): BitField {
        let total = 0;
        for (const bit of bits) {
            total |= (this.constructor as any).resolve(bit);
        }
        if (Object.isFrozen(this))
            return new (this.constructor as any)(this.bitfield & ~total);
        this.bitfield &= ~total;
        return this;
    }

    /**
     * Gets an object mapping field names to a {@link boolean} indicating whether the
     * bit is available.
     * @param {...*} hasParams Additional parameters for the has method, if any
     * @returns {Object}
     */
    serialize(...hasParams: any[]): object {
        const serialized = {};
        for (const flag of Object.keys((this.constructor as any).FLAGS)) {
            serialized[flag] = this.has(
                (this.constructor as any).FLAGS[flag],
                ...hasParams
            );
        }
        return serialized;
    }

    /**
     * Gets an {@link Array} of bitfield names based on the bits available.
     * @param {...*} hasParams Additional parameters for the has method, if any
     * @returns {string[]}
     */
    toArray(...hasParams: any[]): string[] {
        return Object.keys((this.constructor as any).FLAGS).filter((bit) =>
            this.has(bit, ...hasParams)
        );
    }

    toJSON() {
        return this.bitfield;
    }

    valueOf() {
        return this.bitfield;
    }

    *[Symbol.iterator]() {
        yield* this.toArray();
    }

    /**
     * Resolves bitfields to their numeric form.
     * @param {BitFieldResolvable} [bit=0] - bit(s) to resolve
     * @returns {number}
     */
    static resolve(bit: BitFieldResolvable = 0): number {
        if (typeof bit === "number" && bit >= 0) return bit;
        if (bit instanceof BitField) return bit.bitfield;
        if (Array.isArray(bit))
            return bit
                .map((p) => this.resolve(p))
                .reduce((prev, p) => prev | p, 0);
        if (typeof bit === "string" && typeof this.FLAGS[bit] !== "undefined")
            return this.FLAGS[bit];
        throw new RangeError("Invalid bitfield flag or number.");
    }

    /**
     * Numeric bitfield flags.
     * <info>Defined in extension classes</info>
     * @type {Object}
     * @abstract
     */
    static FLAGS: object = {};
}

/**
 * Data that can be resolved to give a bitfield. This can be:
 * * A string (see {@link BitField.FLAGS})
 * * A bit number
 * * An instance of BitField
 * * An Array of BitFieldResolvable
 */
export type BitFieldResolvable = string|number|BitField|BitFieldResolvable[]