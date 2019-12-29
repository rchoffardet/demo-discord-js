class Runner
{
    constructor(commands, logger)
    {
        this.commands = commands;
        this.logger = logger;
    }

    run(command)
    {
        if(this.commands.hasOwnProperty(command))
        {
            this.commands[command]();
        }

        this.logger.log(`La commande "${command}" n'existe pas.`)
    }
}

module.exports = Runner