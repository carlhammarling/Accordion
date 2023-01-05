
//Array med alla questions i.
const questionsArray = document.querySelectorAll('.question');
console.log(questionsArray);


//Loopar igenom array o lägger eventl. på varje enskild.
questionsArray.forEach(question => {
    question.addEventListener('click', klick => {
        //det som händer när man klickar.
        //Jag vill toggla classList på parentelement till det jag klickar på
        klick.target.parentElement.classList.toggle('hidden');
    })
})
















// const questions = document.querySelectorAll('.question')
// const body = document.querySelector('body')

// //För vqarje question, lägg till eventlist... 
// questions.forEach(q => {
//     q.addEventListener('click', e => {
//         q.parentElement.classList.toggle('hidden')
//     })
// })


// document.addEventListener('click', e => {

//     if(e.target === body) {
//         questions.forEach(q => {
        
//                 q.parentElement.classList.add('hidden')
//          })
//     }
// })
