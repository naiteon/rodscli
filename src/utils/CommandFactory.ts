import CommandGet from "../commands/CommandGet";
import CommandSet from "../commands/CommandSet";
import CommandUnset from "../commands/CommandUnset";
import CommandNumEqualTo from "../commands/CommandNumEqualTo";
import CommandBegin from "../commands/CommandBeginTrx";
import CommandCommit from "../commands/CommandCommitTrx";
import CommandRollback from "../commands/CommandRollbackTrx";
import CommandEnd from "../commands/CommandEnd";
import Command from "../models/interfaces/Command";
import { CommandTypes } from "./CommandTypes";

export default class CommandFactory {
    static getCommand(command: CommandTypes): Command {

        switch(command) {
            case CommandTypes.Get:
                return new CommandGet();
                break;
            case CommandTypes.Set:
                return new CommandSet();
                break;
            case CommandTypes.NumEqualTo:
                return new CommandNumEqualTo();
                break;
            case CommandTypes.Unset:
                return new CommandUnset();
                break;
            case CommandTypes.Begin:
                return new CommandBegin();
                break;
            case CommandTypes.Rollback:
                return new CommandRollback();
                break;
            case CommandTypes.Commit:
                return new CommandCommit();
                break;
            case CommandTypes.End:
                return new CommandEnd();
                break;
        }
    }
}