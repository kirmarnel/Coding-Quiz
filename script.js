var questions = [
    {
        text: 'What is a true or false statement called in Javascript?',
        answers: [
            {
                text: 'A boolean',
                correct: true
            },
            {
                text: 'A string',
                correct: false
            },
            {
                text: 'An object',
                correct: false
            },
            {
                text: 'An array',
                correct: false
            }
        ]
    },
    {
        text: 'What does CSS stand for?',
        answers: [
            {
                text: 'Custom style sheet',
                correct: false
            },
            {
                text: 'Coding style sheet',
                correct: false
            },
            {
                text: 'Custom sheet styles',
                correct: false
            },
            {
                text: 'Cascading style sheet',
                correct: true
            }
        ]
    },
{
  text: 'Which tag represents the largest Heading?',
  answers: [
      {
          text: '<h6>',
          correct: false
      },
      {
          text: '<large-heading>',
          correct: false
      },
      {
          text: '<title>',
          correct: false
      },
      {
          text: '<h1>',
          correct: true
      }
  ]
},
{
  text: 'Which symbol represents "not" in Javascript?',
  answers: [
      {
          text: '!',
          correct: true
      },
      {
          text: '$',
          correct: false
      },
      {
          text: '&',
          correct: false
      },
      {
          text: '*',
          correct: false
      },
    ]
}
]

var counter = 15*questions.length;
var questionsIndex = 0;
var question = document.querySelector('#question');
var quiz = document.querySelector ('#quiz')

function startQuiz () {
    //start timer
    start.addEventListener('click', function (){
        
        var timer = document.getElementById('timer');
        var myInterval = setInterval (function (){
        counter--
        timer.textContent='Seconds Remaining ' + counter
        if (counter===0) {
            clearInterval(myInterval);
            showScore()
        }
        },1000);
        
        displayQuestion()
    })
}
function displayQuestion() {
  var question1 = document.querySelector('#question');
  var option1 = document.querySelector('#option1')
  var option2 = document.querySelector('#option2')
  var option3 = document.querySelector('#option3')
  var option4 = document.querySelector('#option4')
  question1.textContent=questions[questionsIndex].text;
  option1.textContent= questions[questionsIndex].answers[0].text;
  option2.textContent= questions[questionsIndex].answers[1].text;
  option3.textContent= questions[questionsIndex].answers[2].text;
  option4.textContent= questions[questionsIndex].answers[3].text;

  
  option1.addEventListener('click' , function (){
    var result = document.querySelector('#result')
    if (questions[questionsIndex].answers[0].correct) {
      result.textContent='Correct!'
    }
    else {
      result.textContent='Incorrect'
      counter-=5
    }
    if (questionsIndex<3) {
      questionsIndex++
      displayQuestion()
    }
    else {
      quiz.textContent= "Game Over"
      showScore()
    }
    
})

option2.addEventListener('click' , function (){
    var result = document.querySelector('#result')
    if (questions[questionsIndex].answers[1].correct) {
      result.textContent='Correct!'
    }
    else {
      result.textContent='Incorrect'
      counter-=5
    }
    if (questionsIndex<3) {
      questionsIndex++
      displayQuestion()
    }
    else {
      quiz.textContent= "Game Over"
      showScore()
    }
    
})
option3.addEventListener('click' , function (){
    var result = document.querySelector('#result')
    if (questions[questionsIndex].answers[2].correct) {
      result.textContent='Correct!'
    }
    else {
      result.textContent='Incorrect'
      counter-=5
    }
    if (questionsIndex<3) {
      questionsIndex++
      displayQuestion()
    }
    else {
      quiz.textContent= "Game Over"
      showScore()
    }
})
option4.addEventListener('click' , function (){
    var result = document.querySelector('#result')
    if (questions[questionsIndex].answers[3].correct) {
      result.textContent='Correct!'
    }
    else {
      result.textContent='Incorrect'
      counter-=5
    }
    if (questionsIndex<3) {
      questionsIndex++
      displayQuestion()
    }
    else {
      quiz.textContent= "Game Over"
      showScore()
    }
})

}
var finalScore; 

function showScore() {
  var showScore = document.querySelector('#showScore')
  var score=counter;
    localStorage.setItem('score' , score);
    var currentScore=localStorage.getItem('score');
    showScore.textContent='Your score is ' + currentScore;
    finalScore = currentScore
    
}
localStorage.setItem('finalScore' , finalScore)


showScore()
startQuiz()











