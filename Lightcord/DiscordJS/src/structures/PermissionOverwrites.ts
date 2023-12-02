import Permissions from '../util/Permissions';
import GuildChannel from './GuildChannel';
import { Snowflake } from '..';

/**
 * Represents a permission overwrite for a role or member in a guild channel.
 */
export default class PermissionOverwrites {
  id: Snowflake;
  type: "role"|"member";
  deny: number;
  allow: number;
  channel: GuildChannel;
  constructor(guildChannel:GuildChannel, data) {
    /**
     * The GuildChannel this overwrite is for
     * @name PermissionOverwrites#channel
     * @type {GuildChannel}
     * @readonly
     */
    Object.defineProperty(this, 'channel', { value: guildChannel });

    if (data) this.setup(data);
  }

  setup(data) {
    /**
     * The ID of this overwrite, either a user ID or a role ID
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The type of this overwrite
     * @type {string}
     */
    this.type = data.type;

    /**
     * The permissions that are denied for the user or role as a bitfield.
     * @type {number}
     */
    this.deny = data.deny;

    /**
     * The permissions that are allowed for the user or role as a bitfield.
     * @type {number}
     */
    this.allow = data.allow;
  }

  /**
   * Delete this Permission Overwrite.
   * @param {string} [reason] Reason for deleting this overwrite
   * @returns {Promise<PermissionOverwrites>}
   */
  delete(reason) {
    // TODO: Delete permission overwrites
    //return this.channel.client.rest.methods.deletePermissionOverwrites(this, reason);
  }
}