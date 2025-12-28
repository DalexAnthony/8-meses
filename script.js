// Simplified Word Search Script – 15x15 grid
const words = ["FELICES", "OCHO", "MESES", "AMOR", "TEAGAPO"];
const gridSize = 15;
let grid = [];
let foundWords = new Set();
let isSelecting = false;
let selectionStart = null;
let selectedCells = [];

const gridElement = document.getElementById('word-search-grid');
const gameArea = document.getElementById('game-area');
const letterContainer = document.getElementById('letter-container');

// Stop event propagation and prevent default behavior to isolate interaction and stop page movement
['mousemove', 'mousedown', 'mouseup', 'touchstart', 'touchmove', 'touchend'].forEach(eventType => {
    gridElement.addEventListener(eventType, (e) => {
        e.preventDefault(); // Prevent scrolling/panning
        e.stopPropagation(); // Prevent background movement
    }, { passive: false });
});

function initGame() {
    grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
    foundWords.clear();

    // Place words with varied orientations spread out
    placeWordsVaried();

    // Fill empty spaces
    fillEmptySpaces();
    // Render grid
    renderGrid();
}

function placeWordsVaried() {
    const placements = [
        { word: "FELICES", row: 1, col: 4, dir: [0, 1] },
        { word: "OCHO", row: 3, col: 12, dir: [1, 0] },
        { word: "MESES", row: 6, col: 5, dir: [1, 1] },
        { word: "AMOR", row: 9, col: 2, dir: [1, 0] },
        { word: "TEAGAPO", row: 13, col: 4, dir: [0, 1] }
    ];

    placements.forEach(item => {
        const { word, row, col, dir } = item;
        for (let i = 0; i < word.length; i++) {
            grid[row + i * dir[0]][col + i * dir[1]] = word[i];
        }
    });
}

function fillEmptySpaces() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (grid[i][j] === '') {
                grid[i][j] = letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }
}

function renderGrid() {
    gridElement.innerHTML = '';
    gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = grid[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('mousedown', startSelection);
            cell.addEventListener('mouseover', updateSelection);
            cell.addEventListener('mouseup', endSelection);
            cell.addEventListener('touchstart', handleTouchStart, { passive: false });
            cell.addEventListener('touchmove', handleTouchMove, { passive: false });
            cell.addEventListener('touchend', endSelection);
            gridElement.appendChild(cell);
        }
    }
}

function startSelection(e) {
    isSelecting = true;
    const target = e.target.closest('.cell');
    if (!target) return;
    selectionStart = {
        row: parseInt(target.dataset.row),
        col: parseInt(target.dataset.col)
    };
    updateSelection(e);
}

function updateSelection(e) {
    if (!isSelecting) return;
    const target = e.target.closest('.cell');
    if (!target) return;
    const current = {
        row: parseInt(target.dataset.row),
        col: parseInt(target.dataset.col)
    };
    selectCells(selectionStart, current);
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    if (el && el.classList.contains('cell')) {
        startSelection({ target: el });
    }
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    if (el && el.classList.contains('cell')) {
        updateSelection({ target: el });
    }
}

function selectCells(start, end) {
    document.querySelectorAll('.cell.selected').forEach(c => c.classList.remove('selected'));
    selectedCells = [];
    const dRow = end.row - start.row;
    const dCol = end.col - start.col;
    if (dRow === 0 || dCol === 0 || Math.abs(dRow) === Math.abs(dCol)) {
        const steps = Math.max(Math.abs(dRow), Math.abs(dCol));
        const rStep = dRow === 0 ? 0 : dRow / steps;
        const cStep = dCol === 0 ? 0 : dCol / steps;
        for (let i = 0; i <= steps; i++) {
            const r = start.row + Math.round(i * rStep);
            const c = start.col + Math.round(i * cStep);
            const cell = document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
            if (cell) {
                cell.classList.add('selected');
                selectedCells.push(cell);
            }
        }
    }
}

function endSelection() {
    if (!isSelecting) return;
    isSelecting = false;
    const selectedWord = selectedCells.map(c => c.textContent).join('');
    const reversed = selectedWord.split('').reverse().join('');
    if (words.includes(selectedWord) && !foundWords.has(selectedWord)) {
        markWordFound(selectedWord);
    } else if (words.includes(reversed) && !foundWords.has(reversed)) {
        markWordFound(reversed);
    }
    document.querySelectorAll('.cell.selected').forEach(c => c.classList.remove('selected'));
}

function markWordFound(word) {
    foundWords.add(word);
    selectedCells.forEach(c => c.classList.add('found'));
    console.log('Found word:', word);
    checkWin();
}

function checkWin() {
    console.log(`Words found: ${foundWords.size}/${words.length}`);
    if (foundWords.size === words.length) {
        console.log('WIN CONDITION MET! Transitioning to letter...');

        setTimeout(() => {
            gameArea.classList.add('hidden');
            letterContainer.classList.remove('hidden');
            setTimeout(() => {
                letterContainer.classList.add('show');
                const app = document.getElementById('app');
                if (app) app.style.pointerEvents = 'auto';
                startTypewriter();
            }, 50);
        }, 1000);

        if (typeof confetti === 'function') {
            try {
                const heartPath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
                const heartShape = confetti.shapeFromPath({ path: heartPath });
                const duration = 15000; // Longer for the typewriter effect
                const end = Date.now() + duration;

                (function frame() {
                    confetti({
                        particleCount: 2,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0, y: 0.6 },
                        colors: ['#800020', '#800080'],
                        shapes: [heartShape],
                        scalar: 2,
                        zIndex: 10001
                    });
                    confetti({
                        particleCount: 2,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1, y: 0.6 },
                        colors: ['#800020', '#800080'],
                        shapes: [heartShape],
                        scalar: 2,
                        zIndex: 10001
                    });
                    if (Date.now() < end) requestAnimationFrame(frame);
                }());
            } catch (err) { console.error('Confetti error:', err); }
        }
    }
}

const finalMessage = [
    "Felices 8 meses, amor.",
    "Gracias por compartir conmigo estos ocho meses. Te amo profundamente y has sido mi mayor felicidad este año. Eres uno de los regalos más bonitos que he tenido en este año, y mi mayor esperanza es seguir a tu lado, cumpliendo juntos cada sueño y cada meta.",
    "Aunque la distancia sea nuestra realidad por ahora, no cambio ni un segundo de ese viaje a San Pedro para conocerte. Lo repetiría una y mil veces, y volveré a hacerlo para verte en Canadá. Se que pronto estaremos juntos, sin depender solo de una pantalla y una llamada.",
    "Gracias por todo el amor que me has dado y, por aceptarme incluso cuando soy agobiante. Te agapo con todo lo que soy. Eres, sin duda, lo más hermoso que tengo en mi vida.",
    "Con mucho amor,",
    "Anthony Marinero"
];

async function startTypewriter() {
    const container = document.getElementById('typewriter-text');

    for (let i = 0; i < finalMessage.length; i++) {
        const paragraph = finalMessage[i];
        const p = document.createElement('p');
        p.style.marginBottom = '15px';

        // Special styling for the signature lines
        if (i === finalMessage.length - 2) {
            p.style.marginTop = '30px';
            p.style.textAlign = 'right';
        }
        if (i === finalMessage.length - 1) {
            p.style.textAlign = 'right';
        }

        container.appendChild(p);

        for (const char of paragraph) {
            p.textContent += char;
            await new Promise(resolve => setTimeout(resolve, 20)); // Faster typing speed
        }
    }
}

initGame();
