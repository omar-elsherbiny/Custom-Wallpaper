let circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    circle.style.top = `${Math.round(Math.random() * 110) - 20}%`;
    circle.style.left = `${Math.round(Math.random() * 110) - 20}%`;
    setInterval(function () {
        circle.style.top = `${Math.round(Math.random() * 80) - 20}%`;
        circle.style.left = `${Math.round(Math.random() * 110) - 20}%`;
    }, 10000)
    circle.style.animation = `hcirc-anim ${Math.round(Math.random() * 40) + 2}s ${Math.round(Math.random() * 20)}s linear infinite forwards, wcirc-anim ${Math.round(Math.random() * 40) + 2}s ${Math.random() * 20}s linear infinite forwards, rcirc-anim ${Math.round(Math.random() * 40) + 2}s ${Math.round(Math.random() * 20)}s linear infinite forwards`;
});