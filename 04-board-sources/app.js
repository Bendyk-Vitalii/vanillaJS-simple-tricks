const board = document.querySelector('#board');
const colors = ['#FA3E54', '#4C57D8', '#34D0B6', 'C4F83E', '#E165B9']
const SQUARES_NUMBER = 1000;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
        
    });
    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #1d1d1d';

}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};