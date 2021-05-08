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
var headingBox = document.querySelector(".heading-box");
var questionsBox = document.querySelector(".questionsBox");
var quesRemove = document.querySelector(".question");

console.log(questionBank.length);
var displayQuestions = function(){    
    headingBox.remove();
    for(var i=0; i<questionBank.length;i++){
        // quesRemove.remove();
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
};

button.addEventListener("click", displayQuestions);