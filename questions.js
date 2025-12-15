<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Project Management Quiz</title>

<style>
:root {
  --bg: #f5f5f5;
  --card: #ffffff;
  --text: #222;
  --green: #4caf50;
  --red: #f44336;
  --grey: #cccccc;
}

body {
  margin: 0;
  padding: 10px;
  font-family: Arial, sans-serif;
  background: var(--bg);
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 480px;
  background: var(--card);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

#counter {
  font-size: 14px;
  margin-bottom: 10px;
}

.question {
  font-size: 18px;
  margin-bottom: 10px;
}

#qImage {
  max-width: 100%;
  border-radius: 12px;
  margin: 10px 0;
  display: none;
}

.options button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
}

.options button.correct {
  background: var(--green);
  color: #fff;
}

.options button.wrong {
  background: var(--red);
  color: #fff;
}

.options button.disabled {
  background: var(--grey);
  color: #555;
}

#nextBtn {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  background: #2196f3;
  color: white;
  cursor: pointer;
}
</style>
</head>

<body>

<div class="container">
  <div id="counter"></div>
  <div class="question" id="question"></div>
  <img id="qImage">
  <div class="options" id="options"></div>
  <button id="nextBtn" onclick="nextQuestion()" disabled>Next Question</button>
</div>

<!-- MUST be loaded FIRST -->
<script src="questions.js"></script>

<script>
let current = 0;
let score = 0;

/* HARD FAIL IF NOT LOADED */
if (!window.questions || !questions.length) {
  alert("questions.js NOT loaded or empty");
}

/* LOAD QUESTION */
function loadQuestion() {
  const q = questions[current];

  document.getElementById("counter").innerText =
    `Question ${current + 1} / ${questions.length}`;

  document.getElementById("question").innerText = q.q;

  const img = document.getElementById("qImage");
  if (q.img) {
    img.src = q.img;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, opt);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("nextBtn").disabled = true;
}

/* CHECK ANSWER */
function checkAnswer(clickedBtn, selected) {
  const q = questions[current];
  const buttons = document.querySelectorAll(".options button");

  buttons.forEach(btn => {
    btn.disabled = true;

    if (btn.innerText === q.answer) {
      btn.classList.add("correct");
    } else if (btn === clickedBtn) {
      btn.classList.add("wrong");
    } else {
      btn.classList.add("disabled");
    }
  });

  if (selected === q.answer) score++;

  document.getElementById("nextBtn").disabled = false;
}

/* NEXT */
function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.body.innerHTML = `
      <div style="text-align:center">
        <h2>Quiz Finished</h2>
        <p>Score: ${score} / ${questions.length}</p>
      </div>
    `;
  }
}

loadQuestion();
</script>

</body>
</html>
