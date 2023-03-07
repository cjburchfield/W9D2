class View {
  constructor(game, container) {
    this.game = game;
    this.container = container;
    this.setupBoard(container);
  }

  setupBoard() {
    const grid = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement("li");
        cell.dataset.pos = JSON.stringify([i, j]); 
        grid.append(cell);
      }
    }

    this.el.append(grid);
  }
  
  bindEvents() {}

  handleClick(container) {
    let cell = container.target;
    "li" === cell.nodeName && this.makeMove(cell)
  }

  makeMove(square) {}

}

module.exports = View;
