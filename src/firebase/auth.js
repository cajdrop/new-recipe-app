import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const createNewUser = async (data) => {
  return createUserWithEmailAndPassword(auth, data.email, data.password);
};

export const logIn = async (data) => {
  return signInWithEmailAndPassword(auth, data.email, data.password);
};

export const signOut = () => {
  return auth.signOut();
};
