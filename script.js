document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    const afterYes = document.getElementById("after-yes");
    const playSong = document.getElementById("play-song");
    const bgMusic = document.getElementById("bg-music");
    const heartContainer = document.querySelector(".heart-container");

    // Make NO button move randomly
    noBtn.addEventListener("mouseover", function () {
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // YES button actions
    yesBtn.addEventListener("click", function () {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        afterYes.style.display = "block";
        createFlyingHearts();
    });

    // Play Song
    playSong.addEventListener("click", function () {
        bgMusic.play();
    });

    // Function to create floating hearts
    function createFlyingHearts() {
        for (let i = 0; i < 50; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heartContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }
});
