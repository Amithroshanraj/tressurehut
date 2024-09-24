function checkTreasure() {
    // Random chance for finding the treasure
    const foundTreasure = Math.random() > 0.5;

    if (foundTreasure) {
        document.getElementById("result").innerText = "Congratulations! You found the treasure!";
    } else {
        document.getElementById("result").innerText = "No treasure here, try again!";
    }
}
