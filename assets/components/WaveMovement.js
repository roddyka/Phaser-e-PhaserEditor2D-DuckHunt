
// You can write more code here

/* START OF COMPILED CODE */

class WaveMovement {
	
	constructor(gameObject) {
		gameObject["__WaveMovement"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		const scene = this.gameObject.scene

		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {WaveMovement} */
	static getComponent(gameObject) {
		return gameObject["__WaveMovement"];
	}
	
	/* START-USER-CODE */
	update(){
		
	}
	// Write your code here.
	water_move(water){
		// console.log(water)
		// this.tweens.add({
		// 	targets: water,
		// 	x: 50,
		// 	duration: 1000,
		// 	ease: "Power2",
		// 	yoyo: true,
		// 	loop: -1
		// });

		// this.tweens.add({
		// 	targets: water_front,
		// 	x: 50,
		// 	duration: 1000,
		// 	ease: "Power2",
		// 	yoyo: true,
		// 	loop: -1
		// });
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
