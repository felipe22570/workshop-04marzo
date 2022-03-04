import styled from "styled-components";

export const ContLogin = styled.div`
   display: flex;
   flex-direction: column;
   flex: auto;
   align-items: center;

   width: 50%;
   margin: auto auto auto auto;
  
   gap: 40px;
   padding: 50px;

   form {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
         width: 100%;
         height: 7vh;
         border: 1px solid #ccc;
         border-radius: 5px ;
      }

      button {
         border: none;
         border-radius: 5px;
         background-color: blanchedalmond;
         color: black;
         font-weight: bold ;
         width: 100%;
         height: 8vh;
         cursor: pointer;
         box-shadow: 5px 3px 6px gainsboro;
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
   border-style: none ;
   background-color: whitesmoke ;
   box-shadow: 5px 3px 6px gainsboro;
   img {
      width: 2rem;
   }
`;
