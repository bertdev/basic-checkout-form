const form = document.querySelector('.checkout-form');
document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    form.submit();
  }
})

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('minus-button')) {
    const counter = target.nextElementSibling;
    if (Number(counter.innerHTML) > 0) {
      counter.innerHTML = Number(counter.innerHTML) - 1;
    }
  }
  if (target.classList.contains('plus-button')) {
    const counter = target.previousElementSibling; 
    counter.innerHTML = Number(counter.innerHTML) + 1;
  }
});

