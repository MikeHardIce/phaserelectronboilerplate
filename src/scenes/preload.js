

export class Preloader extends Phaser.Scene {

    constructor () {
        super({
            key: 'preloader'
        })
    }
    
    preload () {
        this.load.image('logo', './src/img/phaser.png');
    }
    
    
}
