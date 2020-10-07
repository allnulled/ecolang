#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const argv = require("yargs").argv;
const EcoLang = require(__dirname + "/../index.js");
const files = argv._;

let currentFile = undefined;
try {
	for(let index=0; index < files.length; index++) {
		const file = files[index];
		const filepath = path.resolve(file);
		currentFile = filepath;
		const data = EcoLang.parseFileSync(filepath);
		const questionsJson = JSON.stringify(data.questions);
		const outputFilepath = path.resolve(filepath + ".json");
		fs.writeFileSync(outputFilepath, questionsJson, "utf8");
	}
} catch(error) {
	console.error("[ECOLANG]", error);
	console.error("[ECOLANG] Errors were thrown. Parsing interrupted.");
	console.error("[ECOLANG] Errors while parsing file:", currentFile);
}