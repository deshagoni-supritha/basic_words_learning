var num = document.querySelectorAll(".alphabet").length;
for (var i=0; i<num; i++) {
    document.querySelectorAll(".alphabet")[i].addEventListener("click", handle);
    function handle() {
    var sym = this.innerHTML;
    makeSound(sym);
    }
};
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key) {
    switch(key) {
        case 'a':
            var audio = new Audio("sounds/apple.mp3");
            audio.play();
            break;
        case 'b':
            var audio = new Audio("sounds/ball.mp3");
            audio.play();
            break;
        case 'c':
            var audio = new Audio("sounds/cat.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/dog.mp3");
            audio.play();
            break;
        case 'e':
            var audio = new Audio("sounds/elephant.mp3");
            audio.play();
            break;
        case 'f':
            var audio = new Audio("sounds/fish.mp3");
            audio.play();
            break;
        case 'g':    
            var audio = new Audio("sounds/gun.mp3");
            audio.play();
            break;
        case 'h':
            var audio = new Audio("sounds/hat.mp3");
            audio.play();
            break;
        case 'i':
            var audio = new Audio("sounds/ice.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/jeep.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kite.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/lamp.mp3");
            audio.play();
            break;
        case 'm':
            var audio = new Audio("sounds/monkey.mp3");
            audio.play();
            break;
        case 'n':
            var audio = new Audio("sounds/nest.mp3");
            audio.play();
            break;
        case 'o':
            var audio = new Audio("sounds/owl.mp3");
            audio.play();
            break;
        case 'p':
            var audio = new Audio("sounds/parrot.mp3");
            audio.play();
            break;
        case 'q':
            var audio = new Audio("sounds/queen.mp3");
            audio.play();
            break;
        case 'r':
            var audio = new Audio("sounds/ring.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/sparrow.mp3");
            audio.play();
            break;
        case 't':
            var audio = new Audio("sounds/tiger.mp3");
            audio.play();
            break;
        case 'u':
            var audio = new Audio("sounds/umbrella.mp3");
            audio.play();
            break;
        case 'v':
            var audio = new Audio("sounds/violin.mp3");
            audio.play();
            break;
        case 'w':
            var audio = new Audio("sounds/watch.mp3");
            audio.play();
            break;
        case 'x':
            var audio = new Audio("sounds/xmas.mp3");
            audio.play();
            break;
        case 'y':
            var audio = new Audio("sounds/yak.mp3");
            audio.play();
            break;
        case 'z':
            var audio = new Audio("sounds/zebra.mp3");
            audio.play();
            break;
        default :
            console.log("default");

    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}