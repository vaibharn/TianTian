const learn = document.getElementById('learn-new-words')
learn.style.backgroundImage = "url('../content/new-words-card-bg.svg')";
learn.addEventListener('click',()=>{
    window.location.href = `/TianTian/learn-new-words/` ;
 })

const revise = document.getElementById('revise-learnt-words')
revise.style.backgroundImage = "url('../content/revise-words-card-bg.svg')";

const incorrect = document.getElementById('incorrectly-answered-words')
incorrect.style.backgroundImage = "url('../content/incorrect-words-bg.svg')";