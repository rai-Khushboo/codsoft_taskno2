const textContainer = document.getElementById('textContainer');
const textContent = "Welcome to NatuRelief.com, your go-to haven for natural solutions! Discover the power of DIY healing with our extensive collection of time-tested home remedies, expert advice, and wellness tips. Transform your life, one remedy at a time – because health begins at home!";

function typeAndErase() {
  let index = 0;
  let isTyping = true;

  function updateText() {
    textContainer.textContent = textContent.slice(0, index);

    if (isTyping) {
      index++;
      if (index > textContent.length) {
        isTyping = false;
        clearInterval(typingInterval); 
      }
    }
  }

  let typingInterval = setInterval(updateText, 50);
}

typeAndErase();
