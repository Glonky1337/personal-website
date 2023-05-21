const messageInput = document.getElementById('message');
const counter = document.getElementById('character-counter');

messageInput.addEventListener('input', updateCounter);

function updateCounter() {
  const messageLength = messageInput.value.length;
  counter.textContent = messageLength + '/200';
}

updateCounter(); // Call initially to display counter on load