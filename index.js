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
        } else if (isNumeric(arg1) && arg2 in dict) {
            if (arg1 > 0) {
                var sub = dict[arg2] - arg1;
                var cc = dict[arg2] = sub;
                telegram.sendMessage(message.chat.id, "Ora cerchi: " + arg2 + " x" + cc);
                for (var val in dict) {
                    if (dict[val] <= 0) {
                        telegram.sendMessage(message.chat.id,"\""+ arg2 + "\" è stato rimosso dalla lista!");
                        delete dict[val];
                    }
                }
            } else {
                telegram.sendMessage(message.chat.id, "Deve essere un numero positivo, piccolo birbantello.");
            }
        } else if (!isNumeric(arg1) && arg1 in dict) {
            var decr = dict[arg1] - 1;
            var ee = dict[arg1] = decr;
            telegram.sendMessage(message.chat.id, "Ora cerchi: " + arg1 + " x" + ee);
            for (var val in dict) {
                if (dict[val] <= 0) {
                    telegram.sendMessage(message.chat.id,"\""+ arg1 + "\" è stato rimosso dalla lista!");
                    delete dict[val];
                }
            }
        } else if (isNumeric(arg1) && !(arg2 in dict)) {
            telegram.sendMessage(message.chat.id, "\"" + arg2 + "\" non è nella lista!");
        } else if (!isNumeric(arg1) && !(arg1 in dict)) {
            telegram.sendMessage(message.chat.id, "\"" + arg1 + "\" non è nella lista!");
        }
        ;





    }
});

telegram.on("text", (message) => {

    if (message.text.toLowerCase().indexOf("/show") === 0) {
        var lol = message.text.split(" ");
        var arg1 = lol[1];
        if (arg1 === undefined) {
            var output = '';
            for (var property in dict) {
                output += property + ': ' + dict[property] + '; ';
            }
            telegram.sendMessage(message.chat.id, output);
        } else if (arg1 in dict) {
            telegram.sendMessage(message.chat.id, "Cerchi: " + arg1 + " x" + dict[arg1]);
        } else {
            telegram.sendMessage(message.chat.id, "Al momento non stai cercando questo oggetto.");
        }
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
        } else if (isNumeric(arg1) && arg2 in dict) {
            if (arg1 > 0) {
                var er = dict[arg2];
                var sub = er + parseInt(arg1);
                var cc = dict[arg2] = sub;
                telegram.sendMessage(message.chat.id, "Ora cerchi: " + arg2 + " x" + cc);
            } else {
                telegram.sendMessage(message.chat.id, "Deve essere un numero positivo, piccolo birbantello.");
            }
        } else if (!isNumeric(arg1) && arg1 in dict) {
            var ar = dict[arg1];
            var incr = ar + 1;
            var ee = dict[arg1] = incr;
            telegram.sendMessage(message.chat.id, "Ora cerchi: " + arg1 + " x" + ee);
        } else if (isNumeric(arg1) && !(arg2 in dict)) {
            telegram.sendMessage(message.chat.id, "\"" + arg2 + "\" non è nella lista!");
        } else if (!isNumeric(arg1) && !(arg1 in dict)) {
            telegram.sendMessage(message.chat.id, "\"" + arg1 + "\" non è nella lista!");
        }
    }
});

telegram.on("text", (message) => {

    if (message.text.toLowerCase().indexOf("/ins") === 0) {
        var lol = message.text.split(" ");
        var arg1 = lol[1];
        var arg2 = lol[2];
        if (arg1 === undefined) {
            telegram.sendMessage(message.chat.id, "Cosa vuoi inserire?\n/new [n] <oggetto>");
        } else if (isNumeric(arg1) && arg2 in dict || !isNumeric(arg1) && arg1 in dict) {
            telegram.sendMessage(message.chat.id, "È già presente nella lista!");
        } else if (!isNumeric(arg1) && !(arg1 in dict)) {
            dict[arg1] = 1;
            telegram.sendMessage(message.chat.id, "Aggiunto " + arg1 + " x1 alla lista!");
        } else if (isNumeric(arg1) && !(arg2 in dict)) {
            if (arg1 > 0) {
                dict[arg2] = arg1;
                telegram.sendMessage(message.chat.id, "Aggiunto " + arg2 + " x" + arg1 + " alla lista!");
            } else {
                telegram.sendMessage(message.chat.id, "Deve essere un numero positivo, piccolo birbantello.");
            }
        }
    }
});

telegram.on("text", (message) => {

    if (message.text.toLowerCase().indexOf("/del") === 0) {
        var lol = message.text.split(" ");
        var arg1 = lol[1];
        if (arg1 === undefined) {
            telegram.sendMessage(message.chat.id, "Cosa vuoi eliminare?\n/del <oggetto>");
        } else if (arg1 in dict) {
            delete dict[arg1];
            telegram.sendMessage(message.chat.id, "\"" + arg1 + "\" eliminato dalla lista.");
        } else if (!(arg1 in dict)) {
            telegram.sendMessage(message.chat.id, "\"" + arg1 + "\" Non trovato!\nUsa /count per vedere gli oggetti presenti nella lista.");
        }
    }
});
