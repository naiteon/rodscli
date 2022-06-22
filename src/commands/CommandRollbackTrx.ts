import Command from '../models/interfaces/Command';
import DataStore from '../models/DataStore';

export default class CommandRollback implements Command {

    validate(payload: string[]): boolean {
        return true;
    }

    execute(payload: string[], ds: DataStore): void {
        ds.rollbackTransaction();
    }
}