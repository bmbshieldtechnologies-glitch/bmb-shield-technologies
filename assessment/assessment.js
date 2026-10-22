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
    `;

    container.appendChild(div);
  });
}

loadQuestions();
