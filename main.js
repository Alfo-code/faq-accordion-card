const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach(question => {
    question.addEventListener('click', showAnswers)
});

function showAnswers() {
    hideAnswers()
    this.classList.toggle("active")
    let panel = this.nextElementSibling;
    if(this.classList.contains("active")) {
        panel.style.display = "block"
    } else {
        this.classList.remove("active")
        panel.style.display = "none"
    }   
}

function hideAnswers() {
    answers.forEach((answer) => {
        answer.style.display = "none";
        answer.previousElementSibling.classList.remove("active");
    });
}