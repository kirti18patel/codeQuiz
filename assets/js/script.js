var questionBank= [
    {
        question : "Which built-in method combines the text of two strings and returns a new string?",
        options : ["1. append()", "2. concat()" , "3. attach()", "4. None of the above."],
        answer : "2. concat()"
    },
    {
        question : "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        options : ["1. sup()", "2. small()", "3. strike()", "4. sub()"],
        answer : "4. sub()"
    },
    {
        question : "Which of the following function of Array object reverses the order of the elements of an array?",
        options : ["1. reverse()","2. push()", "3. reduce()", "4. reduceRight()"],
        answer : "1. reverse()"
    },
    {
        question : "Which built-in method returns the length of the string?",
        options : ["1. length()", "2. size()", "3. index()", "4. None of the above."],
        answer : "1. length()"
    },
    {
        question : "How can you get the type of arguments passed to a function?",
        options : ["1. using typeof operator", "2. using getType function", "3. Both of the above", "4. None of the above."],
        answer : "1. using typeof operator"
    },
    {
        question : "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
        options : ["1. sup()", "2. small()", "3. strike()", "4. sub()"],
        answer : "3. strike()"
    }
];

var button = document.querySelector(".start-btn");
var pageHighScore = document.querySelector(".page-high-score");
var headingBox = document.querySelector(".heading-box");
var questionsBox = document.querySelector(".questionsBox");
var quesRemove = document.querySelector(".question");
var time = document.querySelector(".time");
var finalScore = document.querySelector(".result");
var highScore = document.querySelector(".high-score");
var answerResponse = document.querySelector(".answer-response");

var highScoreText;
var resultDisplayFormInput = document.createElement("input");

var startTimer;
var questions;
var optionsList;
var options;
var questionCounter=0;
var displayQuestionTimer;
var timerCount=75;
var currentScore=0;

var goBackFun = function(){
    location.reload(true);
};

var clearHighScoreFun = function(){
    localStorage.clear();
    highScoreText.classList.add("hide");
}

var highScores = function(event){
event.preventDefault();

    var dataArray= JSON.parse(localStorage.getItem("highscore")) || [];
    
    if(timerCount<0){
        timerCount=0;
    }
    if (resultDisplayFormInput.value!=""){
        console.log(" not blank");
        var userInitials = resultDisplayFormInput.value;
    
    dataArray.push({userInitials, timerCount});
    localStorage.setItem("highscore", JSON.stringify(dataArray));
    }
    
    finalScore.classList.add("hide");
    time.classList.add("hide");
    pageHighScore.classList.add("hide");
    headingBox.classList.add("hide");
    questionsBox.classList.add("hide");

    // var name = userInitials;
    // var score = timerCount;
    var highScoreHeading = document.createElement("h1");
    highScoreHeading.textContent = "High Scores";
    highScoreHeading.className = "result-heading";
    highScore.appendChild(highScoreHeading);

    dataArray.sort(function (a, b) {
        return b.timerCount - a.timerCount;
      });
    console.log(dataArray);
    for (var i=0; i<dataArray.length; i++){
        highScoreText = document.createElement("h3");
        highScoreText.textContent = (i+1)+ ". " + dataArray[i].userInitials + " : " + (dataArray[i].timerCount);
        highScoreText.className = "high-score-text";
        highScore.appendChild(highScoreText);
    }

     var goBackBtn = document.createElement("button");
     goBackBtn.textContent = "Go Back";
     goBackBtn.className = "go-back-btn";
     goBackBtn.onclick = goBackFun;
     highScore.appendChild(goBackBtn);

     var clearHighScore = document.createElement("button");
     clearHighScore.textContent = "Clear high scores";
     clearHighScore.className = "go-back-btn";
     clearHighScore.onclick = clearHighScoreFun;
     highScore.appendChild(clearHighScore);
};

var checkResult = function(userChoice){
    answerResponse.classList.remove("hide");  
    if(userChoice === questionBank[questionCounter].answer){
        // debugger;
        currentScore++;
        answerResponse.textContent = "Correct!";
    }
    else{
        timerCount=timerCount-10;
        answerResponse.textContent = "Wrong!";
    }
    setTimeout(displayNextQuestion, 1000);
};

var displayResult = function(timerCount){
    // questionsBox.remove();
    questionsBox.classList.add("hide");

    var resultHeading = document.createElement("h1");
    resultHeading.textContent = "All done!";
    resultHeading.className = "result-heading";
    finalScore.appendChild(resultHeading);

    var resultText = document.createElement("h3");
    resultText.textContent = "Your final score is " + (timerCount+1) + ".";
    resultText.className = "font-size"
    finalScore.appendChild(resultText);

    var resultDisplayForm = document.createElement("form");
    resultDisplayForm.className = "flex-box";
    var resultDisplayFormText = document.createElement("h3");
    resultDisplayFormText.className= "font-size";
    resultDisplayFormText.textContent = "Enter initials : ";
    resultDisplayForm.appendChild(resultDisplayFormText);

    resultDisplayFormInput.type = "text";
    resultDisplayFormInput.className = "input font-size";

    resultDisplayForm.appendChild(resultDisplayFormInput);

    var resultDisplayFormbutton = document.createElement("button");
    resultDisplayFormbutton.type = "submit";
    resultDisplayFormbutton.className = "submit-btn font-size";
    resultDisplayFormbutton.innerHTML="Submit";
    
    resultDisplayForm.appendChild(resultDisplayFormbutton);
    finalScore.appendChild(resultDisplayForm);

    var buttonSubmit= document.querySelector(".submit-btn");
    buttonSubmit.addEventListener("click", highScores, 100);
};

var displayNextQuestion = function(){
    answerResponse.classList.add("hide");
    questionCounter++;
    
    // console.log(questionCounter, (questionBank.length), timerCount );
    if(questionCounter>=(questionBank.length) || timerCount<=0){
        // console.log(questionCounter, questionBank.length+1, "hiiii");
        clearInterval(displayQuestionTimer);
        displayResult(timerCount);
        clearInterval(startTimer);
        return;
    }
    questions.textContent = questionBank[questionCounter].question;
    for( var j = 0; j<4; j++){
        var option = document.querySelector("#option"+j);
        option.textContent = questionBank[questionCounter].options[j];
    }
};

var timer = function(){
    if(timerCount>=0){
        time.innerHTML = "Time : "+timerCount;
        timerCount--;
    }
    else{
        displayResult(timerCount);
        clearInterval(startTimer);
    }
};

var loadFirstQuestion = function(){
    headingBox.classList.add("hide");
    questions = document.createElement("h1");
    questions.textContent = questionBank[0].question;
    questions.className = "question";
    questionsBox.appendChild(questions);

    optionsList = document.createElement("ul");
    optionsList.className = "options-list";

        for(var j=0; j<questionBank[0].options.length; j++){
            options = document.createElement("li");
            options.textContent = questionBank[0].options[j];
            options.className = "options";
            options.id = "option"+j;
            optionsList.appendChild(options);
        }
    questionsBox.appendChild(optionsList);
    startTimer = setInterval(timer, 1000);
    optionsList.onclick = function(event){
        var userChoice = event.target.id;
        if (userChoice ==="option0" || userChoice ==="option1" || userChoice ==="option2" || userChoice ==="option3"){
            checkResult(event.target.textContent);
        }
    };
};

button.addEventListener("click", loadFirstQuestion);
pageHighScore.addEventListener("click", highScores);