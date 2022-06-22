import Command from '../models/interfaces/Command';
import DataStore from '../models/DataStore';

export default class CommandSet implements Command {

    validate(payload: string[]): boolean {
        return payload.length == 2;
    }

    execute(payload: string[], ds: DataStore): void {
        ds.setEntry(payload[0], payload[1]);
    }
}