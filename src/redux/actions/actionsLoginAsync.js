import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { google } from "../../firebase/firebaseConfig";
import { typesLogin } from "../types/types";

export const loginEmailPassword = (email, password) => {
   return (dispatch) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            dispatch(loginSincrono(user.uid, user.displayName));
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
            dispatch(loginSincrono(user.uid, user.displayName));
            console.log(`Bienvenid@ ${user.displayName}`);
         })
         .catch((e) => {
            console.log(e);
         });
   };
};

export const loginSincrono = (id, displayname) => {
   return {
      type: typesLogin.login,
      payload: {
         id,
         displayname,
      },
   };
};

export const logoutAsync = () => {
   return (dispatch) => {
      const auth = getAuth();
      signOut(auth)
         .then((user) => {
            dispatch(logoutSincronico());
         })
         .catch((error) => {
            console.log(error);
         });
   };
};

export const logoutSincronico = () => {
   return {
      type: typesLogin.logout,
   };
};
