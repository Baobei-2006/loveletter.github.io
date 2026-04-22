//ehanced cursor effect
document.addEventListener("mousemove", function (e){
    const heartCursor = document.getElementById("heartCursor");
    heartCursor.style.left = e.pageX + "px";
    heartCursor.style.top = e.pageY + "px";

    // add temporary scale effect on click
    heartCursor.style.transform = "translate(-50%, -50%) scale(1.3)";
    setTimeout(() => {
        heartCursor.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);
});

//floating hearts effect
const container = document.getElementById("floatingHearts");
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    // randomize size, position, animation duration, and delay
    const sixe = Math.random() * 15+15;
    heart.style.width = sixe + "px";
    heart.style.height = sixe + "px";

    //random position across the screen
    heart.style.left = Math.random() * window.innerWidth + "px";

    //random animation duration between 5 and 15 seconds
    const durationn = Math.random() * 10+5;
    heart.style.animationDuration = durationn + "s";

    heart.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), durationn * 1000);
}

setInterval(createHeart, 200);

window.onload = function() {

    let lover = prompt("Enter your name, my love:");
    if (lover && lover.trim() !== "") {
        document.getElementById("mainHeading").innerHTML = `To My Dearest ${lover} 💌`;
        document.getElementById("loverName").innerHTML = lover;

        setTimeout(() => {
           alert(`I hope you like this little surprise, ${lover}! I made it with all my heart. ❤️`);
            showConfetti();
        }, 500);

        setTimeout(() => {
            document.getElementById("secrectMessage").classList.add("show");
        }, 1000);

        // CHANGE THIS DATE to your actual start date
        const startDate = new Date('2026-04-01');
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const daysTogether = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        animateCounter("memoryDays", daysTogether);
    } else {
        alert("Please refresh the page and enter your name to see the surprise!");   
    }
}

function animateCounter(id, target) {
    const element = document.getElementById(id);
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(counter); // Changed from 'timer' to 'counter'
            current = target;
        }
        element.innerHTML = Math.floor(current);
    }, stepTime);
}

function showConfetti() {
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
}

document.querySelectorAll(' .photo-placeholder').forEach(photo => {
    photo.addEventListener('click', function() {
        this.innerHTML = `<i class= "fas fa-heart" style="color: var(--primary-color); animation: pulse 0.5s ease-out"></i>`;
        setTimeout(() => {
            this.innerHTML = `<i classs= "fas fa-heart"></i>`
        }, 500);
    });
});
