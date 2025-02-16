document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const result = document.getElementById('survey-result');
    if (rating >= 4) {
      result.textContent = 'Раді, що вам сподобався наш сайт!';
    } else if (rating == 3) {
      result.textContent = 'Спасибі за ваш відгук!';
    } else {
      result.textContent = 'Нам шкода, що вам не сподобався сайт. Ми працюємо над покращенням.';
    }
  });