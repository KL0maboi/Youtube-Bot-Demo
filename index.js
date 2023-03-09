const {
  Client,
  GatewayIntentBits,
  Partials,
  ActivityType,
} = require('discord.js');

const client = new Client({ intents: [], partials: [Partials.User] });

client.once('ready', () => {
  console.log(`logged in as ${client.user.username}`);

  client.user.setPresence({
    status: 'idle',
    activities: [
      {
        name: 'youtube',
        type: ActivityType.Watching,
      },
    ],
  });
});

client.login(
  'MTA4MzM5MDIwNTE4NjI4MTU2Mw.GMni98.rAbw1ONPV44DveG-nylJAwyje7AemmekuDTXvQ'
);
