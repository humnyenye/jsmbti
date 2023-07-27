const questions = [
  {
    question: "Q1.게임을 플레이 할 때. 나는",
    choices: [
      { text: "✔ 친구들과 함께 하는 게 좋아", type: "E" },
      { text: "✔ 혼자서 조용히 게임에 몰두하는게 좋아", type: "I" }
    ]
  },
  {
    question: "Q2.친구가 내가 하는 게임에 대해서 물어본다. 나는",
    choices: [
      { text: "✔ 스토리, 평가 등 객관적으로 어떤 게임인지 설명해준다", type: "S" },
      { text: "✔ 내가 플레이 했을 때 어땠는지, 내가 느낀 점에 대해 설명해준다", type: "N" }
    ]
  },
  {
    question: "Q3. 내일의 일정이 있는데 벌써 자러갈 시간이야. 나는",
    choices: [
      { text: "✔ 아무리 재미있어도 내일을 위해 자러 가야해", type: "T" },
      { text: "✔ 내일은 내일의 내가 책임진다! 오늘은 일단 즐겨야 해", type: "F" }
    ]
  },
  {
    question: "Q4. 재미있어 보이는 게임을 발견했어. 나는",
    choices: [
      { text: "✔ 평점, 리뷰, 후기까지! 꼼꼼히 검색해 본 뒤 구매를 결정한다", type: "J" },
      { text: "✔ 일단 재미있어 보면 사야지!", type: "P" }
    ]
  },
  {
    question: "Q5. 과금 요소가 있는 게임이다. 돈을 써야한다면 나는",
    choices: [
      { text: "✔ 예산을 정하고, 예산을 넘어선다면 아무리 좋아보여도 사지 않아", type: "J" },
      { text: "✔ 예산? 일단 좋아보이는데 사야하지 않을까?", type: "P" }
    ]
  },
  {
    question: "Q6. 친구가 PC방에 같이 가자고 한다. 나는",
    choices: [
      { text: "✔ 친구들과 같이 가서 다 함께 하는 게임이 좋아", type: "E" },
      { text: "✔ 게임은 혼자 집중해서 할 수 있는게 좋아", type: "I" }
    ]
  },
  {
    question: "Q7. 게임을 플레이 할 시간을 정할때, 나는",
    choices: [
      { text: "✔ 하루 일과가 다 끝난 뒤, 계획한 여가 시간에 즐겨야 한다", type: "T" },
      { text: "✔ 정해진 시간 보다는 내가 하고 싶은 때 하는 게 가장 즐겁다", type: "F" }
    ]
  },
  {
    question: "Q8. 팀 게임 도중 팀원이 트롤링을 한다면, 나는",
    choices: [
      { text: "✔ 바로 따끔하게 한마디 해준다", type: "S" },
      { text: "✔ 말해 뭐해. 꾹 참다 나와서 차단한다", type: "N" }
    ]
  },
  {
    question: "Q9. 게임 캐릭터를 고를 때, 나는",
    choices: [
      { text: "✔ 성능이 곧 애정. 가장 강력한 캐릭터를 고른다", type: "T" },
      { text: "✔ 애정이 곧 성능. 가장 마음에 드는 캐릭터를 고른다", type: "F" }
    ]
  },
  {
    question: "Q10. 전략 게임을 할때, 나는",
    choices: [
      { text: "✔ 어떤 플레이를 할지 계획적인 플레이 한다", type: "J" },
      { text: "✔ 그때그때 필요한 선택을 상황에 맞춰 유연하게 바꿔가며 플레이 한다", type: "P" }
    ]
  },
  {
    question: "Q11. 요즘 인터넷 방송으로 핫하다는 게임이 있는데, 나는",
    choices: [
      { text: "✔ 직접 플레이하는 것을 즐긴다. 굳이 방송을 챙겨보진 않는다", type: "S" },
      { text: "✔ 게임을 플레이 하는 만큼, 다른 사람의 플레이를 지켜보는 것도 좋아한다", type: "N" }
    ]
  },
  {
    question: "Q12. 게임 내에서 소통이 필요하다면, 나는",
    choices: [
      { text: "✔ 채팅 치고 있을 시간이 없어, 빠르게 음성으로 대화한다", type: "E" },
      { text: "✔ 모르는 사람과 보이스까지? 그냥 채팅이면 충분하다", type: "I" }
    ]
  },
];
const mbtiResults = {
  'ISTJ': {
    imageUrl: "./img/ISTJ.jpg",
    description: "당신은 현실주의자 입니다. 체계적이고 정확하며 책임감이 뛰어난 타입으로, 집중력과 끊기가 높은 타입입니다. 같은 작업을 반복해서 하는 게임이나 사고력을 높이는 퍼즐 게임을 추천드립니다."
  },
  'ISTP': {
    imageUrl: "./img/ISTP.jpg",
    description: "당신은 도전적인 장인 입니다. 이 타입의 사람은 객관적이고 효율을 중시하면서도 역설적으로 호기심이 많고 창의력이 뛰어납니다. 개념만 이해한다면 무엇이든 할 수 있는 자유도가 높은 타이쿤 게임을 추천드립니다."
  },
  'INFJ': {
    imageUrl: "./img/INFJ.jpg",
    description: "당신은 선의의 이상주의자 입니다. 게임 캐릭터와 플레이어간에 긴밀한 유대감을 가질 수 있는, 스토리에 몰입이 가능한 RPG 게임을 추천드립니다."
  },
  'INTJ': {
    imageUrl: "./img/INTJ.jpg",
    description: "당신은 치밀한 전략가 입니다. 매 순간이 선택의 연속인 게임을 추천드립니다."
  },
  'ISFJ': {
    imageUrl: "./img/ISFJ.jpg",
    description: "당신은 주변 사람을 보호하고 헌신하는 수호자 입니다. 정의로운 스토리를 선호하며 다른 사람(NPC)들과의 다양한 상호작용을 즐길 수 있는 게임을 추천드립니다."
  },
  'ISFP': {
    imageUrl: "./img/ISFP.jpg",
    description: "당신은 감각적인 예술가 입니다. 항상 새로운 경험을 추구하고 유연한 사고를 하는 예술가 타입에게는 한계점이 정해지지 않은 자유로운 샌드박스 게임을 추천드립니다."
  },
  'INFP': {
    imageUrl: "./img/INFP.jpg",
    description: "당신은 낭만적인 이타주의자 입니다. 다른 사람과 경쟁하는 게임보다는 자신의 페이스대로 진행 할 수 있는 스토리 게임, 그 중에서도 감성적인 게임을 추천드립니다."
  },
  'INTP': {
    imageUrl: "./img/INTP.jpg",
    description: "당신은 논리적인 혁신가 입니다. 넓은 세상을 다양한 방식으로 탐험할 수 있는 게임을 추천드립니다"
  },
  'ESTJ': {
    imageUrl: "./img/ESTJ.jpg",
    description: "당신은 철저한 경영자 입니다. 이 타입의 사람은 자기관리가 철저하고 의미 없는 시간을 보내는 것을 싫어하기 때문에 현실적으로 자기 관리를 할 수 있는 게임을 추천드립니다."
  },
  'ESFP': {
    imageUrl: "./img/ESFP.jpg",
    description: "당신은 즉흥적이고 에너지 넘치는 연예인 입니다. 이 타입의 사람들은 관심 받는 것을 좋아하고 매 순간의 즐거움을 찾아 주위에 밝은 분위기를 연출해 냅니다. 다른 사람들과 함께 즐길 수 있으며 경쟁보다는 다함께 즐길 수 있는 게임을 추천드립니다."
  },
  'ENFP': {
    imageUrl: "./img/ENFP.jpg",
    description: "당신은 열정적인 활동가입니다. 이 타입의 사람은 다른 사람들과 어울리기 좋아하고 반복되는 활동은 쉽게 질려할 수 있습니다. 늘 다른 사람과 함께하며, 매 경기가 달라지는 게임을 추천드립니다."
  },
  'ENTP': {
    imageUrl: "./img/ENTP.jpg",
    description: "당신은 도전을 즐기는 호기심 많은 사색가입니다. 틀에 박힌 플레이 방식을 거부하고 창의적인 '트롤'을 할 수 있는 게임을 추천 드립니다."
  },
  'ESFJ': {
    imageUrl: "./img/ESFJ.jpg",
    description: "당신은 활발한 사교가 입니다. 인싸 중의 인싸인 이런 타입에게는 유행하는 주류 게임이며 다른 사람과 함께 플레이 할 수 있는 파티 게임을 추천드립니다."
  },
  'ESTP': {
    imageUrl: "./img/ESTP.jpg",
    description: "당신은 위험을 감수하는 사업가 입니다. 직접 경험하고 행동하는 것, 스릴 있고 자극적인 것을 좋아하는 당신에게는 시시각각 위협이 닥쳐오고 액션이 호쾌한 게임을 추천드립니다."
  },
  'ENFJ': {
    imageUrl: "./img/ENFJ.jpg",
    description: "당신은 팀원에게 의욕을 불어넣는 지도자입니다. 사람들을 좋아하고 리더쉽 넘치는 당신은 자신이 주인공이 될 수 있는 팀 게임을 추천드립니다."
  },
  'ENTJ': {
    imageUrl: "./img/ENTJ.jpg",
    description: "당신은 뛰어난 사령관입니다. 목표를 달성하기 위해 팀원을 지휘할 수 있는 게임을 추천드립니다."
  },
};

const form = document.getElementById('mbti-form');
const startPage = document.getElementById("start-page");
const questionPage = document.getElementById("question-page");
const resultPage = document.getElementById("result-page");
let currentQuestionIndex = 0;

function startTest() {
  startPage.style.display = "none";
  questionPage.style.display = "block";
  renderQuestion(currentQuestionIndex);
}

function renderQuestion(index) {
  form.innerHTML = "";
  const q = questions[index];

  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');
  
  const questionTitle = document.createElement('p');
  questionTitle.textContent = q.question;
  questionDiv.appendChild(questionTitle);

  const choicesDiv = document.createElement('div');
  choicesDiv.classList.add('choices');
  
  q.choices.forEach((choice, choiceIndex) => {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.id = `q${index + 1}-choice${choiceIndex + 1}`;
    input.name = `q${index + 1}`;
    input.value = choice.type;

    const span = document.createElement('span');
    span.textContent = choice.text;

    label.appendChild(input);
    label.appendChild(span);
    
    choicesDiv.appendChild(label);
  });

  questionDiv.appendChild(choicesDiv);
  form.appendChild(questionDiv);

  // "다음" 버튼
  if (index < questions.length - 1) {
    const nextBtn = document.createElement('button');
    nextBtn.textContent = "다음";
    nextBtn.addEventListener('click', function(event) {
      //기본동작을 막아줌(답변 선택을 안해서 뜬 alert의 확인을 눌렀을 때 새로고침 되는 현상 막기)
      event.preventDefault(); 
      if (form[`q${index + 1}`].value) {
        renderQuestion(index + 1);
      } else {
        alert("답변을 선택해주세요!");
      }
    });
    form.appendChild(nextBtn);
  } else {
    const submitBtn = document.createElement('button');
    submitBtn.textContent = "제출";
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      calculateResult();
    });
    form.appendChild(submitBtn);
  }
}

function showResultPage(type) {
  questionPage.style.display = "none";
  resultPage.style.display = "block";

  const resultText = document.getElementById('result');
  const mbtiResult = mbtiResults[type];

  if (mbtiResult) {
    // 이미지
    const resultImg = document.createElement('img');
    resultImg.src = mbtiResult.imageUrl;
    resultImg.alt = type + " 이미지";
    resultText.after(resultImg);

    // 설명문
    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = mbtiResult.description;
    resultImg.after(descriptionDiv);

    resultText.textContent =  type;
  } else {
    resultText.textContent = "결과를 찾을 수 없습니다.";
  }
}

function calculateResult() {
  let typeCounts = {E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0};

  questions.forEach((_, index) => {
      let radioInput = form[`q${index + 1}`];
      
      if (radioInput && radioInput.value) {
        let selectedValue = radioInput.value;
        typeCounts[selectedValue]++;
      }
  });

  let resultType = "";
  resultType += typeCounts.E > typeCounts.I ? "E" : "I";
  resultType += typeCounts.N > typeCounts.S ? "N" : "S";
  resultType += typeCounts.T > typeCounts.F ? "T" : "F";
  resultType += typeCounts.J > typeCounts.P ? "J" : "P";

  showResultPage(resultType);
}

function restartTest() {
  resultPage.style.display = "none";
  startPage.style.display = "block";
  currentQuestionIndex = 0;
}

// 초기에 첫 번째 질문 렌더링
renderQuestion(currentQuestionIndex);
