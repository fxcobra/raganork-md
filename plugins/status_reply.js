const {Module} = require('../main');

Module({pattern: 'autoreact', fromMe: true, desc: 'Auto react to status updates'}, async (m) => {
    await m.client.react(m.jid, m.key, '');
});
