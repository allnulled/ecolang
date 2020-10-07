const fs = require("fs");
const { expect } = require("chai");
const EcoLang = require(__dirname + "/../src/ecolang.api.js");

describe("EcoLang API Test", function() {
	
	this.timeout(1000 * 5);

	it("EcoLang.parseText", function(done) {
		const contents = fs.readFileSync(__dirname + "/001.script.eco").toString();
		const data = EcoLang.parseText(contents);
		console.log(data)
		expect(typeof data).to.equal("object");
		expect("ast" in data).to.equal(true);
		expect("questions" in data).to.equal(true);
		expect(typeof data.ast).to.equal("object");
		expect(typeof data.questions).to.equal("object");
		done();
	});

	it("EcoLang.parseFileSync", function(done) {
		const data = EcoLang.parseFileSync(__dirname + "/001.script.eco");
		expect(typeof data).to.equal("object");
		expect("ast" in data).to.equal(true);
		expect("questions" in data).to.equal(true);
		expect(typeof data.ast).to.equal("object");
		expect(typeof data.questions).to.equal("object");
		done();
	});

	it("EcoLang.parseFile", async function() {
		try {
			const data = await EcoLang.parseFile(__dirname + "/001.script.eco");
			expect(typeof data).to.equal("object");
			expect("ast" in data).to.equal(true);
			expect("questions" in data).to.equal(true);
			expect(typeof data.ast).to.equal("object");
			expect(typeof data.questions).to.equal("object");
		} catch(error) {
			throw error;
		}
	});

});