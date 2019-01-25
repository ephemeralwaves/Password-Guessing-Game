// grab refererences to html objects. buttons, paragraphs, etc
//var origPassInput = document.getElementById("passInput");
var passInput = document.getElementById("passInput"); 
var resultText = document.getElementById("resultText");
var promptText = document.getElementById("promptText");
var debugText = document.getElementById("debugText");
var achievementsText = document.getElementById("achievementsText");

// used to control setTimeout delays
var talkDelay1;
var talkDelay2;
var talkDelay3;
var talkDelay4;
var talkDelay5;

// what the program will taunt you with
var failResponses = ["<br/>hahahahahahaha! no", 
                     "<br/>nice try, but no", 
                     "<br/>not even close!", 
                     "<br/>nope",
                     "<br/>no",
                     "<br/>ha, incorrect!",
                     "<br/>noooooooope",
                     "<br/>You got it. Just kidding!",
                     "<br/>nope, this is taking forever!",
                     "<br/>negative!",
                     "<br/>yeah... no",
                     "<br/>nuh-uh",
                     "<br/>better luck next time",
                     "<br/>maybe ask for help?",
                     "<br/>nopedy-nope-a-dope",
                     "<br/>nah",
                     "<br/>you'll NEVER guess it",
                     "<br/>If only there was a faster way to do this . . . ",
                     "<br/>lol",
                     "<br/>you know I can do this in a fraction of second?",
                     "<br/>Nie, Polish for No",
                     "<br/>Nyet, Russian for No",
                     "<br/>No, Spanish for No",
                     "<br/> 不是 pronounced bù shì, Mandarin for No",
                     "<br/> -. ---, Morse Code for No",
                     "<br/> 0110111001101111 == No",
                     "<br/>are you even trying?"];

//acceptable characters/numbers (note: no uppercase)
var ALL_LETTERS = "abcdefghijklmnopqrstuvwxyz0123456789";

// variables
var currentPassLength = 0;
var currentPass = "";
var numberOfTries = 0;

debugText.style.color = "white";

setupNextChallenge();

function tryPass()
{
    clearTimeout(talkDelay1);
    clearTimeout(talkDelay2);
    clearTimeout(talkDelay3);
    //clearTimeout(talkDelay4);
    //clearTimeout(talkDelay5);
    
    numberOfTries++;
    
    if (passInput.value.toLowerCase() == currentPass)
    {
    	resultText.innerHTML = "<br/>Impressive! It only took you " + numberOfTries + " tries!";
        achievementsText.innerHTML += "You guessed my " + currentPassLength + "-letter password in " + numberOfTries + " tries. It was: " + currentPass + "<br/>";
        setupNextChallenge();
    }
    else if (passInput.value == "showmethemoney")
    {
        debugText.innerHTML = currentPass;
    }
    else
    {
        resultText.innerHTML = failResponses[Math.floor(Math.random() * failResponses.length)];
        
        talkDelay1 = setTimeout(function() {
            resultText.innerHTML = "<br/>Try again,";
            talkDelay2 = setTimeout(function() {
                resultText.innerHTML = "<br/>Try again,<br/>human.";
                    talkDelay3 = setTimeout(function() {
                    resultText.innerHTML = "";
                }, 1000);
            }, 1000);
        }, 2000);
    }
}

function setupNextChallenge()
{
    currentPassLength ++;
    numberOfTries = 0;
    promptText.innerHTML = "Guess my " + currentPassLength + "-letter password.<br/><br/>I dare you,<br/>human.<br/><br/>";
    
    currentPass = "";
    debugText.innerHTML = "";
    
    for (i = 0; i < currentPassLength; i++)
    {
        currentPass += ALL_LETTERS.charAt(Math.floor(Math.random() * ALL_LETTERS.length));
    }
}
