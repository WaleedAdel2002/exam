import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const message = document.getElementById("message");

// تسجيل الدخول
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            message.innerText = "تم تسجيل الدخول بنجاح!";
            window.location.href = "exam.html"; // الانتقال إلى صفحة الامتحان بعد النجاح
        })
        .catch(error => {
            message.innerText = "خطأ: " + error.message;
        });
}

// إنشاء حساب جديد
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            message.innerText = "تم إنشاء الحساب بنجاح!";
        })
        .catch(error => {
            message.innerText = "خطأ: " + error.message;
        });
}
