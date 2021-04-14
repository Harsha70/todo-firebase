import "./App.css";
import Todos from "./Todos";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import firebase from "firebase";
import SignIn from "./components/signIn/Signin"
import Signup from "./components/signup/Signup"

const sighInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignInfunction = () => (
  <main>
    <button onClick={sighInWithGoogle}>Sign In With Google</button>
    <SignIn />
    <Signup />
  </main>
);

const App = () => {
  const [user] = useAuthState(auth);
  console.log("userin app.js",user)

  return user ? <Todos /> : <SignInfunction />;

};

export default App;
