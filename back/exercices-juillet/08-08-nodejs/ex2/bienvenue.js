const figlet = require('figlet');
const chalk = require("chalk");

function afficherAscii(message) {
figlet(message, (err, data) => {
    if (err) {
        console.log("Une erreur est survenue")
        console.dir(err);
        return;
    }
    console.log(chalk.cyan(data));
});
}

afficherAscii("Bienvenue");
afficherAscii("TEST");