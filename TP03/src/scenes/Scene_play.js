class Scene_play extends Phaser.Scene{

  constructor(){
    super('Scene_play');
    
  }

  preload(){
   }
  create(){
    this.add.image(400,300,'sky');
    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    // Crea las animaciones del jugador aquí
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    let platforms = this.physics.add.staticGroup();
    //CREACION DE LAS PLATAFORMAS
    platforms.create(400, 568, 'platform').setScale(2).refreshBody();

    platforms.create(600, 400, 'platform');
    platforms.create(50, 250, 'platform');
    platforms.create(750, 220, 'platform');

    // Habilita la gravedad
    this.physics.world.gravity.y = 300;

    // Configura las colisiones entre el jugador y las plataformas
    this.physics.add.collider(this.player, platforms);

    this.cursors = this.input.keyboard.createCursorKeys();

    // CREACIÓN DE LAS ESTRELLAS
    let stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
    });

    // Configura las colisiones entre las estrellas y las plataformas
    this.physics.add.collider(stars, platforms);

    // Configura la recolección de estrellas por parte del jugador
    this.physics.add.overlap(this.player, stars, collectStar, null, this);
  }


  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    // Agrega una lógica para saltar
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
  
}
// Función para recolectar estrellas
function collectStar(player, star) {
  star.disableBody(true, true);
}

export default Scene_play;