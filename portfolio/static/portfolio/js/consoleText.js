var consoleText = ["Kyle Burkholder", "Kyle Coder", "Kyle Cat Owner", "Kyle Beep Boop"];

var console = document.getElementById('console-text');
var consoleCursor = document.getElementById('console-cursor');
var letterCount = 1;
var visible = false;
var consoleTextIndex = 0;
var previousIndexTextIndex = 0;

const getCursor = () => {
    if (visible) {
        return "<i>_</i>";
    }

    return "<i class='hidden'>_</i>";
}

 const blinkingCursor = () => {
    if (visible === true) {
      visible = false;
    } else {
      visible = true;
    }
 };

 const consoleTyping = () => {
    if (previousIndexTextIndex != consoleTextIndex &&
        consoleText[consoleTextIndex].substring(0, letterCount) != consoleText[previousIndexTextIndex].substring(0, letterCount)) {
        console.innerHTML = consoleText[previousIndexTextIndex].substring(0, letterCount) + getCursor();
        letterCount--;
    } else if (letterCount < consoleText[consoleTextIndex].length + 1) {
        previousIndexTextIndex = consoleTextIndex;
        console.innerHTML = consoleText[consoleTextIndex].substring(0, letterCount) + getCursor();
        letterCount++;
    } else {
        previousIndexTextIndex = consoleTextIndex;
        consoleTextIndex ++;
        letterCount --;

        if (consoleTextIndex > consoleText.length -1)
            consoleTextIndex = 0;
    }
 }

 window.setInterval(function() {
   blinkingCursor();
 }, 600);

 window.setInterval(function() {
    consoleTyping();
}, 200);
