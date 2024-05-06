const numbers = [1, 2, 3, '', 4];
const puzzleContainer = document.getElementById('puzzle');

function createTile(number) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.textContent = number || '';
  tile.addEventListener('click', () => {
    moveTile(tile);
    checkWin();
  });
  return tile;
}

function moveTile(tile) {
  const emptyTile = document.querySelector('.tile:empty');
  if (isAdjacent(tile, emptyTile)) {
    emptyTile.textContent = tile.textContent;
    tile.textContent = '';
  }
}

function isAdjacent(tile1, tile2) {
  const index1 = Array.from(tile1.parentNode.children).indexOf(tile1);
  const index2 = Array.from(tile2.parentNode.children).indexOf(tile2);
  return Math.abs(index1 - index2) === 1 || Math.abs(index1 - index2) === 3;
}

function shuffle() {
  numbers.sort(() => Math.random() - 0.5);
  render();
}

function render() {
  puzzleContainer.innerHTML = '';
  numbers.forEach(number => {
    const tile = createTile(number);
    puzzleContainer.appendChild(tile);
  });
}

function checkWin() {
  const tiles = document.querySelectorAll('.tile');
  const values = Array.from(tiles).map(tile => tile.textContent);
  if (values.join('') === '1234') {
    alert('Congratulations! You solved the puzzle!');
  }
}


render();