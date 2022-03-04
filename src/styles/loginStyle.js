import styled from "styled-components";

export const ContLogin = styled.div`
   display: flex;
   flex-direction: column;
   flex: auto;
   align-items: center;

   width: 50%;
   margin: auto auto auto auto;
   border: 1px solid black;
   gap: 40px;
   padding: 50px;

   form {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
         width: 100%;
         height: 5vh;
      }

      button {
         border: none;
         border-radius: 5px;
         background-color: teal;
         color: white;
         width: 100%;
         height: 8vh;
         cursor: pointer;
      }
   }
`;

export const ButtonGoogle = styled.button`
   width: 50%;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   border-radius: 5px;
   cursor: pointer;

   img {
      width: 2rem;
   }
`;
