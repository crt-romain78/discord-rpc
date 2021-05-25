var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Cosmos bot list 2021",
assets : {
large_image : "discord-avatar-512-6kz75",
large_text : "Cosmos bot list" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Bot-list" , url : "https://cosmos-botlist.ml"},{label : "Support Server",url : "https://dsc.gg/cosmos-suport"}]
}
})
})
client.login({ clientId : "846642614270820354" }).catch(console.error);