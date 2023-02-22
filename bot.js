const tmi = require("tmi.js");
const config = require("./config.js");

const client = new tmi.client(config);

const onConnectedHandler = () => {
  console.log(`Connected`);
  sendMessage();
};

function sendMessage() {
  client.say("#codinggarden", "!drop codingHeart");
  console.log("sent");
  setTimeout(sendMessage, 60000);
}

client.on("connected", onConnectedHandler);

client.connect();
