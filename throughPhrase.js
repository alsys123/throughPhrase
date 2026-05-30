const games = [
    ...games1,
    ...games2,
    ...games3,
    ...games4,
    ...games5,
    ...games6,
    ...games7
];

const MAX_ATTEMPTS = 5;

// Get game for today
function getTodaysGame() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const gameIndex = dayOfYear % games.length;
    return games[gameIndex];
}

// Game state
let currentGame = getTodaysGame();
let totalAttempts = 0;
let solvedCount = 0;
let throughLineStates = currentGame.throughLines.map(() => ({
    solved: false,
    attempts: 0
}));


// DOM elements
const throughLinesContainer = document.getElementById('through-lines-container');
const feedback = document.getElementById('feedback');
const phraseReveal = document.getElementById('phrase-reveal');
const phraseText = document.getElementById('phrase-text');
const attemptsStat = document.getElementById('attempts-stat');
const solvedStat = document.getElementById('solved-stat');
const currentDate = document.getElementById('current-date');

// Initialize game
function init() {
    // Set date
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDate.textContent = today.toLocaleDateString('en-US', options);

    // Render through lines
    renderThroughLines();

    // Update stats
    updateStats();
}



function renderThroughLines() {
    throughLinesContainer.innerHTML = '';
    
    currentGame.throughLines.forEach((throughLine, index) => {
        const container = document.createElement('div');
        container.className = 'through-line';
        container.id = `through-line-${index}`;
        
        container.innerHTML = `
                <div class="through-line-header">
                    <span class="through-line-title">Through Line ${index + 1}</span>
                    <span class="through-line-status"></span>
                </div>
                <div class="answer-display" id="answer-${index}"></div>
                <div class="words-grid" id="words-${index}"></div>
                <div class="input-section">
                    <div class="input-wrapper">
                        <input 
                            type="text" 
                            id="input-${index}" 
                            class="through-line-input"
                            placeholder="Type connecting word..."
                            autocomplete="off"
                            maxlength="20"
                            data-index="${index}"
                        >
                    </div>
                </div>
            `;
        
        throughLinesContainer.appendChild(container);
        
        // Render words for this through line
        renderWords(index, throughLine.words);
        
        // Add event listener for dynamic checking
        const input = document.getElementById(`input-${index}`);
        
        input.addEventListener('input', (e) => {
            handleInput(index, e.target.value);
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !throughLineStates[index].solved) {
                handleSubmit(index);
            }
        });
    });

    // Focus first unsolved input
    const firstUnsolvedIndex = throughLineStates.findIndex(state => !state.solved);
    if (firstUnsolvedIndex !== -1) {
        document.getElementById(`input-${firstUnsolvedIndex}`).focus();
    }
}

function renderWords(throughLineIndex, words) {
    const wordsGrid = document.getElementById(`words-${throughLineIndex}`);
    wordsGrid.innerHTML = '';
    
    words.forEach((word, wordIndex) => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.innerHTML = `
                <span class="word-number">${wordIndex + 1}</span>
                <span class="word-text">${word}</span>
                <span class="word-connection"></span>
            `;
        wordsGrid.appendChild(wordItem);
    });
}

function handleInput(index, value) {
    if (throughLineStates[index].solved) return;

    const guess = value.trim().toUpperCase();
    const correctAnswer = currentGame.throughLines[index].answer.toUpperCase();

    // Check if the answer is correct
    if (guess === correctAnswer) {
        handleCorrectAnswer(index);
    }
}


function handleSubmit(index) {
    if (throughLineStates[index].solved) return;

    const input = document.getElementById(`input-${index}`);

    // If max attempts reached → auto‑reveal
    /*
    if (totalAttempts >= MAX_ATTEMPTS) {
        showFeedback("No more attempts left today! Revealing the answer.", "error");
        forceRevealAnswer(index);
        return;
    }*/
if (totalAttempts >= MAX_ATTEMPTS) {
    showFeedback("No more attempts left today! Revealing all answers.", "error");
    throughLineStates.forEach((state, i) => {
        if (!state.solved) forceRevealAnswer(i);
    });
    return;
}

    const guess = input.value.trim().toUpperCase();
    
    if (!guess) {
        showFeedback('Please enter a word', 'error');
        return;
    }

    totalAttempts++;
    throughLineStates[index].attempts++;
    updateStats();

    const correctAnswer = currentGame.throughLines[index].answer.toUpperCase();

    if (guess === correctAnswer) {
        handleCorrectAnswer(index);
    } else {
        showFeedback('Not the right connection. Try again!', 'error');
        input.value = '';
        input.focus();
        
    const container = document.getElementById(`through-line-${index}`);
container.classList.add('wrong');
setTimeout(() => container.classList.remove('wrong'), 600);

}
}
/*
const MAX_ATTEMPTS = 10;

function handleSubmit(index) {
    if (throughLineStates[index].solved) return;

    // --- NEW LIMIT CHECK ---
    if (totalAttempts >= MAX_ATTEMPTS) {
        showFeedback("No more attempts left today!", "error");
        return;
    }
    // ------------------------

    const input = document.getElementById(`input-${index}`);
    const guess = input.value.trim().toUpperCase();
    
    if (!guess) {
        showFeedback('Please enter a word', 'error');
        return;
    }

    totalAttempts++;
    throughLineStates[index].attempts++;
    updateStats();

    const correctAnswer = currentGame.throughLines[index].answer.toUpperCase();

    if (guess === correctAnswer) {
        handleCorrectAnswer(index);
    } else {
        showFeedback('Not the right connection. Try again!', 'error');
        input.value = '';
        input.focus();
    }
    }
*/

/*
function handleSubmit(index) {
    if (throughLineStates[index].solved) return;

    const input = document.getElementById(`input-${index}`);
    const guess = input.value.trim().toUpperCase();
    
    if (!guess) {
        showFeedback('Please enter a word', 'error');
        return;
    }

    totalAttempts++;
    throughLineStates[index].attempts++;
    updateStats();

    const correctAnswer = currentGame.throughLines[index].answer.toUpperCase();

    if (guess === correctAnswer) {
        handleCorrectAnswer(index);
    } else {
        showFeedback('Not the right connection. Try again!', 'error');
        input.value = '';
        input.focus();
    }
}
*/

function handleCorrectAnswer(index) {
    throughLineStates[index].solved = true;
    solvedCount++;
    updateStats();

    const throughLine = currentGame.throughLines[index];
    const container = document.getElementById(`through-line-${index}`);
    const answerDisplay = document.getElementById(`answer-${index}`);
    const statusIcon = container.querySelector('.through-line-status');
    
    // Update container
    container.classList.add('solved');
    statusIcon.textContent = '✓';
    
    // Show answer
    answerDisplay.textContent = throughLine.answer.toUpperCase();
    answerDisplay.classList.add('show');
    
    // Hide input section
    const inputSection = container.querySelector('.input-section');
    inputSection.style.display = 'none';
    
    // Reveal connections with animation
    const wordItems = container.querySelectorAll('.word-item');
    wordItems.forEach((item, wordIndex) => {
        setTimeout(() => {
            item.classList.add('revealed');
            const connectionSpan = item.querySelector('.word-connection');
            connectionSpan.textContent = throughLine.connections[wordIndex];
        }, wordIndex * 100);
    });

    showFeedback('Correct! Through line solved!', 'success');

    // Check if all solved
    if (solvedCount === currentGame.throughLines.length) {
        setTimeout(() => {
            revealPhrase();
        }, 1000);
    } else {
        // Focus next unsolved
        setTimeout(() => {
            const nextIndex = throughLineStates.findIndex(state => !state.solved);
            if (nextIndex !== -1) {
                document.getElementById(`input-${nextIndex}`).focus();
            }
        }, 500);
    }
}

function revealPhrase() {
    phraseText.textContent = currentGame.phrase;
    phraseReveal.classList.add('show');
    
    // Scroll to phrase
    setTimeout(() => {
        phraseReveal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function updateStats() {
    attemptsStat.textContent = totalAttempts;
    solvedStat.textContent = `${solvedCount}/${currentGame.throughLines.length}`;
}

function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type} show`;
    
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 2500);
}

// Initialize on load
init();

function forceRevealAnswer(index) {
    const throughLine = currentGame.throughLines[index];
    const container = document.getElementById(`through-line-${index}`);
    const answerDisplay = document.getElementById(`answer-${index}`);

    throughLineStates[index].solved = true;

    // Mark visually
//    container.classList.add('solved');
    container.classList.add('revealed-wrong');
    container.querySelector('.through-line-status').textContent = '✗';

    // Show the answer
    answerDisplay.textContent = throughLine.answer.toUpperCase();
    answerDisplay.classList.add('show');

    // Hide input
    container.querySelector('.input-section').style.display = 'none';

    // Reveal connections
    const wordItems = container.querySelectorAll('.word-item');
    wordItems.forEach((item, wordIndex) => {
        setTimeout(() => {
            item.classList.add('revealed');
            item.querySelector('.word-connection').textContent =
                throughLine.connections[wordIndex];
        }, wordIndex * 100);
    });

    // Move to next unsolved or end
    setTimeout(() => {
        const nextIndex = throughLineStates.findIndex(s => !s.solved);
        if (nextIndex !== -1) {
            document.getElementById(`input-${nextIndex}`).focus();
        }
    }, 500);

    // Check if all through lines are now solved (including force-revealed)
const allDone = throughLineStates.every(s => s.solved);
if (allDone) {
    setTimeout(() => {
        revealPhrase();
    }, currentGame.throughLines.length * 100 + 500);
}

}
