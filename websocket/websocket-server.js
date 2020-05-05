const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3003 });
  
// latest 100 messages
var history = [ ];

webSocketServer.on('connection', webSocket => {
    // send back chat history
    if (history.length > 0) {
        webSocketServer.sendUTF(
            JSON.stringify({ type: 'history', data: history} ));
    }
    webSocket.onmessage = messageEvent => {
        // we want to keep history of all sent messages
        const message = messageEvent.data;
        history.push(message);
        history = history.slice(-100);
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    };
});

module.exports = webSocketServer;
