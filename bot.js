const tmi = require("tmi.js");
const config = require("./config.js");

const client = new tmi.client(config);

const channelName = "#<Channel_Name>";

const onConnectedHandler = () => {
  console.log(`Connected`);
  sendMessage();
};

const messages = ["message 1", "message 2", "message 3"];

const sendMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  client.say(channelName, message);
  console.log(`Sent - ${message}`);
  setTimeout(sendMessage, 300000);
};

client.connect();

client.on("connected", onConnectedHandler);
