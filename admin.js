// admin.js - إدارة الأسئلة في Firebase
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// إضافة سؤال إلى قاعدة البيانات
async function addQuestion() {
    const question = document.getElementById("question").value;
    const option1 = document.getElementById("option1").value;
    const option2 = document.getElementById("option2").value;
    const option3 = document.getElementById("option3").value;
    const option4 = document.getElementById("option4").value;
    const correct = document.getElementById("correct").value;
    
    if (!question || !option1 || !option2 || !option3 || !option4 || !correct) {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    try {
        await addDoc(collection(db, "questions"), {
            question,
            options: [option1, option2, option3, option4],
            correct
        });
        alert("تمت إضافة السؤال بنجاح!");
        displayQuestions();
    } catch (error) {
        console.error("خطأ أثناء الإضافة: ", error);
    }
}

// عرض الأسئلة من قاعدة البيانات
async function displayQuestions() {
    const questionList = document.getElementById("questionList");
    questionList.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "questions"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const div = document.createElement("div");
        div.innerHTML = `<strong>${data.question}</strong><br>
                        1) ${data.options[0]}<br>
                        2) ${data.options[1]}<br>
                        3) ${data.options[2]}<br>
                        4) ${data.options[3]}<br>
                        <hr>`;
        questionList.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", displayQuestions);