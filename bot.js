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
	// setInterval(postRandomMessage, 600); // Post every hour
});

client.on("error", console.error);

const messages = [
	"Hello! I'm a cunt",
	"If you are reading this then you are a cunt",
	"I am surrounded by cunts and not the kind I would like...",
	"I hope you are having a great day... cunt.",
];

function postRandomMessage() {
	const channel = client.channels.cache.get(process.env.CHANNEL_ID);
	if (channel) {
		const randomMessage =
			messages[Math.floor(Math.random() * messages.length)];
		channel.send(randomMessage);
		// console.log(randomMessage);
	} else {
		console.log("Channel not found");
	}
}

client.login(process.env.BOT_TOKEN).catch(console.error);
