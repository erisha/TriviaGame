const pressPlay = document.getElementById('pressPlay');
const game = document.getElementById('game');
const question = document.getElementById('question');
//const trueBtn = document.getElementById('true');
//const falseBtn = document.getElementById('false');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const scoreSection = document.getElementById('scoreContainer');
//const userScore = document.getElementById('userScore');
//const totalScore = document.getElementById('totalScore');
const playBtn = document.getElementById('play');
const nextQuestion = document.getElementById('next');
const restartBtn = document.getElementById('restart');
const results = document.getElementById('answer');
const controlCenter = document.getElementById('controlCenter');


//questions
    let questions = [
        {
            question : 'How many countries does the equator pass through?',
            choiceA : '6',
            choiceB : '30',
            choiceC : '13',
            choiceD : '17',
            correct : 'choiceC'
            
        },{
            question : 'What is the hardest natural stone?', 
            choiceA : 'Granite', 
            choiceB : 'Diamond', 
            choiceC : 'Obsidian', 
            choiceD : 'Ruby',
            correct : 'choiceB'
            


        }, {
            question : 'Which country did the steelpan originate?',
            choiceA : 'Jamaica', 
            choiceB : 'England', 
            choiceC : 'Ghana', 
            choiceD : 'Trinidad & Tobago',
            correct : 'choiceD'

        }, {
            question : 'Which state is the largest in the United States',
            choiceA : 'Alaska',
            choiceB : 'Texas', 
            choiceC : 'California',
            choiceD :  'Florida',
            correct: 'choiceA'

        }
    ];

    const finalQuestion = questions.length - 1;
    let currentQuestion = 0;
    let score = 0;  
    let questionCounter= 0;

    function displayQuestion (){
        let q = questions[currentQuestion];

        question.innerHTML = "<p>"+ q.question +"</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }

    pressPlay.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restart);
    nextQuestion.addEventListener('click', next);
    playBtn.addEventListener('click', play);


    //start the game
    function startGame(){
        pressPlay.style.display = 'none';
        displayQuestion();
        game.style.display = 'block';
        //controlCenter.style.display = 'block';
    }

    //click on answer right green wrong red
    function checkAnswer(answer) {
        if( answer == questions[currentQuestion].correct){
            score++;
           // correctAnswer();
        }else{   
           // wrongAnswer();

        }
        if(currentQuestion < finalQuestion){
            currentQuestion++;
            displayQuestion();
        }else{
        //game over **add game over message here
        showScore();
        }

    } 
    function correctAnswer(){
        document.getElementById(currentQuestion).style.backgroundColor = '#00FF00';
    }

    function wrongAnswer(){
        document.getElementById(currentQuestion).style.backgroundColor = '#ff0000';
    
    }

    function showScore(){
        scoreSection.style.display = 'block';
        const userScore = score/questions.length;
        scoreSection.innerHTML += '<p>'+ userScore +'</p>'}