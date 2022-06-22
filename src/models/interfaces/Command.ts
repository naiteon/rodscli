import DataStore from "../DataStore";

export default interface Command {
    validate(payload: string[]): boolean;
    execute(payload: string[], ds: DataStore): void;
}