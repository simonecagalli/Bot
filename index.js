var TelegramBot = require('node-telegram-bot-api'),
// Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
        telegram = new TelegramBot("410107682:AAHu0ZBXQwJaemdwbgXrctJpFmrOm3KFcQA", {
            polling: true
        });

var dict = {
    "scolapasta": 20,
    "dorata": 10,
    "shirt": 30
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

telegram.on("text", (message) => {

    if (message.text.toLowerCase().indexOf("/togli") === 0) {
        var lol = message.text.split(" ");
        var arg1 = lol[1];
        var arg2 = lol[2];
        if (isNumeric(arg1) && arg2 in dict) {
            var sub = dict[arg2];
            sub = sub - arg1;
            telegram.sendMessage(message.chat.id, arg2 + " x" + sub);
        } else {
            if (!isNumeric(arg1) && arg1 in dict) {
                var sub = dict[arg1];
                sub--;
                telegram.sendMessage(message.chat.id, arg1 + " x" + sub);
            } else {
                if (isNumeric(arg1) && !(arg2 in dict)) {
                    telegram.sendMessage(message.chat.id, "\"" + arg2 + "\" non è nella lista!");
                } else {
                    if (!isNumeric(arg1) && !(arg1 in dict)) {
                        telegram.sendMessage(message.chat.id, "\"" + arg1 + "\" non è nella lista!");
                    }
                    ;

                }
            }
        }
    }
});

telegram.on("text", (message) => {

    if (message.text.toLowerCase().indexOf("/counter") === 0) {
        var output = '';
        for (var property in dict) {
            output += property + ': ' + dict[property] + '; ';
        }
        telegram.sendMessage(message.chat.id, output);
    }
});


telegram.on("text", (message) => {

    if (message.text.toLowerCase().indexOf("/listino") === 0) {
        telegram.sendPhoto(message.chat.id, "http://imghost.io/images/2017/11/04/a9d28557-df37-479a-a60e-5f01ae5e6b26.jpg");
    }
});


telegram.on("text", (message) => {

    if (message.text.toLowerCase() === "/togli") {
        telegram.sendMessage(message.chat.id, "Cosa vuoi togliere?\n/togli [n] <oggetto>");
    }
});