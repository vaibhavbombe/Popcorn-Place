// import React from 'react'

// const index = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default index

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();