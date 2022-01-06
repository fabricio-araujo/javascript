//via selectors inside the element

const allQuestions = document.querySelectorAll('.question')

allQuestions.forEach(function(singleQuestion) {
    //console.log(singleQuestion);
    const button = singleQuestion.querySelector('.question-btn');
    //console.log(btn);
    button.addEventListener('click', function() {

        allQuestions.forEach(function(item) {
            if(item !== singleQuestion) {
                item.classList.remove('show-text');
            }
        });

        singleQuestion.classList.toggle('show-text');
    });
});


//via traversing the DOM

// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach(function(button) {
//     button.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     });
// });
