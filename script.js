function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    let emoji;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        emoji = "😐"; // Neutral face emoji
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        emoji = "😊"; // Happy face emoji
    } else {
        result = "You lose!";
        emoji = "😢"; // Sad face emoji
    }

    document.getElementById('result').innerHTML = `
        <p>You chose <strong>${playerChoice}</strong>.</p>
        <p>Computer chose <strong>${computerChoice}</strong>.</p>
        <p>${result} ${emoji}</p>
    `;
}
