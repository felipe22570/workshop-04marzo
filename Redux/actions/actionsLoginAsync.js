import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { google } from "../../src/firebase/firebaseConfig";

export const loginEmailPassword = (email, password) => {
   return (dispatch) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            //  dispatch(loginSincrono(user.uid, user.displayName));
            console.log("Bienvenid@");
         })
         .catch((e) => {
            console.log("El usuario no existe");
         });
   };
};

export const loginGoogle = () => {
   return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, google)
         .then(({ user }) => {
            //  dispatch(loginSincrono(user.uid, user.displayName));
            console.log(`Bienvenid@ ${user.displayName}`);
         })
         .catch((e) => {
            console.log(e);
         });
   };
};
