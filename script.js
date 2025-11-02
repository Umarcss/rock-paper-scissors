let rulesButton = document.getElementById('rulesButton'),
    rulesBlock = document.getElementById('rulesBlock'),
    closeButton = document.getElementById('closeButton'),
    playButton = document.querySelectorAll('.playButton'),
    mainMenu = document.getElementById('mainMenu'),
    waitBlock = document.getElementById('waitBlock'),
    userPick = document.getElementById('userPick'),
    timer = document.getElementById('timer'),
    computerPickBlock = document.getElementById('computerPickBlock'),
    timerBlock = document.getElementById('timerBlock'),
    loseBlock = document.getElementById('loseBlock'),
    drawBlock = document.getElementById('drawBlock'),
    winBlock = document.getElementById('winBlock'),
    score = document.getElementById('score'),
    againButton = document.querySelectorAll('.againButton')

rulesButton.addEventListener('click', function(){
    rulesBlock.style.display = 'flex';
});

closeButton.addEventListener('click', function(){
    rulesBlock.style.display = 'none';
});

playButton.forEach(btn => {
    btn.addEventListener('click', function(){
        let userChoise = btn.getAttribute('data');
        let buttonId = btn.getAttribute('id');
        mainMenu.style.display = 'none';
        waitBlock.style.display = 'flex';
        userPick.innerHTML = `<button class="playButtonWait" id="${buttonId}" data="${userChoise}">
                                <img src="images/icon-${buttonId}.svg" alt="scissors">
                            </button>`;
        countDown = setInterval(() => {
            let timerLeft = timer.textContent;
            timerLeft--
            
            if(timerLeft > 0) {
                timer.style.transform = 'scale(1.5)';

                setTimeout(() => {
                    timer.innerHTML = `${timerLeft}`;
                    timer.style.transform = 'scale(1.0)';
                }, 500);
            } else {
                clearInterval(countDown);
                timer.textContent = 3;
                let computerChoice = Math.floor(Math.random() * 3);
                console.log(computerChoice)
                for(let i = 0; i < playButton.length; i++) {
                    if(i == computerChoice) {
                       computerPickBlock.innerHTML = `<button class="playButtonWait" id="${playButton[i].id}" data="${computerChoice}">
                                                            <img src="images/icon-${playButton[i].id}.svg" alt="scissors">
                                                        </button>`; 
                        if(computerChoice == 0 && userChoise == 1 || computerChoice == 1 && userChoise == 2 || computerChoice == 2 && userChoise == 0) {
                            timerBlock.style.display = 'none';
                            winBlock.style.display = 'flex';
                            score.textContent = +score.textContent + 1;
                        } else if(userChoise == 0 && computerChoice == 1 || userChoise == 1 && computerChoice == 2 || userChoise == 2 && computerChoice == 0) {
                            timerBlock.style.display = 'none';
                            loseBlock.style.display = 'flex';
                            score.textContent = +score.textContent - 1;
                        } else {
                            timerBlock.style.display = 'none';
                            drawBlock.style.display = 'flex';
                        }
                    }
                }
            }
        }, 1000);
    })
})

againButton.forEach(btn => {
    btn.addEventListener('click', function(){
        mainMenu.style.display = 'flex';
        waitBlock.style.display = 'none'
        winBlock.style.display = 'none';
        loseBlock.style.display = 'none';
        drawBlock.style.display = 'none';
        timerBlock.style.display = 'flex';
        computerPickBlock.innerHTML = ``;
        clearInterval(countDown);
    })
})