const { expect } = require("chai"); 
const Runner = require("./Runner");
const LoggerMock = require("../Mocks/LoggerMock");

describe("L'exécuteur de commande'", () => {
    const logger = new LoggerMock();

    afterEach(() => {
        logger.clear();
    })

    it("lance la commande", () => {
        let temp = "";
        const runner = new Runner({test: () => temp = "done"}, logger);

        runner.run("test")

        expect(temp).to.be.equal("done");

    })

    it("trace si la commande n'existe pas", () => {
        let temp = "";
        const runner = new Runner({}, logger)

        runner.run("test")

        expect(logger.messages).to.include("La commande \"test\" n'existe pas.")
    })
});


