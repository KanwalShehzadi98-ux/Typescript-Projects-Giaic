#! /usr/bin/env node

import inquirer from 'inquirer';

type Room = {
    name: string;
    description: string;
    items: string[];
    actions: { [key: string]: string };
};

type GameState = {
    currentRoom: Room;
    inventory: string[];
};

const rooms: { [key: string]: Room } = {
    start: {
        name: 'Start Room',
        description: 'You are in a small, dimly lit room. There is a door to the north.',
        items: ['key'],
        actions: {
            north: 'hallway',
            take: 'key'
        }
    },
    hallway: {
        name: 'Hallway',
        description: 'You are in a long hallway. There are doors to the south and east.',
        items: [],
        actions: {
            south: 'start',
            east: 'treasure room'
        }
    },
    'treasure room': {
        name: 'Treasure Room',
        description: 'You have found the treasure room! There is a chest here.',
        items: ['treasure'],
        actions: {
            west: 'hallway',
            take: 'treasure'
        }
    }
};

const gameState: GameState = {
    currentRoom: rooms.start,
    inventory: []
};

const displayCurrentRoom = () => {
    console.log(gameState.currentRoom.description);
    if (gameState.currentRoom.items.length > 0) {
        console.log(`You see: ${gameState.currentRoom.items.join(', ')}`);
    }
};
const handleAction = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'action',
            message: 'What do you want to do?'
        }
    ]);

    const action = answers.action.toLowerCase();

    if (action in gameState.currentRoom.actions) {
        const target = gameState.currentRoom.actions[action];
        if (action === 'take') {
            const itemIndex = gameState.currentRoom.items.indexOf(target);
            if (itemIndex > -1) {
                gameState.inventory.push(target);
                gameState.currentRoom.items.splice(itemIndex, 1);
                console.log(`You have taken the ${target}.`);
            } else {
                console.log(`There is no ${target} here.`);
            }
        } else {
            gameState.currentRoom = rooms[target];
            console.log(`You move to the ${gameState.currentRoom.name}.`);
        }
    } else {
        console.log('You cannot do that here.');
    }
    displayCurrentRoom();
    handleAction();
};

displayCurrentRoom();
handleAction();
