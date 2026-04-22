// Cursor follow
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("heartCursor");
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Click effect
document.addEventListener("click", () => {
    const cursor = document.getElementById("heartCursor");
    cursor.style.transform = "translate(-50%, -50%) scale(1.3)";
    setTimeout(() => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    }, 120);
});

// Floating hearts
const container = document.getElementById("floatingHearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const size = Math.random() * 15 + 15;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.left = Math.random() * window.innerWidth + "px";

    const duration = Math.random() * 10 + 5;
    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 250);

// Start experience (replaces prompt)
function startExperience() {
    const name = document.getElementById("nameInput").value;

    if (!name.trim()) return;

    document.getElementById("mainHeading").innerHTML = `To My Dearest ${name} 💌`;
    document.getElementById("loverName").innerText = name;

    document.getElementById("nameOverlay").style.display = "none";

    // memory counter
    const startDate = new Date('2026-04-01');
    const today = new Date();
    const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    animateCounter("memoryDays", days);

    setTimeout(() => {
        document.getElementById("secretMessage").classList.add("show");
    }, 2000);
}

// Counter
function animateCounter(id, target) {
    let current = 0;
    const element = document.getElementById(id);

    const interval = setInterval(() => {
        current++;
        element.innerText = current;

        if (current >= target) clearInterval(interval);
    }, 20);
}

// Photo click
document.querySelectorAll('.photo-placeholder').forEach(photo => {
    photo.addEventListener('click', function () {
        this.innerHTML = `<i class="fas fa-heart" style="color:#ff2d75"></i>`;
    });
});
