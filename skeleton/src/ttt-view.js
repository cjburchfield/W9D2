class View {
  constructor(game, el) {}

  setupBoard() {
    const grid = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement("li");
        cell.dataset.pos = `[${i}, ${j}]`; 
        grid.appendChild(cell) 
      }
    }

  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
