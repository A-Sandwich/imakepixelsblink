const consoleText = ["Kyle Burkholder", "Kyle Coder", "Kyle Cat Person", "Kyle Beep Boop", "Kyle"];
const cursorVisible = "<i>_</i>";
const cursorInvisible = "<i class='hidden'>_</i>";
const console = document.getElementById('console-text');
const consoleCursor = document.getElementById('console-cursor');
var letterCount = 1;
var visible = false;
var consoleTextIndex = 0;
var previousIndexTextIndex = 0;

const getCursor = () => {
    return visible ? cursorVisible : cursorInvisible;
}

const blinkingCursor = () => {
   visible = !visible;
};

const keepBackSpacing = () => {
    if(letterCount == 0)
        return false;
    // we're checking if the next string in the array starts with the current string
    return consoleText[consoleTextIndex].substring(0, letterCount) !=
        consoleText[previousIndexTextIndex].substring(0, letterCount)
}

const consoleTyping = () => {
    if (previousIndexTextIndex != consoleTextIndex && keepBackSpacing()) {
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
