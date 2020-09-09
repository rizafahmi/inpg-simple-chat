let messages = [
  { nickname: 'riza', message: 'halo' },
  { nickname: 'budi', message: 'Lapar' }
];

const ul = document.querySelector('ul');
const form = document.querySelector('form');
const nickname = document.querySelector('input[name="nickname"]');
const message = document.querySelector('input[name="message"]');

function renderChat() {
  let list = '';
  for (let i = 0; i < messages.length; i += 1) {
    const li =
      '<li><strong>' +
      messages[i].nickname +
      '</strong>: ' +
      messages[i].message +
      '</li>';
    list = list + li;
  }

  ul.innerHTML = list;
}

renderChat();

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(nickname.value, message.value);
  messages.push({ nickname: nickname.value, message: message.value });
  renderChat();
  nickname.value = '';
  message.value = '';
});
