let route = require('./route');
let readline = require('readline');

function sendToRoute(line) {
    let response = route(line);
    console.log(response.text);

}
function start(line) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function (line) {
        sendToRoute(line);
    });

    sendToRoute();
}
start();
module.exports = start;