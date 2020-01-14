console.log('aa');

const btn = document.querySelector('.js-home');
console.log(btn);

btn.addEventListener('click', () => {
  window.location.replace('./index.html');
});
