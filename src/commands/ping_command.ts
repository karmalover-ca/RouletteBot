import { ChatInputCommandInteraction } from "discord.js";
import { LOGGER } from "../constants";
import BaseCommand from "./base_command";

class PingCommand extends BaseCommand {
    constructor() {
        super({
            name: "ping",
            description: "ping! pong!"
        });
    }

    public handle = async (interaction: ChatInputCommandInteraction) => {
        interaction.reply("Pong!").catch(LOGGER.error);
    }
}

export default PingCommand;