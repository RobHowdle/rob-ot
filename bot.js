const {Client, GatewayIntentBits} = require("discord.js");
require("dotenv").config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.once("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
	setInterval(postRandomMessage, 3600000); // Post every hour
});

const messages = [
	"Hello! I'm a cunt",
	"If you are reading this then you are a cunt",
	"I am surrounded by cunts and not the kind I would like...",
	"I hope you are having a great day... cunt.",
];
