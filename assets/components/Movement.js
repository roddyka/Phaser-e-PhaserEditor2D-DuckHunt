
// You can write more code here

/* START OF COMPILED CODE */

class Movement {
	
	constructor(gameObject) {
		gameObject["__Movement"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		const scene = this.gameObject.scene

		this.cursors = scene.input.keyboard.createCursorKeys()		

		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Movement} */
	static getComponent(gameObject) {
		return gameObject["__Movement"];
	}
	
	/* START-USER-CODE */

	// Write your code here.
	update(){
		const speed = 200
		this.fire = false;

		const rifle = this.gameObject
		const body = rifle.body

		rifle.list[0].setTexture('crosshair_white_small');
		rifle.list[1].setTexture('rifle');

		if(!body){
			return
		}

		if (this.cursors.left.isDown)
		{
			body.setVelocity(-speed, 0)
			
			//this.rifle.play('gun-fire', true)
		}
		else if (this.cursors.right.isDown)
		{
			body.setVelocity(speed, 0)
			//crosshair.setVelocity(speed, 0)
			//this.rifle.play('right-walk', true)
		}
		else if (this.cursors.up.isDown)
		{
			body.setVelocity(0, -speed)
			//crosshair.setVelocity(0, -speed)
			//this.rifle.play('up-walk', true)
		}
		else if (this.cursors.down.isDown)
		{
			body.setVelocity(0, speed)
			//crosshair.setVelocity(0, speed)
			//this.rifle.play('down-walk', true)
		}
		else
		{
			body.setVelocity(0, 0)
			// crosshair.setVelocity(0, 0)
			//const key = rifle.anims.currentAnim.key
			// const parts = key.split('-')
			// const direction = parts[0]
			//body.play(`${direction}-idle`)
		}

		if(this.cursors.space.isDown && this.fire == false){
			this.fire = true;
			if(this.fire){
				rifle.list[1].setTexture('rifle_red');
				rifle.list[0].setTexture('crosshair_red');
				this.fire = false;
			}
		}
	}

	shake() {
		//  You can set your own intensity and duration
		
	}
	
		/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
