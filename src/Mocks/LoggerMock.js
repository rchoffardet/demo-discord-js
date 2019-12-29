class LoggerMock
{
    constructor()
    {
        this.messages = [];
    }

    log(data)
    {
        this.messages.push(data);
    }

    clear()
    {
        this.messages = [];
    }
}

module.exports = LoggerMock;