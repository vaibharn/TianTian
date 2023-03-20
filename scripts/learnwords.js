const front = document.getElementById('flip-card-front')
const back = document.getElementById('flip-card-back')
const btn = document.getElementById('learnword-box')

function handleFlip() {
  front.classList.toggle('is-flipped')
  back.classList.toggle('is-flipped')
}

btn.addEventListener('click', handleFlip)