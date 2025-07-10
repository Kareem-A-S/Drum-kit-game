var buttonsArray = document.querySelectorAll(".drum");

for(var i = 0 ; i < buttonsArray.length ; i++){
    buttonsArray[i].addEventListener("click", function(){
            var key_name = this.innerHTML;
            play_sound(key_name);
            buttonAnimation(key_name);
        });
}

document.addEventListener("keydown", function(event){
            var keyboard_name = event.key;
            play_sound(keyboard_name);
            buttonAnimation(keyboard_name);
            });


document.addEventListener("mouseup" , function(){
    for(var i = 0 ; i < buttonsArray.length ; i++){
        i.classList.remove("pressed")
    }
});

function play_sound(key_name){
            switch (key_name) {
                case "w":
                    var audio = new Audio("./sounds/crash.mp3");
                    break;
                case "a":
                    var audio = new Audio("./sounds/kick-bass.mp3");
                    break;
                case "s":
                    var audio = new Audio("./sounds/snare.mp3");
                    break;
                    
                case "d":
                    var audio = new Audio("./sounds/tom-1.mp3");
                    break;
                case "j":
                    var audio = new Audio("./sounds/tom-2.mp3");
                    break;
                case "k":
                    var audio = new Audio("./sounds/tom-3.mp3");
                    break;
                case "l":
                    var audio = new Audio("./sounds/tom-4.mp3");
                    break;

                default:
                    alert("wrong button")
                    break;
            }
            audio.play();
        
    }

    function buttonAnimation(pressed_key){
        var button_class = "." + pressed_key;
        document.querySelector(button_class).classList.add("pressed")
        setTimeout(function(){
            document.querySelector(button_class).classList.remove("pressed");
        }, 100);
    }