const main = document.querySelector("#main_page");
const qna = document.querySelector("#qna_page");
const result = document.querySelector('#result_page');
const question_num = 16;

function goResult()
{
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
    setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
    }, 450)})
}

function addAnswer(answerText, qIdx)
{
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++)
        {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.75s";
            children[i].style.animation = "fadeOut 0.75s";
        }
        setTimeout(() => {
            for(let i = 0; i < children.length; i++)
            {
                children[i].style.display = "none";
            }
          goNext(++qIdx);
        }, 450);
    },false);
}

function goNext(qIdx)
{
    if(qIdx+1 === question_num)
    {
        goResult();
        return;
    }
    var q = document.querySelector('.questionBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a)
    {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
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