import Header from "../src/components/Header/Header"
import { Fragment } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
//  either use destructuring and directly use it eg: coreConcepts({image,title,description})
// props are special attributes for the custom component which is used to pass data from parent component to child. 

function App() {
  // console.log(EXAMPLES[0]);
  return (
    <Fragment>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts/>
        <Examples/>
      </main>
     
    </Fragment>
  );
}

export default App;
