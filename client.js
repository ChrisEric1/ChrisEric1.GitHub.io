/*
	Fosscord: A FOSS re-implementation and extension of the Discord.com backend.
	Copyright (C) 2023 Fosscord and Fosscord Contributors
	
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published
	by the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.
	
	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
	This file downloads a complete discord.com web client for testing,
	and performs some basic patching:
	* Replaces all mentions of "Server" -> "Guild"
	* Replaces "Discord" -> `INSTANCE_NAME` variable
	* "Nitro" -> "Premium"
	* Prevents `localStorage` deletion ( for `plugins`/`preload-plugins` )
	* Adds `fast-identify` support ( TODO: add documentation )

	TODO: Make this configurable easily.
*/

/*eslint-env node*/

require("dotenv/config");
const path = require("path");
const fetch = require("node-fetch");
const http = require("http");
const https = require("https");
const fs = require("fs/promises");
const { existsSync } = require("fs");

// https://stackoverflow.com/a/62500224
const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });
const agent = (_parsedURL) =>
	_parsedURL.protocol == "http:" ? httpAgent : httpsAgent;

const CACHE_PATH = path.join(__dirname, "assets");
const BASE_URL = "https://discord.com";

const INSTANCE_NAME = process.env.CLIENT_PATCH_INSTANCE_NAME ?? "Fosscord";
const ONLY_CACHE_JS = process.env.ONLY_CACHE_JS ? true : false;

// Manual for now
const INDEX_SCRIPTS = [

"ee7c382d9257652a88c8f7b7f22a994d.png",
"0.2d737cc92c807c265e1f.css",
"07dca80a102d4149e9736d4b162cff6f.ico",
"e1180c171e5a54377584.js",
"07ca8d15cc9ad4ffc0f6.js",
"c05bdc0c5c3c90e28c77.js",
"7288c77130c62ff8aa82.js",

"0.e470f204037b26bc4ad8.css",
"07dca80a102d4149e9736d4b162cff6f.ico",
"366619ca708365b1c67d.js",
"734c47e42d1b66186446.js",
"61a1c562490b1ff488d9.js",

"652f40427e1f5186ad54836074898279.png",
"0.59403e9789b2d9095785.css",
"ec2c34cadd4b5f4594415127380a85e6.ico",
"d170d5b12b302f315912.js",
"35e0115547d406ec0d20.js",
"be358c929d9afee6527f.js",
"ac07c15f13e50948a1b2.js",

"532.731d70a410af04b4d0ea.css",
"07dca80a102d4149e9736d4b162cff6f.ico",
"8c5e082c1b6050a786c6.js",
"da303f345db971837ba8.js",
"56597f3659b06fd58100.js"

];

const doPatch = (content) => {
	return content;
};

const print = (x, printover = true) => {
	var repeat = process.stdout.columns - x.length;
	process.stdout.write(
		`${x}${" ".repeat(Math.max(0, repeat))}${printover ? "\r" : "\n"}`,
	);
};

const processFile = async (asset) => {
	// The asset name may not include the file extension. Usually if it doesn't, it's js though.
	asset = `${asset}${asset.includes(".") ? "" : ".js"}`;
	if (ONLY_CACHE_JS && !asset.endsWith(".js")) return [];

	const url = `${BASE_URL}/assets/${asset}`;
	const res = await fetch(url, { agent });
	if (res.status !== 200) {
		print(`${res.status} on ${asset}`, false);
		return [];
	}

	if (
		asset.includes(".") &&
		!asset.includes(".js") &&
		!asset.includes(".css")
	) {
		await fs.writeFile(path.join(CACHE_PATH, asset), await res.buffer());
		return [];
	}

	let text = await res.text();
	text = doPatch(text);

	await fs.writeFile(path.join(CACHE_PATH, asset), text);

	let ret = new Set([
		// These are generally JS assets
		...(text.match(/"[A-Fa-f0-9]{20}"/g) ?? []),

		// anything that looks like e.exports="filename.ext"
		...[...text.matchAll(/\.exports=.\..\+"(.*?\..{0,5})"/g)].map(
			(x) => x[1],
		),

		// commonly matches `background: url(/assets/blah.svg)`
		...[...text.matchAll(/\/assets\/([a-zA-Z0-9]*?\.[a-z0-9]{0,5})/g)].map(
			(x) => x[1],
		),
	]);

	return [...ret].map((x) => x.replaceAll('"', ""));
};

(async () => {
	if (!existsSync(CACHE_PATH))
		await fs.mkdir(CACHE_PATH, { recursive: true });

	// Use a set to remove dupes for us
	const assets = new Set(INDEX_SCRIPTS);
	let promises = [];

	let index = 0;
	for (let asset of assets) {
		index += 1;
		print(`Scraping asset ${asset}. Remaining: ${assets.size - index}`);

		promises.push(processFile(asset));
		if (promises.length > 100 || index == assets.size) {
			const values = await Promise.all(promises);
			promises = [];
			values.flat().forEach((x) => assets.add(x));
		}
	}

	print("done");
})();
