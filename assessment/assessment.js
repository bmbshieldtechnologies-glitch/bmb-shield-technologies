import {
  db,
  collection,
  getDocs
} from "./firebase.js";

const container =
document.getElementById("questions");

async function loadQuestions(){

  const snapshot =
  await getDocs(
      collection(db,"questions")
  );

  snapshot.forEach((doc)=>{

    const q = doc.data();

    const div =
    document.createElement("div");

    div.className = "question";

    div.innerHTML = `
<h3>${q.question}</h3>
<p>Type: ${q.type}</p>

${
q.type === "mcq"
?
`
<label>
<input type="radio" name="${doc.id}">
${q.option1}
</label><br>

<label>
<input type="radio" name="${doc.id}">
${q.option2}
</label><br>

<label>
<input type="radio" name="${doc.id}">
${q.option3}
</label><br>

<label>
<input type="radio" name="${doc.id}">
${q.option4}
</label>
`
:
q.type === "theory"
?
`
<textarea rows="5"
placeholder="Write your answer"></textarea>
`
:
`
<textarea rows="10"
placeholder="Write your code"></textarea>
`
}
`;

    container.appendChild(div);
  });
}

loadQuestions();
