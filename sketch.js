//VARIABLE DECLARATION

//SPRITE
var cat, cat_moving, cat_standing, cat_sitting;
var mouse, mouse_standing, mouse_playing, mouse_search;

//BACKGROUND
var garden, garden_pic;


//LOADING IMAGE AND ANIMATION
function preload() {

    //BACKGROUND IMAGE
    garden_pic = loadImage("Images/garden.png");

    //CAT ANIMATION
    cat_moving = loadAnimation("Images/cat2.png","Images/cat3.png");
    cat_standing = loadAnimation("Images/cat4.png");
    cat_sitting = loadAnimation("Images/cat1.png");

    //MOUSE ANIMATION
    mouse_standing = loadAnimation("Images/mouse1.png");
    mouse_playing = loadAnimation("Images/mouse2.png","Images/mouse3.png");
    mouse_search = loadAnimation("Images/mouse4.png");
}


//CREATING SPRITE AND THEIR PROPERTIES
function setup(){

    //CREATING CANVAS
    createCanvas(1000,800);

    //CREATING BACKGROUND
    garden = createSprite(500,400,1000,800);
    garden.addAnimation("GARDEN",garden_pic);

    //CREATING SPRITES
    cat = createSprite(600,600,10,10);
    cat.addAnimation("MOVING",cat_moving);
    cat.addAnimation("STANDING",cat_standing);
    cat.addAnimation("SITTING",cat_sitting);
    cat.scale = 0.2;

    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("SEARCH",mouse_search);
    mouse.addAnimation("PLAYING",mouse_playing);
    mouse.addAnimation("STANDING",mouse_standing);
    mouse.scale = 0.1;

    //DEBUG
    cat.debug = true;
    mouse.debug = true;
}


//ON EVENT CODE
function draw() {

    background(255);

    //TOUCHING CODE
    if(cat.isTouching(mouse)) {
        cat.changeAnimation("SITTING",cat_sitting);
        mouse.changeAnimation("SEARCH",mouse_search);
    } 
    else {
        mouse.changeAnimation("PLAYING",mouse_playing);
    }

    //KEY CODE
    if (keyDown("left_arrow")) {
        cat.x -= 3
        cat.changeAnimation("MOVING",cat_moving);
    }
    else {
        cat.changeAnimation("STANDING",cat_standing);
    }

    drawSprites();
}
