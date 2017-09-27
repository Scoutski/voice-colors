window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const page = document.querySelector('body');

function validTextColour(stringToTest) {
  if (stringToTest === "") { return false; }
  if (stringToTest === "inherit") { return false; }
  if (stringToTest === "transparent") { return false; }

  var image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = stringToTest;
  if (image.style.color !== "rgb(0, 0, 0)") { return true; }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = stringToTest;
  return image.style.color !== "rgb(255, 255, 255)";
}

recognition.addEventListener('result', e => {
  const result = e.results[0][0].transcript.split(' ').join('').toLowerCase();

  const isValid = validTextColour(result);
  if (isValid) {
    page.style.backgroundColor = result;
  } else {
    console.log(`I don't know what colour "${e.results[0][0].transcript}" is...`);
  }
});
recognition.addEventListener('end', e => recognition.start());

recognition.start();

