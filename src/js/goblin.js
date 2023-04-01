export default class Goblin {
  constructor() {
    this.noCaught = 0;
    this.caught = 0;
  }
  changePosition() {
    const position = [...document.querySelectorAll(".block")];
    let posGoblin = 0;
    let interval = setInterval(() => {
      const ran = Math.floor(Math.random() * position.length);
      if (ran !== posGoblin) {
        position[posGoblin].classList.remove("goblin");
        position[ran].classList.add("goblin");
        this.noCaught += 1;
        posGoblin = ran;
      }
      if (this.noCaught === 5) {
        position[ran].classList.remove("goblin");
        alert("Game over. Goblin win!");
        clearInterval(interval);
      }
    }, 1000);
  }
  goblinCatch(element) {
    element.addEventListener("click", (event) => {
      const e = event.target;
      if (e.className.includes("goblin")) {
        this.caught += 1;
        this.noCaught -= 1;
        console.log(this.caught);
      }
    });
  }
}
