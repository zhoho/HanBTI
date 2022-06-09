const main = document.querySelector("#main_page");
const qna = document.querySelector("#qna_page");
const result = document.querySelector('#result_page');
const alltype = document.querySelector('#alltype_page')
const question_num = 20;
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
    // select_to_mbti = null;
    // for(i = 0; i < 7; i++)
    // {
    //     mbtiArray[i].value = 0;
    // }
    if(mbti === 'INFP')return 0; //이상적인 세상을 만들어가는 사람 기숙사, 방
    else if(mbti === 'INFJ')return 1; //사람에 관한 뛰어난 통찰력을 가진 사람 기숙사, 방
    else if(mbti === 'INTP')return 2; //비평적인 관점을 가진 뛰어난 전략을 가진 사람 기숙사, 방 
    else if(mbti === 'INTJ')return 3; //전체를 조합하여 비전을 제시하는 사람 기숙사, 방
    else if(mbti === 'ISFP')return 4; //따뜻한 감성을 가진 겸손한 사람 기숙사, 방
    else if(mbti === 'ISFJ')return 5; //성실하고 온화하며 협조를 잘 하는 사람 기숙사, 방
    else if(mbti === 'ISTP')return 6; //논리적이고 뛰어난 상황 적응력을 가진 사람 기숙사, 방 
    else if(mbti === 'ISTJ')return 7; //한 번 시작한 일은 끝까지 해내는 사람 기숙사, 방
    else if(mbti === 'ENFP')return 8; //열정적으로 새로운 관계를 만드는 사람 동방
    else if(mbti === 'ENFJ')return 9; //타인의 성장을 도모하고 협동하는 사람  도
    else if(mbti === 'ENTP')return 10;// 풍부한 상상력으로 새로운 것에 도전하는 사람
    else if(mbti === 'ENTJ')return 11;// 비전을 갖고 타인을 활력적으로 인도하는 사람 
    else if(mbti === 'ESFP')return 12;// 분위기를 고조시키는 우호적인 사람 양덕, 영일대 
    else if(mbti === 'ESFJ')return 13;// 친절, 현실감을 바탕으로 타인에게 봉사하는 사람 
    else if(mbti === 'ESTP')return 14;// 친구, 운동, 음식 등 다양함을 선호하는 사람 어디에 있는지 모름
    else if(mbti === 'ESTJ')return 15;// 사무적, 실용적, 현실적인 사람 양덕, 영일대
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

    const match = document.querySelector(".match");
    match.innerHTML = info_list[point].match;

    const place = document.querySelector(".place");
    place.innerHTML = info_list[point].place;
}

function removeImage()
{
    const imgDiv = document.querySelector('#resultImage')
    var ImageUrl = './image/Page'+point +'.jpg';
    resultImage.src = ImageUrl;
    resultImage.alt = point;

    // 모든 유형 확인하기 페이지에서 다시 모든 유형 확인하기 페이지로 넘어갈 때 오류나던것 해결
    if(imgDiv.firstChild != null)
    {
        imgDiv.removeChild(imgDiv.firstChild);
    }
}

function setResult_alltype(typepoint)
{
    removeImage();
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
        result.style.display = "block";
    }, 450)

    point = typepoint;
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = info_list[point].name;

    //이미지 겹쳐지는거 고치기
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

    const match = document.querySelector(".match");
    match.innerHTML = info_list[point].match;

    const place = document.querySelector(".place");
    place.innerHTML = info_list[point].place;
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
    var webAddress = "https://handongbti.netlify.app";
    navigator.clipboard.writeText(webAddress)
        .then(() => {
        alert("복사되었습니다!")
    })
        .catch(err => {
        alert('에러발생!', err);
    })
}

function click_checkall()
{
    removeImage();
    result.style.WebkitAnimation = "fadeOut 1s";
    result.style.animation = "fadeOut 1s";
    setTimeout(() => {
        alltype.style.WebkitAnimation = "fadeIn 1s";
        alltype.style.animation = "fadeIn 1s";
    setTimeout(() => {
        result.style.display = "none";
        alltype.style.display = "block";
    }, 450);
}, 450);
}

function click_restart()
{
    result.style.WebkitAnimation = "fadeOut 1s";
    result.style.animation = "fadeOut 1s";

    setTimeout(() => {
        main.style.WebkitAnimation = "fadeIn 1s";
        main.style.animation = "fadeIn 1s";
    setTimeout(() => {
        location.reload(true);
    }, 450);
}, 450);
}

