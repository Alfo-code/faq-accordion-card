const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

for (let answer of answers) {
    answer.style.display = "none";
}

questions.forEach(question => {
    question.addEventListener('click', showAnswers)
});

function showAnswers() {
    hideAnswers()
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.display === 'block') {
        panel.style.display = 'none'
    } else {
        panel.style.display = 'block'
    }
    
}

function hideAnswers() {
    answers.forEach(answer => {
        answer.style.display = "none";
        answer.previousElementSibling.classList.remove("active");
    });
}
  
