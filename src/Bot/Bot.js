class Bot
{
    configure(client, logger, runner)
    {
        client.once("ready", (data) => {
            logger.log("Ready !")
        });
        
        client.on("message", (data) => {
            let message = data.content;

            logger.log(data.content);
            
            if(message.startsWith("!"))
            {
                runner.run(message.substr(1));
            }
        })
    }
}
module.exports = Bot