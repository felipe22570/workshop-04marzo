import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { typesLogin } from "../types/types";

export const registroEmailPasswordNombre = (email, password, name) => {
   return (dispatch) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(async ({ user }) => {
            await updateProfile(auth.currentUser, { displayName: name });

            dispatch(registerSincrono(user.email, user.uid, user.displayName));
         })
         .catch((e) => {
            //console.log(e);
         });
   };
};

export const registerSincrono = (email, password, name) => {
   return {
      type: typesLogin.register,
      payload: {
         email,
         password,
         name,
      },
   };
};
