const Discord = require('discord.js');
const { exec } = require("child_process") 
const fs = require("fs") 
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if ((msg.content).startsWith('1!')) {
    //msg.content
    fs.writeFileSync("1ctinus/README.md" ,(msg.content).substring(3))
    fs.writeFileSync("1ctinus/log.txt", fs.readFileSync("1ctinus/log.txt") + "\nFROM " + msg.author.username)
    exec(`printf " $(date '+%F_%H:%M:%S'):$(cat ~/code/discord/1ctinus/README.md)" >> '~/code/discord/1ctinus/log.txt'; cd ~/code/discord/1ctinus; git add README.md; git add log.txt; git commit -m "AUTOMATED $(date '+%F_%H:%M:%S')"; git push -f origin main`, (error, stdout, stderr) => {

      if (error) {
        console.log(error)
        return
      }
  
      if (stderr) {
        console.log(stderr)
        return
      }
      msg.reply("should have made readme " + (msg.content).substring(3))
    })
    msg.reply("should have made readme " + (msg.content).substring(3) + ".\nhttps://github.com/1ctinus")
  }
});
client.on('message', msg => {
  if (msg.content === 'ping') {
    console.log(msg.author.username)
  }
});
const key = fs.readFileSync("key", "utf-8")
console.log(key+"wha")
client.login(key);
