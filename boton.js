const Discord = require('discord.js');

module.exports = {
  name: "boton",
  alias: [],

   async execute (client, message, args) {

    const row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
        .setCustomId("b1")
        .setLabel("click aqui si te gustan las papas")
        .setStyle("SUCCESS")
        .setEmoji("🍟")
    )

    const m = await message.channel.send({ content: "click abajo si te gustan las papas", components: [row] })


    const ifilter = i => i.user.id === message.author.id;


    const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })


    collector.on("collect", async i => {
        if(i.customId === "b1"){
        await i.deferUpdate()
        i.editReply({ content: "listo gracias", components: [] })
        }
    })


  }

}
