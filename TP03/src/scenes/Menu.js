class Menu extends Phaser.Scene{

    constructor(){
        super({key:'Menu'});
    }

    preload(){
            this.load.audio('sonidoBG', '../sounds/MenuSound.mp3');
            this.load.image('MenuBG', '../assets/MenuBG.png');
            this.load.spritesheet('button', '../assets/StartButton.png', {frameWidth:290, frameHeight:130});
    }

    create(){
        this.sonido = this.sound.add('sonidoBG');
        const soundConfig = {
            volume: 1,
            loop: true
        }
        
        if(this.sound.locked){
            this.sonido.play(soundConfig);
        }else{
            this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
                 this.sonido.play(soundConfig);

            })
        }
    

        this.add.image(0,0, 'MenuBG');
        this.startButton = this.add.sprite(400,200, 'startButton').setInteractive();
        
        this.startButton.on('pointerover', ()=>{
            this.startButton.setFrame(1);
        });

        this.startButton.on('pointerout',() => {
            this.startButton.setFrame(0);
        });

        this.startButton.on('pointerdown',() => {
            this.startButton.scene.start(Scene_play.js);
        });


    }


}
export default Menu;