const form = document.forms[0];
const restartBtn = document.querySelector('#reset');
const hideDivs = document.querySelector('.hidedivs');
let words = [
  "vorhees",
  "pamela",
  "crystal",
  "manhattan",
  "machete",
  "drowned"
];
let hints = [
  "Jason's last name",
  "Jason's mother's name",
  "Camp _______ Lake",
  "Jason takes over this NYC borough",
  "Jason's weapon of choice",
  "How Jason died originally"
];
let x = Math.floor(Math.random() * words.length);
let answer = words[x];
let hint = hints[x];
let state = toUnderscores(answer);

restartBtn.addEventListener("click", function() {
  window.location.reload(true);
});


function toUnderscores(str) {
  return str.split("").fill("_");
}


function guessLetter() {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let triesCounter = 0;
    let guess = form.guess.value;

    for (let i = 0; i < state.length; i++) {

      if (answer[i] === guess) {
        state[i] = answer[i];
        correct.textContent = state.join("");
      } else {
        triesCounter++;
        attempts.textContent = triesCounter;
        lastletter.textContent = guess;
      }
    }

    if (state.join("") === answer) {
      restartBtn.classList.remove('hidden');
      winlose.innerHTML = '<img src="images/hangman_win.gif" width="366px" height="400px">';
      document.querySelector('#submitbtn').disabled = true;
      hideDivs.classList.add('hidden');

    }


    if (state.join("") !== answer && triesCounter > 5) {
      winlose.textContext = "You lose!";
    }

    form.guess.value = '';
  });
}
correct.textContent = state.join("");

hintDiv.textContent = hints[x];


guessLetter();
