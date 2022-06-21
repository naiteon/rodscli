import Command from '../models/interfaces/Command';

export default class CommandGet implements Command {
    execute(payload: string): void {
        console.log(`${payload}`);
    }
}