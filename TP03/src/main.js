import Bootloader from './scenes/Bootloader.js';
import Scene_play from './scenes/Scene_play.js';
import Menu from './scenes/Menu.js'

const config = {
    title: "Estrellas",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 800,
        height: 600,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#e67e22",
    pixelArt: false,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [
        Bootloader,
        Scene_play,
        Menu
    ]
};

new Phaser.Game(config);