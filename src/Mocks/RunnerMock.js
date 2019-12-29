class RunnerMock
{
    constructor()
    {
        this.commands = [];
    }

    run(command)
    {
        this.commands.push(command);
    }

    clear()
    {
        this.commands = [];
    }
}

module.exports = RunnerMock;