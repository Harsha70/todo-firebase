import "./App.css";
import Todos from "./Todos";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import firebase from "firebase";

const App = () => {

  return <Todos />

};

export default App;
