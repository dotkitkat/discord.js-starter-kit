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

// NOTICE
// You may have noticed the typings-discord.js-commando folder on the left.
// Typings are what people define what their classes are what their functions are so that other devs can
// use IntelliSense. They should automatically install with djs-commando (like they did with discord.js) but
// I can't get them to do it automatically. I have downloaded the latest copy from the GitHub repository and put
// it here for your convenience. VS Code automatically detects *.d.ts files (typings) and uses them.

// the following line will crash the TypeScript compiler
// client = 2;
// you can not convert `number` to `commando.CommandoClient`

var commandGroups: string[][] = [
    ['fun', 'Fun']
    // ['folderName', 'GroupName']
]

client.registry
    .registerDefaults()
    .registerGroups(commandGroups)
    .registerCommandsIn(path.join(__dirname, 'commands'))

// variable mytoken is of type string
var mytoken: string = "mytoken";

client.login(mytoken);

// : number = returns number
function myFunctionThatReturnsNumber(): number {
    return 1;
    // not returning anything will crash the compiler and show an error message in VSC
}