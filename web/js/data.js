// j p(5) i e(5) n s(5) t f(5)
const qnaList =[
    {
    q: '1. 간만에 찾아온 팀플과 과제가 없는 주말! 나는?',
    a: [
        {
            answer: '방에서 뒹굴뒹굴 푹 쉬는걸 선호한다!', type: ['i']
        },
        {
            answer: '단톡에 연락해 약속을 잡는다! (영일대 놀러가자~)', type: ['e']
        },
    ]
    },
    {
        q: '2. 친구와 한동 한바퀴를 하다가 다른 사람이 나를 싫어한다는 충격적인 말을 들었을 때 나는?',
        a: [
            {
                answer: '왜? 나를 왜 싫어해? 이유가 먼저 궁금하다.', type:['t']
            },
            {
                answer: '바로 마음에 상처를 입는다.', type:['f']
            },
        ]
    },
    {
        q: '3. 아 피곤해.. 오석에서 공부를 다 마치고 기숙사로 돌아가기 전 나는?',
        a: [
            {
                answer: '얼른 짐을 싸고 방으로 돌아간다.', type:['p']
            },
            {
                answer: '내일 할 일을 정리하고 방으로 돌아간다.', type:['j']
            },
        ]
    },
    {
        q: '4. 교수님께서 과제를 내주셨다. 더 선호하는 과제는?',
        a: [
            {
                answer: '글씨체, 양식, 분량, 주제 등 확실한 가이드라인이 정해져 있는 과제.', type:['s']
            },
            {
                answer: '자유롭게 내 생각을 적을 수 있는 과제.', type:['n']
            },
        ]
    },
    {
        q: '5. 00교수님 : 자자.. 이번주 부터 수업은 팀플로 진행됩니다. 했을때 나는? ',
        a: [
            {
                answer: '시작 전 부터 걱정이 된다. 무사히 진행 될까?', type:['i']
            },
            {
                answer: '팀플 좋지! 사람들이 모이면 더 큰 시너지가 나는 법', type:['e']
            },
        ]
    },
    {
        q: '6. 교수님께서 과제 제출일을 갑자기 앞당기셨다. 이때 나는?',
        a: [
            {
                answer: '미리 계획 해둔 일정이 있는데… 굉장히 스트레스를 받는다.', type:['j']
            },
            {
                answer: '스트레스를 받긴 하지만 그냥 하면 된다는 생각을 한다.', type:['p']
            },
        ]
    },
    {
        q: '7. 주변 사람들이 나에게 하는 말중 가까운 것은?',
        a: [
            {
                answer: '너 되게 꾸준하고 참을성이 있다!', type:['s']
            },
            {
                answer: '너 되게 창의적이고 독창적이다!', type:['n']
            },
        ]
    },
    {
        q: '8. 학교에서 너무 화나는 일이 생겼다. 이때 나는?',
        a: [
            {
                answer: '나는 보통 감정에 지배되는 편이다.', type:['f']
            },
            {
                answer: '나는 보통 감정을 제어하는 편이다.', type:['t']
            },
        ]
    },
    {
        q: '9. 나의 기숙사 방 또는 자취 방 상태는?',
        a: [
            {
                answer: '평소 깔끔하게 정돈 되어있는 편이다.', type:['j']
            },
            {
                answer: '평소 지저분한 편이다. 한번에 몰아서 치운다', type:['p']
            },
        ]
    },
    {
        q: '10. 오석에서 시험공부 하던 중 마주친 선배. “선배 이거 어떻게 풀어요?” 라고 물어보니 그냥 외우면 된다고 한다. 이때 나는?',
        a: [
            {
                answer: '음.. 이해가 안되는데 어떻게 외우지?', type:['n']
            },
            {
                answer: '음.. 일단 외우라고 하니까 외워야겠다.', type:['s']
            },
        ]
    },
    {
        q: '11. 학기가 끝나고 집에서 보내는 방학! 나는?',
        a: [
            {
                answer: '집에 있으니 심심하다. 얼른 학교에서 친구들과 지내며 에너지를 얻고 싶어!', type:['e']
            },
            {
                answer: '학기 중 너무 힘들었으니까 방학 만큼은 나는 집순이!', type:['i']
            },
        ]
    },
    {
        q: '12. 어느덧 시험기간이 다가왔을 때 나는?',
        a: [
            {
                answer: '과목별 시험 일정, 범위를 정리하고 어떤 공부부터 해야할지 계획부터 한다.', type:['j']
            },
            {
                answer: '일단 공부를 하면서 계획을 짜는 편이다.', type:['p']
            },
        ]
    },
    {
        q: '13. 내일은 입학 후 기대 되는 Hanst! 나는?',
        a: [
            {
                answer: '‘갑자기 비가 오면 어떡하지?’, ‘밥은 맛있었으면 좋겠다’, ‘사람들이랑 어색하면 어떡하지?’ 등 여러가지 상황을 상상하며 잠을 잔다.', type:['n']
            },
            {
                answer: '내일 일찍 일어나야 하니까 얼른 잔다.', type:['s']
            },
        ]
    },
    {
        q: '14. 다음주 시험인데 공부하기 싫을 때 드는 생각은?',
        a: [
            {
                answer: '잘 봐야되는데 범위가 좀 줄었으면 좋겠다.', type:['s']
            },
            {
                answer: '‘시험을 내가 왜 봐야하는거지?’, ‘이 시험을 잘 친다고 해서 나에게 도움이 될까?’, ‘시험이 없는 세상은 없을까?’ 라는 등의 생각을 한다.', type:['n']
            },
        ]
    },
    {
        q: '15. 나 동아리 지원했는데 떨어졌어.. 친구가 슬퍼할때 나는?',
        a: [
            {
                answer: '“어떤 동아리 지원했었는데?”, “질문에 뭐라고 답변했길래?” 라고 먼저 묻는다.', type:['t']
            },
            {
                answer: '“헐 ㅠㅠ 괜찮아?”, “힘들지…” 라고 먼저 위로를 한다.', type:['f']
            },
        ]
    },
    {
        q: '16. 긴장되는 첫 팀 모임에서 나는?',
        a: [
            {
                answer: '“몇 학번 이세요? 이름이 뭐에요?” 먼저 말을 거는 편이다.', type:['e']
            },
            {
                answer: '누군가 말을 걸어주겠지.. 하며 기다린다.', type:['i']
            },
        ]
    },
    {
        q: '17. 친구가 “ㅇㅇ아 나 우울해서 머리 잘랐다..” 라고 말하면 나는?',
        a: [
            {
                answer: '머리 어떻게 잘랐어? 사진 보내봐.', type:['t']
            },
            {
                answer: '무슨 일 있었어? 괜찮아?', type:['f']
            },
        ]
    },
    {
        q: '18. 동아리에 지원을 하려고 하는데 두 동아리 중 어떤 동아리를 더 들어가고 싶은가?',
        a: [
            {
                answer: '실력이 좋은 사람들이 모여 있는 곳!', type:['t']
            },
            {
                answer: '사람 좋은 사람들이 모여 있는 곳!', type:['f']
            },
        ]
    },
    {
        q: '19. 배고프다.. 수업 끝나고 밥 누구랑 먹지?',
        a: [
            {
                answer: '친구들, 선 후배들 다양한 사람들과 밥고가 자주 있는 편이다.', type:['e']
            },
            {
                answer: '먹는 사람이랑만 먹거나 혼자 먹는 편이다.', type:['i']
            },
        ]
    },
    {
        q: '20. 우리 종강하고 새섬, 새내기끼리 여행갈까? 계획은 어떻게 세울까?',
        a: [
            {
                answer: '1일차는 대전에 가서 성심당을 먹고, 엑스포에 들려서 사진 찍고 30분 뒤에… 꼼꼼하게 계획 일정을 세우는 편이다.', type:['j']
            },
            {
                answer: '1일차는 대전에 가서 맛있어 보이는 곳에서 먹고 쉬다가 밥먹으러 가자. 계획을 세우긴 하지만 세부적으로 세우는 편은 아니다.', type:['p']
            },
        ]
    },
]

const info_list = [
    {
        name : '한동 열정맨',
        desc : '정열적이고 충실하며 낭만적이며, 내적 신념이 깊다.',
        club : '그랜드슬램, CCC, 한풍',
        match : '한동 워리어, 한동 지휘자',
        place : ''
    },
    {
        name : '한동 츤데레',
        desc : '',
        club : '팔레트, 펜통',
        match : '한동 활동가, 한동 토론왕',
        place : ''
    },
    {
        name : '한동 박사님',
        desc : '',
        club : 'CRA, 청소년 자유학교',
        match : '한동 경찰관, 한동 지휘자',
        place : ''
    },
    {
        name : '한동 전략가',
        desc : '',
        club : 'GOUST, 두나미스',
        match : '한동 워리어, 한동 지휘자',
        place : ''
    },
    {
        name : '한동 예술가',
        desc : '',
        club : '한동 오케스트라, HAC, 하향',
        match : '한동 워리어, 한동 외교관, 한동 경찰관',
        place : ''
    },
    {
        name : '한동 수호자',
        desc : '',
        club : '즉흥적 새벽 두시, 얼리버드',
        match : '한동 핵인싸, 한동 사업가',
        place : ''
    },
    {
        name : '한동 재주꾼',
        desc : '',
        club : 'NEO, 꾼들, Ammission',
        match : '한동 외교관 , 한동 경찰관',
        place : ''
    },
    {
        name : '한동 논리왕',
        desc : '',
        club : '리퀴드, 피스메이커',
        match : '한동 핵인싸, 한동 사업가',
        place : ''
    },
    {
        name : '한동 활동가',
        desc : '',
        club : 'Holy Rams, 어메이징 스토리',
        match : '한동 츤데레, 한동 전략가',
        place : ''
    },
    {
        name : '한동 워리어',
        desc : '',
        club : '피치파이프, 암스트롱',
        match : '한동 열정맨, 한동 예술가',
        place : ''
    },
    {
        name : '한동 토론왕',
        desc : '',
        club : '할루시네이션, 한검',
        match : '한동 츤데레, 한동 전략가',
        place : ''
    },
    {
        name : '한동 지휘자',
        desc : '',
        club : "GO, 천풍해세",
        match : '한동 열정맨, 한동 박사님',
        place : ''
    },
    {
        name : '한동 핵인싸',
        desc : '',
        club : "zizzy, 한방 스윙스",
        match : '한동 수호자, 한동 논리왕',
        place : ''
    },
    {
        name : '한동 외교관',
        desc : '',
        club : "레버리, 소울",
        match : '한동 예술가, 한동 재주꾼',
        place : ''
    },
    {
        name : '한동 사업가',
        desc : '',
        club : "CANVAS, VAM",
        match : '한동 수호자, 한동 논리왕',
        place : ''
    },
    {
        name : '한동 경찰관',
        desc : '',
        club : 'H-MILAN, DUDUS',
        match : '한동 예술가, 한동 재주꾼, 한동 박사님',
        place : ''
    }
]