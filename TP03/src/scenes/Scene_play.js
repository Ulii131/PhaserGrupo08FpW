class Scene_play extends Phaser.Scene{

  constructor(){
    super('Scene_play');
  }


  preload(){
    
  }

  create(){
    this.add.image(400,300,'sky');
    //CREACION DE LAS PLATAFORMAS

  let platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'platform').setScale(2).refreshBody();

  platforms.create(600, 400, 'platform');
  platforms.create(50, 250, 'platform');
  platforms.create(750, 220, 'platform');
  }
}

export default Scene_play;