var questionBank= [
    {
        question : "Which built-in method combines the text of two strings and returns a new string?",
        options : ["A - append()", "B - concat()" , "C - attach()", "D - None of the above."],
        answer : "B - concat()"
    },
    {
        question : "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        options : ["A - sup()", "B - small()", "C - strike()", "D - sub()"],
        answer : "D - sub()"
    },
    {
        question : "Which of the following function of Array object reverses the order of the elements of an array?",
        options : ["A - reverse()","B - push()", "C - reduce()", "D - reduceRight()"],
        answer : "A - reverse()"
    },
    {
        question : "Which built-in method returns the length of the string?",
        options : ["A - length()", "B - size()", "C - index()", "D - None of the above."],
        answer : "A - length()"
    },
    {
        question : "How can you get the type of arguments passed to a function?",
        options : ["A - using typeof operator", "B - using getType function", "C - Both of the above", "D - None of the above."],
        answer : "A - using typeof operator"
    },
    {
        question : "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
        options : ["A - sup()", "B - small()", "C - strike()", "D - sub()"],
        answer : "C - strike()"
    }
];

var button = document.querySelector(".start-btn");
var headingBox = document.querySelector(".heading-box");
var questionsBox = document.querySelector(".questionsBox");

var displayQuestions = function(){
    headingBox.remove();
    var questions = document.createElement("h1");
    questions.textContent = questionBank[0].question;
    questions.className = "question";
    questionsBox.appendChild(questions);

    var options = document.createElement("li");
    options.textContent = questionBank[0].options;
    options.className = "options-list";
    questionsBox.appendChild(options);
};

button.addEventListener("click", displayQuestions);