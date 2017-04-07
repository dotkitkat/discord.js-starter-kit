// this is how you import stuff in TypeScript
import commando = require('discord.js-commando')
// you can also import classes
import { Client } from 'discord.js';
// or just import normally
import discord = require('discord.js')

import path = require('path');

// : commando.CommandoClient is saying that this variable's type is commando.CommandoClient and must be
var client: commando.CommandoClient = new commando.CommandoClient({
    disabledEvents: [ 'TYPING_START' ] // << improves performance a tad
});

// this will crash the TypeScript compiler
// client = 2;

var commandGroups = [
    ['fun', 'Fun']
    // ['folderName', 'GroupName']
]

client.registry
    .registerDefaults()
    .registerGroups(commandGroups)
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.login("mytoken");

// : number = returns number
function myFunctionThatReturnsNumber(): number {
    return 1;
}