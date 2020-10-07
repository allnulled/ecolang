const fs = require("fs");
const EcoLangParser = require(__dirname + "/ecolang.js");

class EcoLang {

	static get Parser () {
		return EcoLangParser;
	}

	static parseFile(file, options = {}) {
		return new Promise((ok, fail) => {
			fs.readFile(file, "utf8", (error, contents) => {
				if(error) {
					return fail(error);
				}
				try {
					const data = this.Parser.parse(contents, options);
					return ok(data);
				} catch(error) {
					return fail(error);
				}
			})
		});
	}

	static parseFileSync(file, options = {}) {
		try {
			const contents = fs.readFileSync(file).toString();
			const data = this.Parser.parse(contents, options);
			return data;
		} catch(error) {
			throw error;
		}
	}

	static parseText(text, options = {}) {
		return this.Parser.parse(text, options);
	}

}

module.exports = EcoLang;

