const timer_bar = document.getElementById('progress-bar');
const option1 = document.getElementById('test-option1');
const option2 = document.getElementById('test-option2');
const option3 = document.getElementById('test-option3');
const option4 = document.getElementById('test-option4');
var choice = 0;
var correct_choice = 2;
var total_correct = 0;

option1.addEventListener("click", function() {
    choice = 1;
    process_choice();
});
option2.addEventListener("click", function() {
    choice = 2;
    process_choice();
});
option3.addEventListener("click", function() {
    choice = 3;
    process_choice();
});
option4.addEventListener("click", function() {
    choice = 4;
    process_choice();
});

timer_bar.addEventListener("animationend", () => {
    process_choice();
  });

function process_choice(){
    timer_bar.classList.add('paused')
    console.log(choice)
    document.getElementById("test-option" + correct_choice).style.background = "#74CB7D";
    if(choice == correct_choice){
        document.getElementById('test-panda').src = "/TianTian/content/panda5.svg";
        total_correct+=1;
    }
    else {
        if(choice > 0){
            document.getElementById("test-option" + choice).style.background = "#FF6363";
        }
        document.getElementById('test-panda').src = "/TianTian/content/panda3.svg"
    }
    setTimeout(function(){
        next_choice();
    }, 5000);
}

