import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA9iaphlPcKn--QaQqnPNwh2UaD7Ahz6bw",
  authDomain: "fir-auth-fd12b.firebaseapp.com",
  projectId: "fir-auth-fd12b",
  storageBucket: "fir-auth-fd12b.appspot.com",
  messagingSenderId: "143801488810",
  appId: "1:143801488810:web:862a7d6b137072b1c107d3"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app