const hiddenEl = document.querySelectorAll('.hidden')
const shadowEl = document.querySelector('.logos')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target === shadowEl) {
                entry.target.classList.add('show', 'shadow')
            } else { entry.target.classList.add('show') }
        } else { entry.target.classList.remove('show', 'shadow') }
    })
})
hiddenEl.forEach((el) => observer.observe(el))


// Say Hello
const sayHelloEl = document.getElementById('say-hello')
function sayHello() {
    let welcome;
    let date = new Date();
    let helloHour = date.getHours();
    if (helloHour < 12) {
        welcome = "Good Morning";
    } else if (helloHour < 16) {
        welcome = "Good Afternoon";
    } else {
        welcome = "Good Evening";
    }
    return welcome
}
sayHelloEl.textContent = sayHello()