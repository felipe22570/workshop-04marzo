import React from "react";

import FormularioProduc from "./FormularioProduc";
import Header from "./header";

import List from "./List";

const Principal = () => {
   return (
      <div>
         <Header />
         <FormularioProduc />
         <List />
      </div>
   );
};

export default Principal;
