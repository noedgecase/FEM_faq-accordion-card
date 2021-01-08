'use strict'

const questions = document.querySelectorAll('.question-line');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
      question.addEventListener('click', function(){
          answers.item(index).classList.toggle('hidden');
      })
  });