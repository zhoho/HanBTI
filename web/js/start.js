const main = document.querySelector("#main_page");
const qna = document.querySelector("#qna_page");

function addAnswer(answerText)
{
    var a = document.querySelector('.answerList');
    var answer = document.createElement('button');
    a.appendChild(answer);
    answer.innerHTML = answerText;
}

function goNext(qIdx)
{
    var q = document.querySelector('.questionList');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a)
    {
        addAnswer(qnaList[qIdx].a[i].answer);
    }
}

function click_startbutton()
{
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
}, 450);
}