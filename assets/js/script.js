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

var startTimer;

var timerCount=5;

var displayResult = function(timerCount){
    questionsBox.remove();

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

    var resultDisplayFormInput = document.createElement("input");
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

    var userInitials = resultDisplayFormInput.value;
    console.log(userInitials);
};
var highScores = function(){
    finalScore.remove();
    time.remove();
    pageHighScore.remove();
    headingBox.remove();

    var name = "kirti";
    var score = timerCount;
    var highScoreHeading = document.createElement("h1");
    highScoreHeading.textContent = "High Scores";
    highScoreHeading.className = "result-heading";
    highScore.appendChild(highScoreHeading);

    var highScoreText = document.createElement("h3");
    highScoreText.textContent = "1. " + name + " -> " + (score+1);
    highScoreText.className = "high-score-text";
    highScore.appendChild(highScoreText);

     var goBackBtn = document.createElement("button");
     goBackBtn.textContent = "Go Back";
     goBackBtn.className = "go-back-btn";
     goBackBtn.onclick = displayQuestions;
     highScore.appendChild(goBackBtn);

     var clearHighScore = document.createElement("button");
     clearHighScore.textContent = "Go Back";
     clearHighScore.className = "go-back-btn";
     clearHighScore.onclick = displayQuestions;
     highScore.appendChild(clearHighScore);

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

var displayQuestions = function(){    
    headingBox.remove();
    for(var i=0; i<questionBank.length;i++){
        // questions.textContent = "";
        var questions = document.createElement("h1");
        questions.textContent = questionBank[i].question;
        questions.className = "question";
        questionsBox.appendChild(questions);

        var optionsList = document.createElement("ul");
        optionsList.className = "options-list";

            for(var j=0; j<questionBank[i].options.length; j++){
                var options = document.createElement("li");
                options.textContent = questionBank[i].options[j];
                options.className = "options";
                optionsList.appendChild(options);
            }
        questionsBox.appendChild(optionsList);
    }
    startTimer = setInterval(timer, 1000);
};

button.addEventListener("click", displayQuestions);