const main = document.querySelector("#main_page");
const qna = document.querySelector("#qna_page");
const result = document.querySelector('#result_page');
const question_num = 13;
const select = [];
const select_to_mbti = [];

function calculate_result()
{
    var mbtiArray = [
        {name : 'i', value : 0, key : 0},
        {name : 'e', value : 0, key : 1},
        {name : 'n', value : 0, key : 2},
        {name : 's', value : 0, key : 3},
        {name : 'f', value : 0, key : 4},
        {name : 't', value : 0, key : 5},
        {name : 'p', value : 0, key : 6},
        {name : 'j', value : 0, key : 7},
    ]
    for(let i = 0; i < question_num; i++)
    {
        var target = qnaList[i].a[select[i]];
        for(let j = 0; j < target.type.length; j++)
        {
            for(let k = 0; k < mbtiArray.length; k++)
            {
                if(target.type[j] === mbtiArray[k].name)
                {
                    mbtiArray[k].value += 1;
                }
            }
        }
    }
    //console.log(mbtiArray);
    if(mbtiArray[0].value >= mbtiArray[1].value)
    {
        select_to_mbti.push('I');
    }  
    else if(mbtiArray[0].value < mbtiArray[1].value)
    {
        select_to_mbti.push('E');
    }

    if(mbtiArray[2].value >= mbtiArray[3].value)
    {
        select_to_mbti.push('N');
    }  
    else if(mbtiArray[2].value < mbtiArray[3].value)
    {
        select_to_mbti.push('S');
    }

    if(mbtiArray[4].value >= mbtiArray[5].value)
    {
        select_to_mbti.push('F');
    }  
    else if(mbtiArray[4].value < mbtiArray[5].value)
    {
        select_to_mbti.push('T');
    }

    if(mbtiArray[6].value >= mbtiArray[7].value)
    {
        select_to_mbti.push('P');
    }  
    else if(mbtiArray[6].value < mbtiArray[7].value)
    {
        select_to_mbti.push('J');
    }
    
    //console.log(select_to_mbti);
    const mbti = select_to_mbti.join("")
    if(mbti === 'INFP')return 0;
    else if(mbti === 'INFJ')return 1;
    else if(mbti === 'INTP')return 2;
    else if(mbti === 'INTJ')return 3; 
    else if(mbti === 'ISFP')return 4; 
    else if(mbti === 'ISFJ')return 5; 
    else if(mbti === 'ISTP')return 6; 
    else if(mbti === 'ISTJ')return 7; 
    else if(mbti === 'ENFP')return 8; 
    else if(mbti === 'ENFJ')return 9; 
    else if(mbti === 'ENTP')return 10; 
    else if(mbti === 'ENTJ')return 11; 
    else if(mbti === 'ESFP')return 12; 
    else if(mbti === 'ESFJ')return 13; 
    else if(mbti === 'ESTP')return 14; 
    else if(mbti === 'ESTJ')return 15; 
}

function setResult()
{
    point = calculate_result();

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = info_list[point].name;

    var resultImage = document.createElement('img');
    const imgDiv = document.querySelector('#resultImage')
    var ImageUrl = './image/Page'+point +'.jpg';
    resultImage.src = ImageUrl;
    resultImage.alt = point;
    resultImage.classList.add('img-fluid');
    imgDiv.appendChild(resultImage);

    const resultDescription = document.querySelector('.resultDescription');
    resultDescription.innerHTML = info_list[point].desc;

    const club = document.querySelector(".club");
    club.innerHTML = info_list[point].club;
}

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
    setResult();
}

function addAnswer(answerText, qIdx, idx)
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
            select[qIdx] = idx;
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
    if(qIdx === question_num)
    {
        goResult();
        return;
    }
    var q = document.querySelector('.questionBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a)
    {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
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

function click_sharebutton()
{
    var webAddress = document.getElementById("webaddress").innerHTML;
    navigator.clipboard.writeText(webAddress)
        .then(() => {
        alert("복사되었습니다!")
    })
        .catch(err => {
        alert('에러발생!', err);
    })
}

// function copyToClickBoard(){
//     var content = document.getElementById('textArea').innerHTML;

//     navigator.clipboard.writeText(content)
//         .then(() => {
//         console.log("Text copied to clipboard...")
//     })
//         .catch(err => {
//         console.log('Something went wrong', err);
//     })
 
// }