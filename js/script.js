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
  const progress = (index / questions.length) * 100;
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = `${progress}%`;

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
    descriptionDiv.classList.add('description');
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
