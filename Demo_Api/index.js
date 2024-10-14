const text = document.getElementById("Joke");
const button1 = document.getElementById("btn1");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.joke);
        text.textContent = `${data.joke}`
    })
}
button1.addEventListener("click",getjoke);

const rotate_image = document.querySelector('.Emoji');
const button2 = document.querySelector('#btn2');
const balls = document.querySelector('.ball');

button2.addEventListener('click', () => {
  rotate_image.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(15deg)' },
        { transform: 'rotate(45deg)' },
        { transform: 'rotate(90deg)' },
        { transform: 'rotate(180deg)' },
        { transform: 'rotate(360deg)' }
  ],{
    duration: 1400,
    iterations : 2
  });

  
   
});

