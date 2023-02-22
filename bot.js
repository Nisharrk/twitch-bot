const tmi = require("tmi.js");
const config = require("./config.js");

const client = new tmi.client(config);

try {
  client.connect();
} catch (err) {
  console.error(err);
}

client.on("connected", onConnectedHandler);

function onConnectedHandler(addr, port) {
  console.log(`Bot Connected`);
}
