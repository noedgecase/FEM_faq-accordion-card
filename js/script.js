const questions = document.querySelectorAll('.question-line');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
  question.addEventListener('click', function () {
    if (!answers.item(index).classList.contains('hidden')) {
      answers.item(index).classList.add('hidden');
    } else {
      for (let i = 0; i < answers.length; i++) {
        answers[i].classList.add('hidden');
      }
      answers.item(index).classList.remove('hidden');
    }
  });
});
