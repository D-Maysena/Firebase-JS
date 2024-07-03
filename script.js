// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl7DBZN0xtfHVaRvnMAUgoFhYOs4Z-8bQ",
  authDomain: "cardiocare-ee23a.firebaseapp.com",
  projectId: "cardiocare-ee23a",
  storageBucket: "cardiocare-ee23a.appspot.com",
  messagingSenderId: "157429465314",
  appId: "1:157429465314:web:6b2975c59caaa3672bdebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addUser() {
  try {
    const docRef = await addDoc(collection(db, "Product"), {
      first: "YO",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

addUser();

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

console.log(querySnapshot)