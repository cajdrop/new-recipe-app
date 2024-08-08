import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9TQ5TvdWmQ68kmEkvBg48vj1aQQb2oFE",
  authDomain: "new-recipe-app-87044.firebaseapp.com",
  databaseURL:
    "https://new-recipe-app-87044-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "new-recipe-app-87044",
  storageBucket: "new-recipe-app-87044.appspot.com",
  messagingSenderId: "124948106601",
  appId: "1:124948106601:web:db1ee8fb25eaae748881f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
