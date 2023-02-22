const tmi = require("tmi.js");
const config = require("./config.js");

const client = new tmi.client(config);

const onConnectedHandler = () => {
  console.log(`Connected`);
  sendMessage();
};

const emotes = [
  "me",
  "codingHeart",
  "codingSeedling",
  "codingD",
  "codingTrolled",
  "HypeCool",
];

const sendMessage = () => {
  const emote = emotes[Math.floor(Math.random() * emotes.length)];
  client.say("#codinggarden", `!drop ${emote}`);
  console.log("sent");
  setTimeout(sendMessage, 300000);
};

client.connect();

client.on("connected", onConnectedHandler);
