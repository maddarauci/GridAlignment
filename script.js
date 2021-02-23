/*
function preload() {
  // might not need this function in future 
    //this.load.image('player', 'assets/repl.png');
}
*/
/*
// not mine 
function create() {
    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    this.player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(0.25, 0.25);
    this.player.setCollideWorldBounds(true);
}

function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    else this.player.setVelocityX(0);
    if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    else this.player.setVelocityY(0);
}

const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 400,
    backgroundColor: '#f9f9f9',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
*/

// begining 
// might not need the start of this function in future 
//( migh cause an error )
/*
----------- this simple Phaser program just shows 
  a picture of diamonds(assets)
*/
class Exmaple extends Phaser.Scene
{
  constructor () {
    super('nothing');
  }
  preload ()
  {
    this.load.spritesheet('diamonds', 'assets/diamonds32x24x5.png', { frameWidth: 32, frameHeigh: 24});

  }

  //console.log('third but in the middle');

  create () {
    const group = this.add.group({
      key: 'diamonds',
      frame: [0,1,2,3,4],
      frameQuantity: 20
    });
    Phaser.Actions.GridAlign(group.getChildren(), {
      width: 10,
      height: 10,
      cellWidth: 32,
      cellHeight: 32,
      x: 100,
      y: 100
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  backgroundColor: '2d2d2d',
  parent: 'phaser-example',
  scene: [Exmaple]
};

// i assume every phaser program has this last part 
//to inialize the game 
const game = new Phaser.Game(config);
