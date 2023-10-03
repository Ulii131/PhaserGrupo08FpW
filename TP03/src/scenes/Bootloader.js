class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');


        this.load.on('complete', () => {
            this.scene.start("Scene_play");
        });

        this.load.image('bomb', '../assets/bomb.png');
        this.load.spritesheet('dude','../assets/dude.png',{frameWidth: 32, frameHeight: 48});
        this.load.image('platform','../assets/platform.png');
        this.load.image('sky','../assets/sky.png');
        this.load.image('star','../assets/star.png');
        this.load.audio('sonidoBG', '../sounds/MenuSound.mp3');
            this.load.image('MenuBG', '../assets/MenuBG.png');
            this.load.spritesheet('button', '../assets/StartButton.png', {frameWidth:290, frameHeight:130});
        
    }

    create() {
        
        
    }
}
export default Bootloader;