let jokeElement = document.querySelector("#joke");
let button = document.querySelector("#btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single";

const getjoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeElement.innerText = item.joke;
      jokeElement.classList.add("fade");
    });
};

button.addEventListener("click", getjoke);
getjoke();
