const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("621046279878737940")
setInterval(function() {
channel.send(`EL MAJORE 9ALIKOM HAD RISALA {Fuck you sons of prostitutes}`);
}, 30)
})

client.login(process.env.BOT_TOKEN);