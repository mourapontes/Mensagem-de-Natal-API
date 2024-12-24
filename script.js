document.getElementById("show-message-button").addEventListener("click", () => {
    const message = document.getElementById("natal-message");
    message.classList.remove("hidden");
});

document.getElementById("snow-button").addEventListener("click", createSnow);

const palavrasNatalinas = ["Amor", "Paz", "Esperança", "Felicidade", "Gratidão", "União", "Alegria", "Luz", "Natal", "Bênçãos"];

function createSnow() {
    const container = document.querySelector(".container");

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // Escolhe aleatoriamente entre um floco de neve ou uma palavra natalina
        const isWord = Math.random() > 0.5;
        if (isWord) {
            const word = palavrasNatalinas[Math.floor(Math.random() * palavrasNatalinas.length)];
            snowflake.textContent = word;
        } else {
            snowflake.textContent = "❄";
        }

        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

        container.appendChild(snowflake);

        // Remove o elemento após a animação
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }
}
