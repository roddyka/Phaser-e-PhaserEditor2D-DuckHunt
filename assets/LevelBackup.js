
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/** @type {Phaser.GameObjects.Container} */
		this.water;
		/** @type {Phaser.GameObjects.Image} */
		this.duck_target_yellow;
		/** @type {Phaser.GameObjects.Container} */
		this.water_front;
		/** @type {Phaser.GameObjects.Image} */
		this.crosshair;
		/** @type {Phaser.GameObjects.Image} */
		this.rifle;

		this.ducks;

		//score
		this.score;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		this.cursors = this.input.keyboard.createCursorKeys();
		this.bullets = 3;
		this.lastFired = 0;
		this.score = 0;
		this.overlapStatus = false;
		//velocidade dom pato
		const speedDuck = 50;

		this.ducks = this.physics.add.group();
		// bg_blue
		const bg_blue = this.add.image(408, 212, "bg_blue");
		bg_blue.scaleX = 4.824090742690887;
		bg_blue.scaleY = 3.036468630938655;
		
		// baclground_wood
		const baclground_wood = this.add.container(272, 208);
		
		// bg_wood_2
		const bg_wood_2 = this.add.image(0, 0, "bg_wood");
		bg_wood_2.scaleX = 1.1008601611198658;
		bg_wood_2.scaleY = 1.2866104352795176;
		baclground_wood.add(bg_wood_2);
		
		// bg_wood_2_1
		const bg_wood_2_1 = this.add.image(272, 0, "bg_wood");
		bg_wood_2_1.scaleX = 1.1008601611198658;
		bg_wood_2_1.scaleY = 1.2866104352795176;
		baclground_wood.add(bg_wood_2_1);
		
		// three
		const three = this.add.container(112, 208);
		
		// tree_pine
		const tree_pine = this.add.image(608, 0, "tree_pine");
		three.add(tree_pine);
		
		// tree_pine_1
		const tree_pine_1 = this.add.image(0, 16, "tree_pine");
		three.add(tree_pine_1);
		
		// terrain
		const terrain = this.add.container(16, 432);
		
		// grass1
		const grass1 = this.add.image(0, 0, "grass1");
		grass1.scaleX = 1.451178155416964;
		grass1.scaleY = 1.0687715333415622;
		terrain.add(grass1);
		
		// grass1_1
		const grass1_1 = this.add.image(192, 0, "grass1");
		grass1_1.scaleX = 1.451178155416964;
		grass1_1.scaleY = 1.0687715333415622;
		terrain.add(grass1_1);
		
		// grass1_1_1
		const grass1_1_1 = this.add.image(384, 0, "grass1");
		grass1_1_1.scaleX = 1.451178155416964;
		grass1_1_1.scaleY = 1.0687715333415622;
		terrain.add(grass1_1_1);
		
		// grass1_2
		const grass1_2 = this.add.image(576, 0, "grass1");
		grass1_2.scaleX = 1.451178155416964;
		grass1_2.scaleY = 1.0687715333415622;
		terrain.add(grass1_2);
		
		// grass1_1_2
		const grass1_1_2 = this.add.image(768, 0, "grass1");
		grass1_1_2.scaleX = 1.451178155416964;
		grass1_1_2.scaleY = 1.0687715333415622;
		terrain.add(grass1_1_2);
		
		// water
		const water = this.add.container(64, 480);
		
		// water1
		const water1 = this.add.image(0, 0, "water1");
		water.add(water1);
		
		// water1_1
		const water1_1 = this.add.image(128, 0, "water1");
		water.add(water1_1);
		
		// water1_1_1
		const water1_1_1 = this.add.image(384, 0, "water1");
		water.add(water1_1_1);
		
		// water1_2
		const water1_2 = this.add.image(256, 0, "water1");
		water.add(water1_2);
		
		// water1_1_1_1
		const water1_1_1_1 = this.add.image(768, 0, "water1");
		water.add(water1_1_1_1);
		
		// water1_2_1
		const water1_2_1 = this.add.image(640, 0, "water1");
		water.add(water1_2_1);
		
		// water1_1_2
		const water1_1_2 = this.add.image(512, 0, "water1");
		water.add(water1_1_2);
		
		// duck_target_yellow
		const duck_target_yellow = this.physics.add.image(160, 384, "duck_target_yellow");

		const duck_target_brown = this.physics.add.image(10, 384, "duck_target_brown");
		
		
		// water_front
		const water_front = this.add.container(16, 528);
		
		// water2
		const water2 = this.add.image(0, 0, "water2");
		water_front.add(water2);
		
		// water2_1
		const water2_1 = this.add.image(128, 0, "water2");
		water_front.add(water2_1);
		
		// water2_1_1
		const water2_1_1 = this.add.image(256, 0, "water2");
		water_front.add(water2_1_1);
		
		// water2_1_1_1
		const water2_1_1_1 = this.add.image(384, 0, "water2");
		water_front.add(water2_1_1_1);
		
		// water2_1_1_1_1
		const water2_1_1_1_1 = this.add.image(512, 0, "water2");
		water_front.add(water2_1_1_1_1);
		
		// water2_1_1_1_1_1
		const water2_1_1_1_1_1 = this.add.image(640, 0, "water2");
		water_front.add(water2_1_1_1_1_1);
		
		// water2_1_1_1_1_1_1
		const water2_1_1_1_1_1_1 = this.add.image(768, 0, "water2");
		water_front.add(water2_1_1_1_1_1_1);
		
		// woods
		const woods = this.add.container(32, 576);
		
		// bg_wood
		const bg_wood = this.add.image(0, 27, "bg_wood");
		bg_wood.scaleX = 1.5879640452542592;
		woods.add(bg_wood);
		
		// bg_wood_1
		const bg_wood_1 = this.add.image(368, 55, "bg_wood");
		bg_wood_1.scaleX = 1.5879640452542592;
		woods.add(bg_wood_1);
		
		// bg_wood_1_1
		const bg_wood_1_1 = this.add.image(694, 0, "bg_wood");
		bg_wood_1_1.scaleX = 1.5879640452542592;
		woods.add(bg_wood_1_1);
		
		// curtain
		const curtain = this.add.container(77, 33);
		
		// curtain_2
		const curtain_2 = this.add.image(-13, 191, "curtain");
		curtain.add(curtain_2);
		
		// curtain_straight
		const curtain_straight = this.add.image(0, 0, "curtain_straight");
		curtain_straight.scaleX = 1.2802640347550998;
		curtain.add(curtain_straight);
		
		// curtain_straight_1
		const curtain_straight_1 = this.add.image(328, 0, "curtain_straight");
		curtain_straight_1.scaleX = 1.2802640347550998;
		curtain.add(curtain_straight_1);
		
		// curtain_1
		const curtain_1 = this.add.image(659, 191, "curtain");
		curtain_1.scaleX = -1;
		curtain.add(curtain_1);
		
		// curtain_straight_1_1
		const curtain_straight_1_1 = this.add.image(656, 0, "curtain_straight");
		curtain_straight_1_1.scaleX = 1.2802640347550998;
		curtain.add(curtain_straight_1_1);
		
		// gun
		const gun = this.add.container(368, 352);
		
		// crosshair
		const crosshair = this.physics.add.image(16, 0, "crosshair_white_small");
		crosshair.setSize(25, 25, true);
		gun.add(crosshair);
		
		// rifle
		const rifle = this.add.image(96, 128, "rifle");
		rifle.scaleX = 0.5910274413994765;
		rifle.scaleY = 0.5910274413994765;
        gun.add(rifle);
        
        this.add.image(128, 64, "text_score");		
        // water_front (components)
        //new WaveMovement(water_front);        
		
		// gun (components)
		new Movement(gun);
		new Physics(gun);
		
		this.water = water;
		this.duck_target_brown = duck_target_brown;
		this.duck_target_yellow = duck_target_yellow;
		this.water_front = water_front;
		this.crosshair = crosshair;
		this.rifle = rifle;

		this.ducks.add(this.duck_target_yellow);
		this.ducks.add(this.duck_target_brown);
		//movendo a agua
		this.water_move(this.water, this.water_front);

		//verificando se esta overlap 
		this.overlap = this.physics.add.overlap(this.crosshair, this.ducks, this.overlapGun);

		//rezise bound area
		// this.ducks.children.entries.setSize(25, 25, true).setOffset(35, 55);
		this.ducks.children.iterateLocal('setSize', 25,25, true).iterateLocal('setOffset', 35,55, true);

		//colisao com o mundo
		// this.ducks.setCollideWorldBounds(true);
		// this.ducks.body.onWorldBounds = true;
		
		// this.ducks.body.world.on('worldbounds', function(body) {
		// 	console.log(body)
		// 	// Checks if it's the sprite that you'listening for
		// 	if (body.gameObject === this) {
		// 	  // Make the enemy sprite unactived & make it disappear
		// 	  this.destroy(false);
		// 	}
		//   }, this.ducks);
		
		
		
		this.duckMove(speedDuck);

		this.bullets = this.add.group();

		// this.input.on('pointerdown', function (pointer) {

		// 	this.fire();
		// 	console.log(this.bullets.getChildren());
	
		// }, this);

		// spawn ducks
		// this.time.addEvent({
		// 	delay: 2000,
		// 	callback: () => {
		// 	  this.spawnDucks()
		// 	  console.log(this.ducks.children)
		// 	},
		// 	loop: true
		// })
	}

	update(time, delta){

		//teclado
		if(this.cursors.space.isDown && this.overlap){
			this.fire();
		}
		// if(this.overlap && this.cursors.space.isDown){
		// 	this.fireInEnemy()
		// 	console.log('acertou!');
			
		// }
		

	}

	fire(){

		if(this.lastFired < (this.time.now - 1000)){

			this.ducks.children.iterate(child => {
				if (child && child.getBounds().contains(this.crosshair.body.position.x, this.crosshair.body.position.y)) {
				  //child.destroy(child, true)
				  console.log(child.getBounds())
				  this.fireInEnemy(child);
				}
			})
			
			this.cameras.main.shake(100, 0.02);
			
			this.bullets.create(this.crosshair.body.position.x,this.crosshair.body.position.y,'shot_yellow_small');
			
			console.log()

			if(this.bullets.children.entries.length > 5){
				this.bullets.clear(true);
			}

			this.lastFired = this.time.now;
		}

		
	}

	fireInEnemy(child){
		child.setFlipX(true);
		child.setTexture('duck_back').setFlipX(false);
	}
	
	/* START-USER-CODE */
	// Write your code here.
	water_move(water, water_front){
		//codigo para a agua se mover
		this.tweens.add({
			targets: water,
			x: 50,
			duration: 800,
			ease: "Linear",
			yoyo: true,
			loop: -1
		});

		this.tweens.add({
			targets: water_front,
			x: 55,
			duration: 700,
			ease: "Linear",
			yoyo: true,
			loop: -1
		});
	}

	shakeCamera(cursors){
		console.log('fire');
		//codigo para colocar no create
	}

	//this.physics.add.overlap(this.crosshair, this.duck_target_yellow);
	overlapGun(){
		if(this.fire){
			this.score += 100;
		}
		console.log(this.overlapStatus);
	}

	overlapBullet(){
		console.log('YEAH!');
		return true;
	}

	spawnDucks(){

		const randomX = this.cameras.main.width * Math.random();
		const randomY = 384;

		let duckcolor;
		if(randomX < 200){
			duckcolor = 'yellow'
		}else if (randomX >= 200){
			duckcolor = 'brown'
		}else{
			duckcolor = 'white' 
		}
		

		const duck = this.physics.add.sprite(randomX, randomY, 'duck_target_'+duckcolor)
		this.ducks.add(duck)
	}

	duckMove(speed){
		this.ducks.setVelocity(speed,0)
	}

	// no create colocar  para criar o pato fisicamente
	// const duck_target_yellow = this.physics.add.image(160, 384, "duck_target_yellow");
	// const crosshair = this.physics.add.image(16, 0, "crosshair_white_small");
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
