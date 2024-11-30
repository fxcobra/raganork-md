
const {Module} = require('../main');

Module({on: 'viewedUpdate', fromMe: false}, async (m) => {
    await m.client.react(m.jid, m.key, '');
});
