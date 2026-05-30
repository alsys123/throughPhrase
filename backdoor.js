// *** backdoor ***

let secretClickCount = 0;
const maxSecretDoor = 5;

document.getElementById("solved-stat").addEventListener("click", () => {
    secretClickCount++;

    // cLog("backdoor:",secretClickCount);

    // Reset if too slow
    //    if (secretTimer) clearTimeout(secretTimer);
    //   secretTimer = setTimeout(() => secretClickCount = 0, 1200);
    dei("tap-debug").textContent = secretClickCount > 0 ? `(${secretClickCount})` : "";
    
    if (secretClickCount >= maxSecretDoor) {
        secretClickCount = 0;
	dei("tap-debug").textContent = "";
        openSecretModal();
    }
});

//dei("tap-debug").textContent = secretClickCount; //debug only

document.getElementById("secret-close").addEventListener("click", () => {
    document.getElementById("secret-modal").style.display = "none";
});

function openSecretModal() {
    const modal = document.getElementById("secret-modal");
    const list = document.getElementById("secret-phrase-list");

    list.innerHTML = "";

    // Extract all phrases
    const phrases = games.map((g, i) => ({
        index: i + 1,
        phrase: g.phrase
    }));

    // Sort alphabetically
    phrases.sort((a, b) => a.phrase.localeCompare(b.phrase));

    // Render sorted list
    phrases.forEach(item => {
	const li = document.createElement("li");

	const fixedIndex = (item.index + ".").padStart(5, " ");

	li.innerHTML = `<span class="phrase-index">${fixedIndex}</span> ${item.phrase}`;
	li.dataset.gameIndex = item.index - 1;   // store original index
	li.classList.add("clickable-phrase");

	list.appendChild(li);
	/*	
		const li = document.createElement("li");


		//	li.textContent = `${fixedIndex} ${item.phrase}`;
		const fixedIndex = (item.index + ".").padStart(5, " ");
		li.innerHTML = `<span class="phrase-index">${fixedIndex}</span> ${item.phrase}`;

		//        li.textContent = `${item.index}. ${item.phrase}`;
		list.appendChild(li);
	*/
    });

    modal.style.display = "block";
}

/*
  function openSecretModal() {
  cLog("open");
  
  const modal = document.getElementById("secret-modal");
  const list = document.getElementById("secret-phrase-list");

  list.innerHTML = "";

  games.forEach((g, i) => {
  const li = document.createElement("li");
  li.textContent = `${i + 1}. ${g.phrase}`;
  list.appendChild(li);
  });

  modal.style.display = "block";
  }
*/
document.getElementById("secret-phrase-list").addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const gameIndex = parseInt(li.dataset.gameIndex, 10);

    // Load selected game
    currentGame = games[gameIndex];

    // Reset state
    totalAttempts = 0;
    solvedCount = 0;
    throughLineStates = currentGame.throughLines.map(() => ({
        solved: false,
        attempts: 0
    }));

    // Re-render UI
    renderThroughLines();
    updateStats();

    // Close modal
    document.getElementById("secret-modal").style.display = "none";
});

// *** End of Backdoor
