// function VideoGameFactory(name,genre,console) {
//     this.name = name
//     this.genre = genre
//     this.console = console

//     this.nameFunc = function () {
//         alert(`this is my game ${this.name}`);
//     }

//     this.genreFunc = function () {
//         alert(`this is my genre ${this.genre}`);
//     }

//     this.consoleFunc = function () {
//         alert(`this is my console ${this.console}`);
//     }
// }

// let fallout3 = new VideoGameFactory('fallout3','rpg','pc')

// const granTurismo = new VideoGameFactory('granturismo','racing','playstation');
// data.slip
fetch('https://api.adviceslip.com/advice')

    .then(res => res.json())
    .then(data => {console.log(data.slip.advice)
    document.querySelector('.quote').innerHTML = data.slip.advice
    document.querySelector('#advice').innerHTML += data.slip.id})
    .catch(err => console.log(err))
