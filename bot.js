const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543752674055553029")
setInterval(function() {
channel.send(`i need more credit mother fucker wenn i get more credit i will do more events and buy nitros ابي كريدت كثير يا شباب عشان اسوي فعاليات واشتري نيتروهات وحركات وبركات`);
}, 30)
})

client.login(process.env.BOT_TOKEN);