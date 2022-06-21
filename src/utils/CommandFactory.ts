import CommandGet from "../commands/CommandGet";
import Command from "../models/interfaces/Command";
import { CommandTypes } from "./CommandTypes";

export default class CommandFactory {
    static getCommand(command: CommandTypes): Command | null {

        switch(command) {
            case CommandTypes.Get:
                return new CommandGet();
            default:
                return null;
        }
    }
}