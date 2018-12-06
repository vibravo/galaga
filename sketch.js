//bullet
var bullet = [];
var firing;

//ship
var galagaship;
var ok = 0;
var idk = 500;

//stars
var stararray = [];
var stars;
var numberofstars = 200;

//bee
var bees;
var Count = 0;

//boss
var bossga;
var County = 0;

function preload(){
	//images
	bulletpic = loadImage('bullets.png');
	ship = loadImage('galaga_ship.png');
	bee = loadImage('bee.png');
	bossgalaga = loadImage('bossgalaga.png');
	logo = loadImage('galagalogo.png');
	//sound effects
	firing = loadSound("firing.mp3");
	theme = loadSound("galaga_theme.mp3");

}
	
function setup() {
	createCanvas(500, 800);
	rectMode(RADIUS);
	imageMode(CENTER);
	
	theme.play();
	
	//set up stars
	for (var i = 0; i < numberofstars; i++){
		var stars = new star;
		stars.position(width,height);
		stararray[i] = stars;
	}	
}

function draw() {
	background(0);
	rectMode(RADIUS);
	imageMode(CENTER);
	
	//objects
	galagaship = new shipobject(ship);
	bees = new beeobject(bee);
	bossga = new bossgalagaobject(bossgalaga);
	
	//resize images
	ship.resize(50,0);
	bee.resize(50,0);
	bossgalaga.resize(50,0);

	//draw stars
	for(var i = 0; i < numberofstars; i++){
		fill(random(0,255),random(0,255),random(0,255));				
		rect(stararray[i].x,stararray[i].y,2,2);
	}
	
	galagaship.move(ok,this.ratio);
	galagaship.display();
	galagaship.cdistance();
	bees.PlaceImage();
	bees.move();
	bossga.move();

	//three ships
	image(ship,20,750,30,30);
	image(ship,50,750,30,30);
	image(ship,80,750,30,30);
	
	//bullets
	for (var i = 0; i < bullet.length; i++) {									
	bullet[i].display();
	bullet[i].y = (bullet[i].y + bullet[i].step)%height;
	}
}

function keyPressed(){
  //move ship
	var n = 20;
		if (keyCode === RIGHT_ARROW) {
			 ok = ok + n
		} else if (keyCode === LEFT_ARROW) {
			 ok = ok - n
		}
	if (ok == idk) {
		ok = 0
	}
}

function mousePressed(){ 
	firing.play();
	bullet[bullet.length] = new bulletobject(galagaship.X,650);
}

//objects

function shipobject(img) {
	this.img = img;
	this.InitX = 250;
	this.X = img.X;
	this.InitY = 700;
	this.Y = 800;
	
	this.move = function(step,ratio) {
		this.X = this.InitX + step;
		this.Y = this.InitY + 1;
	}
	
	this.display = function() {
		image(img,this.X,this.Y);	
	}

	this.cdistance = function() {
		this.distance = idk - this.InitX
		this.ratio = 1-ok/this.distance
	}
}

function bulletobject(x,y){
	this.x = x;
	this.y = y;
	this.size = 30;
	this.step = -10;
	
	this.display = function(){
		image(bulletpic,this.x,this.y,this.size,this.size);
		
	}	
}

function beeobject(Img) {
	this.img = Img
	this.X = Img.x;
	this.Y = Img.y;
	
 this.PlaceImage = function() {
	 image(this.img,this.X ,this.Y) 
 }
 this.move = function(){
	 Count = Count + .2;
   if (Count > 650)
		 Count = 0;
	 
	 image(bee,240,Count);
 }
}
 
 function bossgalagaobject(Img) {
	this.img = Img
	this.X = Img.x;
	this.Y = Img.y;
	
 this.PlaceImage = function() {
	 image(this.img,this.X ,this.Y) 
 }
 this.move = function(){
	 County = County + .2;
   if (County > 600)
		 County = 0;
	 
	 image(bossgalaga,350,100+County);
 }
}

function star(){
		this.x;
		this.y;
		this.size;
		
		this.position = function(x,y){
			this.x = random(x);
			this.y = random(y);
			
		}
	}
