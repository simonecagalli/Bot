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

    if (message.text.toLowerCase().indexOf("/sub") === 0) {
        var lol = message.text.split(" ");
        var arg1 = lol[1];
        var arg2 = lol[2];
        if (arg1 === undefined) {
            telegram.sendMessage(message.chat.id, "Ma togliere cosa?\n/sub [n] <oggetto>");
        } else {
            if (isNumeric(arg1) && arg2 in dict) {
                var sub = dict[arg2] - arg1;
                var cc = dict[arg2] = sub;
                telegram.sendMessage(message.chat.id, arg2 + " x" + cc);
            } else {
                if (!isNumeric(arg1) && arg1 in dict) {
                    var decr = dict[arg1] - 1;
                    var ee = dict[arg1] = decr;
                    telegram.sendMessage(message.chat.id, arg1 + " x" + ee);
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

    if (message.text.toLowerCase().indexOf("/add") === 0) {
        var lol = message.text.split(" ");
        var arg1 = lol[1];
        var arg2 = lol[2];
        if (arg1 === undefined) {
            telegram.sendMessage(message.chat.id, "Ma aggiungere cosa?\n/add [n] <oggetto>");
        } else {
            if (isNumeric(arg1) && arg2 in dict) {
                var er = dict[arg2];
                var sub = er + parseInt(arg1);
                var cc = dict[arg2] = sub;
                telegram.sendMessage(message.chat.id, arg2 + " x" + cc);
            } else {
                if (!isNumeric(arg1) && arg1 in dict) {
                    var ar = dict[arg1];
                    var incr = ar + 1;
                    var ee = dict[arg1] = incr;
                    telegram.sendMessage(message.chat.id, arg1 + " x" + ee);
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
    }
});