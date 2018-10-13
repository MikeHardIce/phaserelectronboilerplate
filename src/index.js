
import { Preloader } from './scenes/preload';
import { Game } from './scenes/game';

const config = {
    width: window.innerWidth,
    height: window.innerHeight - 30,
    parent: 'content',
    scene: [
        Preloader,
        Game
    ]
};

const theGame = new Phaser.Game(config);