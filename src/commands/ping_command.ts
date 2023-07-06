import { ChatInputCommandInteraction } from "discord.js";
import { LOGGER } from "../constants";
import BaseCommand from "./base_command";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mcdata from "mcdata";

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