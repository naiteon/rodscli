import Command from '../models/interfaces/Command';
import DataStore from '../models/DataStore';

export default class CommandGet implements Command {

    validate(payload: string[]): boolean {
        return payload.length == 1;
    }

    execute(payload: string[], ds: DataStore): void {
        console.log(ds.getEntry(payload[0]));
    }
}