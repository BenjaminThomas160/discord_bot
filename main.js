var CONFIG = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client({
	allowedMentions: {
		parse: ['users', 'roles'],
		repliedUser: true,

	},
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_PRESENCES",
		"GUILD_MEMBERS",
		"GUILD_MESSAGE_REACTIONS",
	],
});

var channel;
client.once('ready', () => {
	console.log('cool stuff');
});

function send_qs(channel) {
	var quotes = CONFIG.bquotes;
	num = Math.floor(Math.random() * quotes.length);
	channel.send(quotes[num]);
}

var timer;
client.on('messageCreate', async message => {
	if (message.content === "!set") {
		channel = message.channel;
		timer = setInterval(send_qs, 5000, channel);
	}
	if (message.content === "!stop") {
		clearInterval(timer);
	}

	// bee movie quote
	if (message.content === "!b") {
		var quotes = CONFIG.bquotes;
		num = Math.floor(Math.random() * quotes.length);
		message.channel.send(quotes[num]);	
	}
	// add a quote
	if (message.content.split(" ")[0] === "!addq") {
		var quotes = CONFIG.uQuotes;
		new_quote = message.content.substring(message.content.indexOf(" ") + 1);
		console.log(new_quote);
		if (quotes.includes(new_quote)) {
			message.channel.send("quote already exists use !f_addq to force add");	
		} else if (message.content.split(" ")[0] != undefined) {
			quotes.push(new_quote);
		}
	}
	// force add a quote
	if (message.content.split(" ")[0] === "!f_addq") {
		var quotes = CONFIG.uQuotes;
		new_quote = message.content.substring(message.content.indexOf(" "));
		console.log(new_quote);
		if (message.content.split(" ")[0] != undefined) {
			quotes.push(new_quote);
		}
	}
	// send user quote
	if (message.content === "!quote") {
		var quotes = CONFIG.uQuotes;
		if (quotes.length == 0) {
			message.channel.send("There are no quotes, use !addq to add a quote");
		} else {
			num = Math.floor(Math.random() * quotes.length);
			message.channel.send(quotes[num]);
		}
	}
	// quote list
	if (message.content.split(" ")[0] === "!q_list") {
		var str = message.content.split(" ");
		var quotes = CONFIG.uQuotes;
		var end = 50;
		var start = 0;
		var out = "";
		if (str[1] === '-a') {
			end = quotes.length;
			start = 0;
		}
		if (str[2] != undefined) {
			if (!isNaN(str[1]) && !isNaN(str[2])) {
				start = parseInt(str[1]);
				end = parseInt(str[2]);
			}
		} else if (str[1] != undefined) {
			if (!isNaN(str[1])) {
				end = parseInt(str[1]);
			}
		}
		for (let i = start; i < quotes.length; i++) {
			if (i > end) {
				break;
			}
			out += i + ": " + quotes[i] + "\n";	
		}
		message.channel.send(out);

	}
	// hello world
	if (message.content === "!hello") {
		message.channel.send("hello world");
	}
	// E
	if (message.content === "!E") {
		message.channel.send("E");
	}
	// sussy
	if (message.content === "!sus") {
		message.channel.send(
			`
			⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
			⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀
			⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀
			⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀
			⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀
			⠀⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀
			⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀
			⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀
			⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀
			⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀
			⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
			⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
			⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
			⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀
			⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶⣶⣶⠶⠀⢠⣿⣿⠀⠀⠀
			⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀⢸⣿⡇⠀⠀⠀
			⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇⠀⠀⠀
			⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏⠀⠀⠀⠀
			⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠿⠋⠁⠀
			`);
	}
	// sussy wussy
	if (message.content ===  "!;)") {
		num = Math.floor(Math.random() * 100);
		name = message.member.user.toString();
		if (name === '<@413626625457127424>') {
			num = 100;
		}
		console.log(name);
		message.channel.send(name + " is " + num + "% sus :smirk:");
	}
})

var TOKEN = require('./tokens.json');


client.login(TOKEN.token);
