//color
log(chalk.red("This is red"))
log(chalk.green("This is green"))
log(chalk.magenta("This is megenta"))
//background
log(chalk.bgRed("error"))
log(chalk.bgGreen("error"))
log(chalk.bgMagenta("error"))
//styling & Decoration
log(chalk.bold("This is bold"))
log(chalk.italic("This is italic"))
log(chalk.underline("This is underline"))
//chaining
log(chalk.bgRed.white.bold("error"))
log(chalk.italic.bgBlueBright("error"))
log(chalk.underline.yellowBright("error"))
//Hex & RGB
log(chalk.hex('ffff00').bold("This is hex"))
log(chalk.rgb(256,256,256).bold("This is RGB"));
