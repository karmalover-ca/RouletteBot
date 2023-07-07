import { ChatInputCommandInteraction } from "discord.js";
import { LOGGER } from "../constants";
import BaseCommand from "./base_command";

class ColorRouletteCommand extends BaseCommand {
    constructor() {
        super({
            name: "color_roulette",
            description: "Play a game of color roulette!"
        });
    }

    public handle = async (interaction: ChatInputCommandInteraction) => {
        // Simulate a game of roulette
        const outcomes = ["red", "black", "green"];
        const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        
        interaction.reply(`The roulette landed on ${outcome}!`).catch(LOGGER.error);
    }
}

export default ColorRouletteCommand;
// Beta version plan to add a choice block in interaction(Slash Command)
// Adding more colors later
