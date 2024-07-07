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

client.on("error", console.error);

const messages = [
	"Hello there!",
	"How's everyone doing?",
	"Don't forget to take a break!",
	"Stay positive!",
	"Keep up the good work!",
	"What's up, everyone?",
];

function postRandomMessage() {
	const channel = client.channels.cache.get(process.env.CHANNEL_ID);
	if (channel) {
		const randomMessage =
			messages[Math.floor(Math.random() * messages.length)];
		channel.send(randomMessage);
	} else {
		console.log("Channel not found");
	}
}

client.login(process.env.BOT_TOKEN).catch(console.error);
