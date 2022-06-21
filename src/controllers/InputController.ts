import readline from 'readline';

export default class InputController {

    private rl: any;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });
    }

    init(): void {
        this.rl.on('line', (line: string): void =>{
            console.log(line);
        });
    }
}