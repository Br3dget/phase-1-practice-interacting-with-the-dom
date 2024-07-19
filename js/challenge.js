let counter = 0;
let intervalId;
let isPaused = false;
const likes = {};


document.addEventListener('DOMContentLoaded', startTimer);


function startTimer() {
  intervalId = setInterval(() => {
    counter++;
    updateCounterDisplay();
  }, 1000);
}

function updateCounterDisplay() {
  document.getElementById('counter').textContent = counter;
}

document.getElementById('plus-button').addEventListener('click', () => {
  counter++;
  updateCounterDisplay();
});

document.getElementById('minus-button').addEventListener('click', () => {
  counter--;
  updateCounterDisplay();
});

document.getElementById('like-button').addEventListener('click', () => {
  if (!likes[counter]) {
    likes[counter] = 0;
  }
  likes[counter]++;
  updateLikesDisplay();
});


function updateLikesDisplay() {
  const likeCount = likes[counter] || 0;
  document.getElementById('likes-display').textContent = `Likes: ${likeCount}`;
}

document.getElementById('pause-button').addEventListener('click', () => {
  if (isPaused) {
    resumeCounter();
  } else {
    pauseCounter();
  }
});

function pauseCounter() {
  clearInterval(intervalId);
  document.getElementById('plus-button').disabled = true;
  document.getElementById('minus-button').disabled = true;
  document.getElementById('like-button').disabled = true;
  document.getElementById('pause-button').textContent = 'Resume';
  isPaused = true;
}


function resumeCounter() {
  startTimer();
  document.getElementById('plus-button').disabled = false;
  document.getElementById('minus-button').disabled = false;
  document.getElementById('like-button').disabled = false;
  document.getElementById('pause-button').textContent = 'Pause';
  isPaused = false;
}


document.getElementById('comment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const comment = document.getElementById('comment-input').value;
  addComment(comment);
  document.getElementById('comment-input').value = ''; 
});


function addComment(comment) {
  const commentList = document.getElementById('comment-list');
  const listItem = document.createElement('li');
  listItem.textContent = comment;
  commentList.appendChild(listItem);
}