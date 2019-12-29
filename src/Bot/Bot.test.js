const { expect } = require("chai"); 
const Discord = require("discord.js");
const LoggerMock = require("../Mocks/LoggerMock");
const RunnerMock = require("../Mocks/RunnerMock");
const Bot = require("./Bot")
const config = require("../../config.json");

describe("Le bot ", () => {
    const client = new Discord.Client();
    const logger = new LoggerMock();
    const runner = new RunnerMock();
    const bot = new Bot();

    bot.configure(client, logger, runner);

    before(() => {
        return client.login(config.token);
    })

    afterEach(() => {
        logger.clear();
    })

    after(() => {
        client.destroy();
    })

    it("log une trace quand il se connecte", () => {
        expect(logger.messages).to.include("Ready !")
    })

    it("log une trace quand il y a un message", (done) => {
        var channel = client.channels.get(config.channelId);
        channel.send("test");
        
        setTimeout(() => {
            expect(logger.messages).to.includes("test");
            done();
        }, 1000)
    })

    it("tente d'exécuter la commande si elle commence par '!'", (done) => {
        var channel = client.channels.get(config.channelId);
        channel.send("!test");
        
        setTimeout(() => {
            expect(runner.commands).to.includes("test");
            done();
        }, 1000)
    })
});


