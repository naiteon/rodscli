// import Command from './models/interfaces/Command';
// import CommandFactory from './utils/CommandFactory';
// import { CommandTypes } from './utils/CommandTypes';

// const command: null | Command = CommandFactory.getCommand(CommandTypes.Get);

// command?.execute("wow");

import InputController from './controllers/InputController';

const app = new InputController();

app.init();