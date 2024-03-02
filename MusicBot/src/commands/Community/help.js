const { SlashCommandBuilder, EmbedBuilder}=require('discord.js');

module.exports={
    data: new SlashCommandBuilder()
    .setName('help-guide')
    .setDescription('Shows a list of commands that can be executed via the bot'), 
    async execute (interaction){

        const embed = new EmbedBuilder()
        .setTimestamp()
        .setTitle('> Help Guide')
        .setAuthor({ name: '🎶 Sainte - Help Guide'})
        .setFooter({ text: '🎶 Command Tracker | By Kkermit'})
        .addFields({ name: "• /pong ", value: "> reply's with pong."})
        .addFields({ name: "• /music play", value: "> Plays a given song or YouTube URL in a voice channel."})
        .addFields({ name: "• /music options queue", value: "> Displays the active queue."})
        .addFields({ name: "• /music options skip", value: "> Skips the current song being played."})
        .addFields({ name: "• /music options pause", value: "> Pauses the current song being played."})
        .addFields({ name: "• /music options resume", value: "> Unpauses the current paused song."})
        .addFields({ name: "• /music options stop", value: "> Disconnects the bot from the voice channel."})
        .addFields({ name: "• /music volume ", value: "> Changes the volume of the bot for everyone."})
        .setColor("Red")

        await interaction.reply({ embeds: [embed]});
    }
}