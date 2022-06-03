const qnaList =[
    {
    q: '1. 간만에 찾아온 팀플과 과제가 없는 주말! 나는?',
    a: [
        {
            answer: '1. 방에서 뒹굴뒹굴 푹 쉰다.', type: ['i']
        },
        {
            answer: '2. 단톡에 연락해 약속을 잡는다! (영일대 놀러가자~)', type: ['e']
        },
    ]
    },
    {
        q: '2. 친구와 한동한바퀴를 하다가 다른 사람이 나를 싫어한다는 충격적인 말을 들었을 때 나는?',
        a: [
            {
                answer: '1. 왜? 나를 왜 싫어해? 이유가 먼저 궁금하다.', type:['t']
            },
            {
                answer: '2. 바로 마음에 상처를 입는다.', type:['f']
            },
        ]
    },
    {
        q: '3. 교수님께서 또 과제를 내주셨다. 더 선호하는 과제는?',
        a: [
            {
                answer: '1. 글씨체, 양식, 분량, 주제 등 확실한 가이드라인이 정해져 있는 과제', type:['s']
            },
            {
                answer: '2. 자유롭게 내 생각을 적을 수 있는 과제.', type:['n']
            },
        ]
    },
    {
        q: '4. 교수님이 과제 제출일을 갑자기 앞당기셨다. 이때 나는?',
        a: [
            {
                answer: '1. 미리 계획 해둔 일정이 있는데… 굉장히 스트레스를 받는다.', type:['j']
            },
            {
                answer: '2. 스트레스를 받긴 하지만 그냥 하면 된다는 생각을 한다.', type:['p']
            },
        ]
    },
    {
        q: '5. 오석에서 시험공부 하던 중 마주친 선배. “선배 이거 어떻게 풀어요?” 라고 물어보니 그냥 외우면 된다고 한다. 이때 나는?',
        a: [
            {
                answer: '1. 음.. 이해가 안되는데 어떻게 외우지?', type:['n']
            },
            {
                answer: '2. 음.. 일단 외우라고 하니까 외워야겠다.', type:['s']
            },
        ]
    },
    {
        q: '6. 학기가 끝나고 집에서 보내는 방학! 나는?',
        a: [
            {
                answer: '1. 집에 있으니 심심하다. 얼른 학교에서 친구들과 지내며 에너지를 얻고 싶어!', type:['e']
            },
            {
                answer: '2. 학기 중 너무 힘들었으니까 방학 만큼은 나는 집순이!', type:['i']
            },
        ]
    },
    {
        q: '7. 어느덧 시험기간이 다가왔을 때 나는?',
        a: [
            {
                answer: '1. 과목별 시험 일정, 범위를 정리하고 어떤 공부부터 해야할지 계획부터 한다.', type:['j']
            },
            {
                answer: '2. 일단 공부를 하면서 계획을 짜는 편이다.', type:['p']
            },
        ]
    },
    {
        q: '8. 내일은 입학 후 기대 되는 Hanst! 나는?',
        a: [
            {
                answer: '1. ‘갑자기 비가 오면 어떡하지?’, ‘밥은 맛있었으면 좋겠다’, ‘사람들이랑 어색하면 어떡하지?’ 등 여러가지 상황을 상상하며 잠을 잔다.', type:['n']
            },
            {
                answer: '2. 내일 일찍 일어나야 하니까 얼른 잔다.', type:['s']
            },
        ]
    },
    {
        q: '9. 다음주 시험인데 공부하기 싫을 때 나는?',
        a: [
            {
                answer: '1. 잘 봐야되는데 범위가 좀 줄었으면 좋겠다.', type:['s']
            },
            {
                answer: '2.‘시험을 내가 왜 봐야하는거지?’, ‘이 시험을 잘 친다고 해서 나에게 도움이 될까?’, ‘시험이 없는 세상은 없을까?’ 라는 등의 생각을 한다.', type:['n']
            },
        ]
    },
    {
        q: '10. 나 동아리 지원했는데 떨어졌어.. 친구가 슬퍼할때 나는?',
        a: [
            {
                answer: '1. “어떤 동아리 지원했었는데?”, “질문에 뭐라고 답변했길래?” 라고 묻는다.', type:['t']
            },
            {
                answer: '2. “헐 ㅠㅠ 괜찮아?”, “힘들지…” 라며 위로를 한다.', type:['f']
            },
        ]
    },
    {
        q: '11. 긴장되는 첫 팀 모임에서 나는?',
        a: [
            {
                answer: '1. “몇 학번 이세요? 이름이 뭐에요?” 먼저 말을 거는 편이다.', type:['e']
            },
            {
                answer: '2. 누군가 말을 걸어주겠지.. 하며 기다린다.', type:['i']
            },
        ]
    },
    {
        q: '12. 친구가 “ㅇㅇ아 나 우울해서 머리 잘랐다..” 라고 말하면 나는?',
        a: [
            {
                answer: '1. 머리 어떻게 잘랐어? 사진 보내봐.', type:['t']
            },
            {
                answer: '2. 무슨 일 있었어? 괜찮아?', type:['f']
            },
        ]
    },
    {
        q: '13. 동아리에 지원을 하려고 하는데 두 동아리 중 어떤 동아리를 더 들어가고 싶은가?',
        a: [
            {
                answer: '1. 실력이 좋은 사람들이 모여 있는 곳!', type:['t']
            },
            {
                answer: '2. 사람 좋은 사람들이 모여 있는 곳!', type:['f']
            },
        ]
    },
    {
        q: '14. 배고프다.. 수업 끝나고 밥 누구랑 먹지?',
        a: [
            {
                answer: '1. 친구들, 선 후배들 다양한 사람들과 밥고가 자주 있는 편이다.', type:['e']
            },
            {
                answer: '2. 먹는 사람이랑만 먹거나 혼자 먹는 편이다.', type:['i']
            },
        ]
    },
    {
        q: '15. 우리 종강하고 새섬, 새내기끼리 여행갈까? 계획은 어떻게 세울까?',
        a: [
            {
                answer: '1. 1일차는 xx에 가서 yy를 먹고, vv 들려서 사진 찍고 30분 뒤에… 꼼꼼하게 계획 일정을 세우는 편이다.', type:['j']
            },
            {
                answer: '2. 1일차는 xx에 가서 맛있어 보이는 곳에서 먹고 쉬다가 vv를 가자. 계획을 세우긴 하지만 세부적으로 세우는 편은 아니다.', type:['p']
            },
        ]
    },
]

const info_list = [
    {
        name : 'INFP',
        desc : '성격이론에 관심 많고, 커뮤니티 많이 함.이상주의적.잡생각 많음 (망상 잦음).관종인데 막상 관심받으면 어색하고 어쩔줄모름.완벽하게 하지 못할거면 아예 시작을 안함.해야될 일 생각만 하고 실제로는 발만 담그고 안 함.완전 처음 보는 사람한테는 말 잘 거는데 학교같이 조직생활 하는 곳에서는 낯 엄청 가림.좋아하는 건 미친 듯이 파고 집중 근데 열정이 초기에만 불타고 빨리 식음.너무 게을러서 벼락치기 함.멀티 안됨, 연락 귀찮아함, 안읽씹 잘함.내적 성장 엄청 중요하게 여김./n가끔 우울한 나에 심취 내 개인적인 얘기 남들한테 하는거 싫어함.화날 때 혼자 있어야 함 누가 건들면 안됨.한번 싫은건 끝까지 싫음.남한테 정말 관심 없음, 남을 잘 안믿음.남이 나를 어떻게 생각할지 고민 많이 함.누가 내 일하는 방식에 대해 간섭하면 매우 싫어함.혼자 있는건 좋은데 외로운 건 싫음.나가는거 귀찮아하는데 막상 나가면 잘놈.집에서 뒹굴거리면서 티비보는거 좋아함.여러명이서 노는것보다 한두명이서 노는게 좋음.싸우는 거 싫어해서 걍 내가 희생.인간관계에  예민함.자기애 강한데 자존감은 낮음.처음 보는 사이면 먼저 말 못걸음 근데 말 걸면 또 잘 얘기함.남얘기 잘 들어주는척 하는데 사실 딴생각함.남얘기에 큰 관심없고 공감하고 싶은 마음도 없음.시작은 창대하나, 정작 끝을 내는 법은 없음.생각만 하고 실천 안함.남한테 폐끼치는 거 제일 싫어함.낯 심하게 가리고 사람 사귈 때 따지는거 존나 많음.'
    },
    {
        name : 'INFJ',
        desc : '생각이 너무 많음.\n새로운 일 시작하는거, 새로운 사람 만나는거 싫어함.\n낯가림 심함, 눈치 빠름.\n겉으로 웃는데 속으로 욕 많이 함.\n집순인데 여행가는 건 좋음.\n할거 미리 해치우는 편.\n친해지고 싶은 사람이 있어도 그 사람이 먼저 다가와주길 바람.\n관심받고 싶은데 나서는 건 싫어함.\n내사람한테는 존나 잘해줌.\n조용히 다니는데 가끔 좀 튀고싶을 때 있음.\n나 혼자 생각할 시간 꼭 필요.\n계획적인거 좋아함.\n친하고 마음 맞는 애랑 단 둘이 노는거 좋아함.\n내가 하고싶은건 열심히 함 특히 예술쪽으로 감수성 풍부.'
    },
    {
        name : 'INTP',
        desc : '자발적 아웃사이더.혼자 있는게 제일 편하고 행복.나 존나 잘난줄 암.공상 자주함.분석, 추리 좋아함, 생각 많음.무뚝뚝한 편이고 잡담같은것도 잘 못하고 싫어함.논리력 부족한, 어리석은 사람들 보면 화가 너무 남.책 진짜 좋아하는데 읽기 귀찮아서 리스트에만 적어놓음.지식에 대한 욕망 강함.인간은 싫지만 흥미로운 존재라고 생각.진지충이라는 소리 자주 들음.팩폭 하지말라는 소리 자주 들음.주변에 사람들 별로 없는데 남아있는 사람들이랑은 정말 잘 지냄.감수성 풍부, 말 많이 안함, 귀찮은거 싫어함.존나 게으르고 미루기의 끝판왕.시끄러운거 존나 싫어함.감정기복 없음.누구한테 내 감정 잘 표현 안하고 묵혀두는데 딱히 그거에 스트레스 받진 않음.웬만한 일에 상처 안받음.남이 내 욕하는거 신경 안쓰고 남 욕도 안함.인간관계 계산적.친구들이랑 얘기할 때 가벼운 얘기하는거 싫어함.시작하면 끝을 봐야함.개인주의자 완벽하게 못할거면 안함.남에게 피해주는 거 싫어하고 남에게 관심 별로 없음.자기주관 뚜렷, 호불호 확실 감수성 풍부.'
    },
    {
        name : 'INTJ',
        desc : '혼자있는거 좋아함, 사회활동 싫어함.\n근데 단체활동할 때 주도적인 역할 자주 맡음.\n사람많고 시끄러운 장소 싫어함.\n굉장한 개인주의자, 이기적.\n하루하루 세세하게 계획짜놓고 지내는 것 좋아함.\n돈관리도 잘 하는 편, 사실과 원리원칙 중요.\n감정에 휘둘리는 거 싫어함.\n남에게 관심 없고 친구가 고민 상담할때도 공감 못함.\n문제 해결에 도움은 줘도 위로 자체는 잘 못함.\n공상 잦음, 어떤 사안이나 작품에 대해 다각도로 해석하는 거 좋아함.\n수다 떠는 거 좋아함.\n인간관계 정리 잘 하고 사람에게 정 붙이는데 시간 오래 걸림.\n사람 얼굴, 이름 잘 기억 못함.\n약간 관종끼 있지만 내성적이라 표출은 안함.\n동물들에게는 한없이 친절.\n완벽주의자.\n몇몇 물건에 집착함.\n무신경하다는 소리 들음.\n이성적인데 감성적.\n성격 이상하다는 생각 스스로 자주 함.\n특이하고 특별한데 남에게 그런소리 듣는 건 싫음.\n남 눈치 안보고 남 일에 무신경.'
    },
    {
        name : 'ISFP',
        desc : '귀찮음, 행동 느림.\n감정기복 심하고 공감능력 좋음.\n모든 일 미룰 수 있을 때까지 다 미룸.\n집순이, 집돌이.\n집에가면 연락두절됨.\n배려형 개인주의\n약속 있었는데 취소되면 속으로 기뻐함.\n혼자가 좋은데 막상 만나면 잘 놈, 노는건 좋지만 금방 지침.\n조용한 관종, 소심한 관종.\n칭찬 받으면 그거 하루종일 생각남.\n갈등, 불화 싫어함.\n다이어리 끝까지 써본 적 없음.\n사람들이랑 만나면 기빨림.\n한번 받은 일은 끝까지 해야한다는 생각이 있음 근데 하다가 잠.\n친해지면 활발함.\n남 눈치 존나 많이 봄.\n하기 싫은거 안하고 하고싶은것만 함.\n착한 줄 아는데 사실 이기적.\n고집, 자존심 진짜 셈.\n남한테 속마음 얘기 잘 안함.\n사람 만나는거 좋은데 싫음.\n결정 잘 못함.\n거절을 잘 못함.\n양보를 잘함.\n분석, 비판, 판단은 잘하는데 이러한 판단을 적극적으로 행동에 옮기지는 않음.\n미룰 수 있을때까지 미룸.\n겸손하다는 말 자주 들음.\n낙천적.\n인간관계에 신경 많이 쓰는 편.\n자존감 낮음.\n주변 의견, 주변 분위기 따라감.\n불평불만 다 쌓아두기만하고 표출은 못함.'
    },
    {
        name : 'ISFJ',
        desc : 'ISFJ 원칙주의자.\n남 눈치봄, 남들 챙기는 거 좋아함.\n외로움 많이 타는데 많은 사람이랑 있는건 싫음.\n아싸무리에서 인싸, 인싸무리에서 아싸.\n전화오면 받을까 말까 고민하다 받음.\n게으른 완벽주의자.\n조 짜서 하는 단체활동 안 좋아함 혼자서 할 수 있는 일 좋아함.\n배려심 많고 공감 잘해줌.\n인간관계에 스트레서 많이 받음.\n아니면 아니고 말면 말자 마인드.\n겉으론 무덤덤해보여도 속으론 온갖 생각 다 함.\n살짝 비판적.\n어쩔 땐 내향적이고 어쩔 땐 외향적, 성격 왔다갔다해서 나도 내 성격 잘 모름.\n겸손하고 칭찬 많이 해줌.\n진짜 싫어하는 사람 아니면 잘 안까고 남한테 관심도 별로 없음.\n성격 온화, 하자고 하면 거의 다 해줌.\n계획 세우는 거 좋아하고 메모하고 기억해둠.\n사람들한테 나에 대한 어필 잘 안함.\n나서는 거 싫어하는데 관심 받는건 좋음.\n사람들과 어울리는거 좋아하는데 그만큼 혼자 노는것도 좋음.\n되게 쓸데없는 것까지 신경씀 근데 또 쿨함.\n애인 사귀면 오래감.'
    },
    {
        name : 'ISTP',
        desc : '만사가 귀찮음.무미건조, 낯가림 근데 친해지면 말 많고 장난도 잘 침.새로운 사람 만나는거 싫어함.남한테 관심 없고 내 얘기도 잘 안함.혼자만의 문화생활 즐김.쓸데없는 소비 엄청함.노력절약형, 효율적인거 개 좋아함.망상 잘 함.내가 제일 잘난줄 암.카톡 할말없으면 읽씹, 대화 이어가기 안함.주류에 속하기 싫어함.자기자랑 꼴뵈기 싫음.이것저것 공부하고 싶은게 너무 많음 근데 끝을 못봄.미루고 미루다 발등에 불떨어져도 안하다가 발등 타들어가면 그제야 함.기계조작 잘하고 재미있어함.하나에 꽂히면 끝장을 봐야함.내가 질릴때까지 관심있고 하고싶은것만 함.하기싫은건 죽어도 안함.내가 맡은바는 다 함.위계질서 개싫어하고 내가 하는거 간섭 받는거 싫어함.친하면 활발한데 내사람 아니면 입 꾹다물고 있음.관종이라 관심받는건 좋은데 시끄러운건 싫어함.누가 내 욕해도 별로 신경 안씀.관찰력 뛰어남, 멀티 안됨, 호불호 강함.공감능력 부족.티안내려고 노력은 하는데 그래도 티남.엠비티아, 사주, 타로 관심많음.청소 안함.'
    },
    {
        name : 'ISTJ',
        desc : 'ISTJ 원리원칙적, 계획적. \n 여행가면 나서서 계획 세움. 즉흥적인거 싫어함 약속 어기는거 싫어함.\n 협동하고 이런거 싫어함.\n 그냥 나혼자 하는게 젤 편하고 젤 빠름.\n 누가 도와준다고 해도 혼자 할 수 있음 혼자 함.\n 내 일이랑 의견에 간섭받는 거 싫어함.\n 남한테 관심 별로 없는 편.\n 내 얘기 하는것도 싫고 남 얘기 들어주는 것도 힘듦 내가 왜 듣고있어야 하는지 모르겠음.\n 책임감 많음.\n 가끔 공감능력 부족한 거 같다는 소리 들음.\n 딱딱하단 소리 자주 들음.\n 철벽 잘 침.\n 프젝같은거 할 때 이야기 딴데로 새는거 개 싫어함 시작했으면 목표한 거 끝내야함.\n 시작했으면 목표한거 끝내야함.'
    },
    {
        name : 'ENFP',
        desc : '정신산만함, 생각 많음, 고집 셈.\n일머리 있음.\n흥미있고 관심있는건 열정적 그러나 관심 없는건 별로 알고 싶어하지도 않음.\n매번 나서서 무얼 하진 않는데 아무도 안나서면 답답해서 나서는 스타일.\n낯을 좀 가리는데 풀리면 금방 친해지고 말도 많아짐.\n얘기하는 거 좋아함.\n무언가에 쉽게 몰두했다 쉽게 그만둠.\n남 얘기에 리액션을 잘 해줘서 고민상담 하는 애들 많음.\n거짓말 잘 못해서 입에 발린 말 잘 못함.\n하루에 행복한 일 하나씩 정해놓고 설레함.\n친구들이랑 얘기하는거 좋아함.\n새롭게 친구 사귀는 거 좋아함.\n감정기복 심함.\n감정 얼굴에 다 드러나는 편.\n무계획, 즉흥적인 편.\n내가 하고싶은거 꼭 해야함.\n저금 잘 안함.'
    },
    {
        name : 'ENFJ',
        desc : '시끄러움.핵인싸 되고싶어함.\n사람들을 이끄는 것에 타고난 기질이 있고 좋아하기도 함.\n사람을 되게 좋아함.\n상대방도 본인을 신뢰한다는 느낌을 받으면 살아있음을 느낌.\n단순함.\n멘탈 강함.\n무리에 속해있는 것도 좋아하지만 마이웨이 기질 약간 있음.\n여가시간 혼자 보내는거 좋아함.\n많은 사람들의 신뢰를 받는 성격.\n사람들한테 잘 맞춰주는 성격.\n객관적, 직관적 내가 스스로를 잘 앎 일에 흥미가 많은 사람이라 꿈이 여러개.\n센스있고 눈치가 빠름.\n계획짜는거 좋아함.\n남들 눈치봄 남들 신경쓰고 잘해주려하는데 그만큼 상처도 받음.'
    },
    {
        name : 'ENTP',
        desc : '혼자서 돌아다니는게 제일 편함.\n독립심 강함.\n탐욕적, 자존심, 고집 셈, 냉철함.\n겉으론 인싸 속모습은 아싸.\n나한테 잘해주는 사람은 두 배로 잘해주는데 나한테 못해주면 걍 1도 없음.\n밖에 놀러가면 진짜 잘 노는데 집 안에 있는것도 좋음.\n변덕 심함, 자기애 강함.\n직설적이고 솔직하게 내 맘을 표현하는 것에 거리낌이 없음.\n다른 사람들 일에 관심없고 다른 사람들이 나를 어떻게 생각하는지도 별 관심없음.\n지나간 일에 후회가 없음, 그래서 힘든 일 있어도 빨리 털어내는 편.\n자기합리화랑 포기 존나 잘하고 뒷일 생각 안하고 지금 내가 하고싶은대로 다 하면서 삼.\n감정기복 심함, 남들한테 기분 바뀌는거 다 티냄.\n사람한테 가장 힐링받고 사람한테 가장 스트레스 받음.\n좋아하는 사람 싫어하는 사람 명확히 구분됨.\n뒷심부족.\n혼자 있는거 좋아하는데 외로움 탐.\n뭐 하나에 꽂히면 그것만 함 질리면 아예안함.\n정해진 틀에 갇힌 생활 못함, 반복되는 일 매우 싫어함.\n잘못된거 잘못됐다고 말해야함.\n이기적으로 사는데 이기적인거 안싫어함.\n다방면에 적당한 재능, 근데 다 잘하는데 엄청 잘하진 않음.\n과정보다 결과 중요.\n사람들과 지내는거 좋아하고 친화력 좋고 외향적인데 혼자만의 시간도 필요함.\n손재주 있음.'
    },
    {
        name : 'ENTJ',
        desc : '팀플하면 결국 총대매고 내가 함.\n누구한테 의존하거나 의지하는 스타일 아님.\n오직 세상에 믿을 사람은 나 하나.\n열등감 느낀적 극히 드뭄.\n피해 주는거, 피해 받는거 싫어하고 남 일에 노관심.\n남이 이래라 저래라 하는거 싫어하고 냉철해질땐 끝도 없이 냉철해짐.\n성격 불도저 같은 경향.\n자기애 강함.\n감정적 공감 안됨.\n내 일은 내 일 니 일은 니 일.\n친구들이 하소연해도 공감이 아니라 해결책 찾아줌.\n새로운 사람 만나는 거 좋아하지만 인간과 깊은 관계맺는건 별로 안좋아함.\n머릿속에서 시뮬레이션 다 해보고 해결책 찾아가는 쪽.\n현실적, 논리적 근데 혼자있을 땐 상상력 개오져짐.\n사람많을 땐 프로페셔널한 정상인, 혼자있을 땐 몽상가.'
    },
    {
        name : 'ESFP',
        desc : '성격 매우 급함.\n우주최강오지랖.\n생각없이 잘삼.\n아무리 걱정되는 일 있어도 좀만 지나면 무생각.\n하고싶다고 생각한거 다 해야됨 근데 하기싫은건 끝까지 미룸.\n고집 셈.\n혼자 있으면 지루해서 뭔갈 계속 하고 있어햐 함.\n모임장소에서 침묵 흐르는거 제일 싫어함.\n사람의 단점보단 장점을 보려하고 싸움보단 평화가 좋음.\n사교성 좋음.\n자존감 높음.\n모든게 내 위주.\n사람 너무 좋고 어울리는 거 좋은데 집밖에 나가기 귀찮음.'
    },
    {
        name : 'ESFJ',
        desc : '생각보다 철저함.\n혼자 계획 세우고 그 계획 틀어지는 거 싫어함.\n술자리 좋아함.\n남 눈치 많이 봄.\n책 읽고 영화보는거 좋아함.\n상담, 고민 들어주는 거 잘함.\n친구, 가족 내 주변 인물들 다 챙김.\n인간관계에서 상처받아도 그 사람 배려한다고 얘기 못함.\n어디 나가면 어색한거 못참고 먼저 말 검.'
    },
    {
        name : 'ESTP',
        desc : '외로움 잘 탐.\n손재주 좋음.\n리더쉽 있음.\n표현을 많이 함.\n어른들이 좋아함.\n밖에서 사람 만나는거 좋아하지만 게을러서 나가기까지가 싫음.\n하고싶은거 다 해야됨 못하면 혼자서 부들부들하다가 곧 까먹음.\n걍 대충살고 눈치도 안봄.\n스트레스도 잘 안받음 근데 그렇게 적극적인 편도 아님 걍 사는대로 삼.\n공감능력 조금 부족.\n남한테 관심 없고 생각하는것도 귀찮음.\n모임에서 어느새 내가 분위기 주도하고 있음.\n근자감 쩔음.'
    },
    {
        name : 'ESTJ',
        desc : '고집 셈, 현실적, 이성적, 직설적.\n호불호 확실.\n사람 많은거 싫어함.\n리더 맡는거 싫어하는데 막상 하면 잘함.\n나가서 노는것보단 이것저것 배우는게 좋음.\n외로움 별로 안탐.\n싸우는 거 싫어하지만 싸워서 지는거 싫어함.\n일처리 못하는 거 세상에서 제일 싫음.\n시간약속 어기는 거 싫고 즉흥적인거 싫음.\n남에게 관심없고 오로지 나한테만 집중.\n목표 설정해놓고 그 목표 이룰때까지 한 우물만 팜.\n사람들이 아는 내 성격이랑 혼자 있을 때랑 조금 다름.\n모든게 제자리에 있어야 하고 내 계획이 절대 틀어지면 안됨.\n뭐든 확실한 게 좋음.\n리더역할 주도적으로 자주 함.\n누가 일 못하는 거 못 보고 차라리 그럴바에 내가 두세배로 일 다 해놓음.\n공감능력 부족.'
    }
]