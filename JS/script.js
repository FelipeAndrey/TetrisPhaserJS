class mainScene{
	preload(){

	}

	create(){

	}

	update(){

	}
}

new Phaser.Game({
	width: 1024,
	height: 768,
	backgroundColor: '#3E1A42',
	scene: mainScene,
	physics: { default: 'arcade' },
	parent: 'canvas'
});