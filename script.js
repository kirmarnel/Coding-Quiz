function startQuiz () {
    //start timer
    start.addEventListener('click', function (){
    
        var counter = 120
        var timer = document.getElementById('timer');
        var myInterval = setInterval (function (){
        counter--
        timer.textContent='Seconds Remaining ' + counter
        if (counter===0) {
            clearInterval(myInterval);
        }
        },1000);
        //Display first question
        
        function displayQuestion1() {
          var question1 = document.querySelector('#question');
          var option1 = document.querySelector('#option1')
          var option2 = document.querySelector('#option2')
          var option3 = document.querySelector('#option3')
          var option4 = document.querySelector('#option4')
          question1.textContent="What is a true or false statement called in Javascript?";
          option1.innerHTML= "<input type='radio'>A Boolean</input>"
          option2.innerHTML= "<input type='radio'>A String</input>"
          option3.innerHTML= "<input type='radio'>An Oblect</input>"
          option4.innerHTML= "<input type='radio'>An Array</input>"
        }
        displayQuestion1()
          

          
     
    })
    
    

}


function displayQuestion2() { 

}

startQuiz()


//when user answers, display right or wrong
//if wrong deduct time
//track right or wrong
//next question
//show results

