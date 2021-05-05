// console.log(`linked`);

if (screen.width < 1080) {
  document
    .getElementById('illustration-woman-online-desktop')
    .classList.add('hidden');
  document
    .getElementById('illustration-woman-online-mobile')
    .classList.remove('hidden');
  document.getElementById('bg-pattern-desktop').classList.add('hidden');
  document.getElementById('bg-pattern-mobile').classList.remove('hidden');
  document.getElementById('illustration-box-desktop').classList.add('hidden');
} else {
  document
    .getElementById('illustration-box-desktop')
    .classList.remove('hidden');
  document
    .getElementById('illustration-woman-online-desktop')
    .classList.remove('hidden');
  document
    .getElementById('illustration-woman-online-mobile')
    .classList.add('hidden');
  document.getElementById('bg-pattern-desktop').classList.remove('hidden');
  document.getElementById('bg-pattern-mobile').classList.add('hidden');
}

/////////for responsive check only/////////
//////////////////////////////////////////
window.addEventListener('resize', () => {
  if (screen.width < 1080) {
    document.getElementById('illustration-box-desktop').classList.add('hidden');
    // console.log(screen.width);
    document
      .getElementById('illustration-woman-online-desktop')
      .classList.add('hidden');
    document
      .getElementById('illustration-woman-online-mobile')
      .classList.remove('hidden');
    document.getElementById('bg-pattern-desktop').classList.add('hidden');
    document.getElementById('bg-pattern-mobile').classList.remove('hidden');
  } else {
    document
      .getElementById('illustration-box-desktop')
      .classList.remove('hidden');
    // console.log(screen.width);
    document
      .getElementById('illustration-woman-online-desktop')
      .classList.remove('hidden');
    document
      .getElementById('illustration-woman-online-mobile')
      .classList.add('hidden');
    document.getElementById('bg-pattern-desktop').classList.remove('hidden');
    document.getElementById('bg-pattern-mobile').classList.add('hidden');
  }
});
//////////////////////////////////////////
//////////////////////////////////////////

const questions = document.querySelectorAll('.question');

for (const q of questions) {
  q.addEventListener('click', () => {
    if (q.parentNode.classList.contains('opened')) {
      q.parentNode.classList.remove('opened');
    } else {
      for (let i = 0; i < questions.length; i++) {
        //   questions[i].parentNode.style.maxHeight = 3 + 'em';
        questions[i].parentNode.classList.remove('opened');
      }
      q.parentNode.classList.add('opened');
    }
  });
}
