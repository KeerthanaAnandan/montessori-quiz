let questions = [
  {
    id: 1,
    question:
      "How well do you agree with the following “Children learn best through hands-on experience, real-world application, and problem-solving”?",

    options: ["Agree", "Maybe", "Do not agree"],
  },
  {
    id: 2,
    question:
      "Do you think schools should be a joyful experience for children?",

    options: ["Yes", "Somewhat", "Sure, but the focus is academics"],
  },
  {
    id: 3,
    question:
      "Do you agree that children learn more when they are given constant lesson plans?",

    options: ["Not at all", "Maybe ", "Yes, that’s true"],
  },
  {
    id: 4,
    question: "What do you believe in most?",

    options: [
      "A competitive classroom environment stifles creativity.",
      "Competitions (including exams) are not inherently evil",
      "Competition prepares students for the real world.",
    ],
  },
  {
    id: 5,
    question:
      "Choose one of the following sentences that best describes your beliefs.",

    options: [
      "Parents want an engaging school that will stimulate and encourage their child’s curiosity, creativity, and imagination.",
      "Parents may not be always available for the child and need someone who is.",
      "Parents should not have to play a major role in the formal education of the child, that’s the school's job.",
    ],
  },
  {
    id: 6,
    question:
      "Do you want your child to have the freedom to select their own work and develop their own personal interests?",

    options: ["Absolutely", "I think so", "Not a good idea "],
  },
  {
    id: 7,
    question:
      "Do you want to give your child the opportunity to be mentored and learn from older and younger peers?",

    options: ["Yes ", "Not sure", "No"],
  },
  {
    id: 8,
    question:
      "Do you want to play an active role in your child’s education, such as using Montessori practices at home?",

    options: [
      "I would love to do that",
      "Maybe, I’m very interested ",
      "I don’t have much extra time",
    ],
  },
  {
    id: 9,
    question: "You want your child to:",

    options: [
      "Learn at their own pace and be challenged according to their unique ability",
      "Learn in a good environment ",
      "Learn according to a curriculum based upon their age",
    ],
  },
  {
    id: 10,
    question: "When considering education, I:",

    options: [
      "Am open to learning about all methods and want to find one that is the best match for my child",
      "Just want my child to receive the best education they can",
      "Believe traditional methods are the best option",
    ],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 10;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;
// let fourthPoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  // for (let i = 0; i < questions.length; i++) {

  // if (user_answer == questions[0].options[0]) {
  //   secondPoints += 1;
  //   fourthPoints += 1;
  // }
  // if (user_answer == questions[0].options[1]) {
  //   firstPoints += 1;
  // }
  // if (user_answer == questions[0].options[2]) {
  //   thirdPoints += 1;
  // }

  // if (user_answer == questions[1].options[0]) {
  //   firstPoints += 1;
  //   fourthPoints += 1;
  // }
  // if (user_answer == questions[1].options[1]) {
  //   secondPoints += 1;
  // }
  // if (user_answer == questions[1].options[2]) {
  //   thirdPoints += 1;
  // }

  // }
  for (let i = 0; i < questions.length; i++) {
    if (user_answer == questions[i].options[0]) {
      firstPoints += 1;
    }
  }
  for (let i = 0; i < questions.length; i++) {
    if (user_answer == questions[i].options[1]) {
      secondPoints += 1;
    }
  }
  for (let i = 0; i < questions.length; i++) {
    if (user_answer == questions[i].options[2]) {
      thirdPoints += 1;
    }
  }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[3]) {
  //     //console.log("hana")
  //     fourthPoints += 1;
  //   }
  // }

  if (firstPoints > secondPoints && firstPoints > thirdPoints) {
    sessionStorage.setItem("user_type", "Montessori");
  }
  // secondPoints
  else if (secondPoints > firstPoints && secondPoints > thirdPoints) {
    sessionStorage.setItem("user_type", "Neutral");
  }
  //thirdPoints
  else if (thirdPoints > secondPoints && thirdPoints > firstPoints) {
    sessionStorage.setItem("user_type", "Not ready");
  }
  //fourthPoints
  // else if (
  //   fourthPoints > secondPoints &&
  //   fourthPoints > thirdPoints &&
  //   fourthPoints > firstPoints
  // ) {
  //   sessionStorage.setItem("user_type", "Hourglass");
  // }
  //firstPoints === secondPoints
  else if (firstPoints == secondPoints && firstPoints > thirdPoints) {
    sessionStorage.setItem("user_type", "Montessori");
  }
  //secondPoints == thirdPoints
  else if (secondPoints == thirdPoints && secondPoints > firstPoints) {
    sessionStorage.setItem("user_type", "Neutral");
  }
  //thirdPoints == firstPoints
  else if (thirdPoints == firstPoints && thirdPoints > secondPoints) {
    sessionStorage.setItem("user_type", "Neutral");
  } else {
    sessionStorage.setItem("user_type", "Neutral");
  }

  // let user_result = user_answer;
  // sessionStorage.setItem("user_result", user_result);
  // sessionStorage.setItem("firstPoints", firstPoints);
  // sessionStorage.setItem("secondPoints", secondPoints);
  // sessionStorage.setItem("third", thirdPoints);
  // sessionStorage.setItem("fourth", fourthPoints);
  sessionStorage.setItem("firstPoints", firstPoints);
  sessionStorage.setItem("secondPoints", secondPoints);
  sessionStorage.setItem("thirdPoints", thirdPoints);

  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${
    (question_count / Max_Questions) * 100 + 50
  }%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third] = questions[count].options;
  ///////no of questions

  question.innerHTML = `
  <p class="iamquestion"> ${questions[count].question}</p>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
 
 
</ul> 
  `;

  /* question.innerHTML = questions[question_count].options.map((single) => {
    (
    `<li><span class="option">${single}</span></li>`
    )
  }) */

  //   if(question_count == 11 ){
  //     let [first, second , third , fourth , fifth] = questions[count].options;
  //     question.innerHTML = `
  //   <p class="iamquestion"> ${questions[count].question}</p>
  //    <ul class="option_group">
  //   <li><span class="option">${first}</span></li>
  //   <li ><span class="option">${second}</span></li>
  //   <li ><span class="option">${third}</span></li>
  //   <li ><span class="option">${fourth}</span></li>
  //   <li ><span class="option">${fifth}</span></li>

  // </ul>
  //   `;
  //   }

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
