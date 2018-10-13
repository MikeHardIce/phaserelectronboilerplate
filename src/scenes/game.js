

export class Game extends Phaser.Scene {
    constructor () {
        super({
            key: 'game'
        })
    }

    create () {
        
        let logo = this.add.sprite(0, 0, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
}
