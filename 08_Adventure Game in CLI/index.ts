import inquirer from 'inquirer';
import chalk from 'chalk';


class Game
{
    constructor()
    {
        console.log("hello");
    }
    
    public async main() : Promise<void> {
    
    }
}





console.log(chalk.green.bgYellow(" # \t Hello Welcome to Adventure game  \t #"));
setTimeout(() =>{
    console.log(chalk.white.bgBlackBright("Game is loading..."));
},1000);
const game = new Game();
