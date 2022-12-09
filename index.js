var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.body.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ButtonInnerHTML = this.innerHTML;
        makeSound(ButtonInnerHTML)
        buttonAnimation(ButtonInnerHTML)
    });

};
document.addEventListener("keydown", function (ButtonInnerHTML) {
    makeSound(ButtonInnerHTML.key)
    buttonAnimation(ButtonInnerHTML.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/4.mp3")
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sounds/1.mp3")
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds/2.mp3")
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sounds/3.mp3")
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sounds/5.mp3")
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("sounds/4.mp3")
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("sounds/7.mp3")
            audio7.play();
            break;

        default: console.log()


    };
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 130)


}