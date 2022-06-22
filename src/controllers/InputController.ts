import readline from 'readline';
import DataStore from '../models/DataStore';
import Command from '../models/interfaces/Command';
import CommandFactory from '../utils/CommandFactory';
import { CommandTypes } from '../utils/CommandTypes';

export default class InputController {

    private rl: any;
    ds: DataStore;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        this.ds = DataStore.getInstance();
    }

    init(): void {
        this.rl.on('line', (line: string): void =>{
            let params: string[];
            const wrongInputMsg: string = "Wrong input. Check the manual.";

            line = line.trim();

            if(line.length == 0) {
                this.printMessage(wrongInputMsg);
            }

            if(line.indexOf(" ") > 0) {
                params = line.split(" ");
            } else {
                params = [line];
            }

            params[0] = params[0].toUpperCase();
            let command: CommandTypes;

            if(Object.values(CommandTypes).some((cmd: string) => cmd === params[0])) {
                command = <CommandTypes> params[0];

                this.executeCommand(
                    CommandFactory.getCommand(command),
                    params.length > 1 ? params.slice(1) : []
                );
            } else {
                console.log(`Invalid command ${params[0]}`);
            }

        });
    }

    executeCommand(command: Command, payload: string[]) {
        try {
            if(!command.validate(payload)) {
                throw "Invalid data.";
            }

            command.execute(payload, this.ds);
        } catch (ex: any) {
            console.log(ex);
        }
    }

    printMessage(message: string): void {
        console.log(message);
    }
}