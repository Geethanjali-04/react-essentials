import { CORE_CONCEPTS } from "./data";
import Header from "../src/components/Header/Header"
import CoreConcept from "./components/CoreConcept";
import componentImage from "./assets/components.png"
import TabButton from "./components/TabButton";
import  {EXAMPLES} from "./data";
import { useState } from "react";
//  either use destructuring and directly use it eg: coreConcepts({image,title,description})
// props are special attributes for the custom component which is used to pass data from parent component to child. 

function App() {
  let [counterValue,setCounter] = useState(0);
  let [selectedBtnContent, setSelectedBtnContent] = useState();

  function handleClick(selectedBtnContent){
   // console.log("hello this");
    console.log(selectedBtnContent);
    setSelectedBtnContent(selectedBtnContent);
  }

  function counter(countType){
    console.log(countType);
    if (countType == "increment")
    {
      setCounter((prevValue)=>prevValue+1);
    }
    else{
      if(counterValue != 0)
      {
        setCounter((prevValue)=>prevValue-1);
      }
    }
  }
  // console.log(EXAMPLES[0]);
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id ="core-concepts">
        <ul>
          {/* {...item} means spreads every key value as props */}
          {/* map reduces the num of lines , when we have an array , removes boilerplate code */}
          { CORE_CONCEPTS.map((item)=>(<CoreConcept key = {item.title} {...item}/>)) }
          <CoreConcept title = "Components" image = {componentImage}  description = "The Core Building Block Of UI"/>
          <CoreConcept title = {CORE_CONCEPTS[1].title} image = {CORE_CONCEPTS[1].image}  description = {CORE_CONCEPTS[1].description}/>
          {/* spread operater */}
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
      <section id="examples">
        <menu>
          <TabButton selected = {selectedBtnContent === "components"} onSelect = {()=>handleClick("components")}>components</TabButton>
          <TabButton selected = {selectedBtnContent === "jsx"} onSelect = {() =>handleClick("jsx")}>JSX</TabButton>
          <TabButton selected = {selectedBtnContent === "props"} onSelect = {() => handleClick("props")}>Props</TabButton>
          <TabButton selected = {selectedBtnContent === "state"} onSelect = {() => handleClick("state")}>State</TabButton>
          <button onClick = {()=>counter("increment")}>increment</button>
          <button onClick = { ()=>counter("decrement")}>decrement</button>
          {counterValue}
        </menu>
        { !selectedBtnContent && "Please select the button?"}
        {  selectedBtnContent && (<div id="tab-content">
          <h3>{EXAMPLES[selectedBtnContent].title}</h3>
          <p>{EXAMPLES[selectedBtnContent].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedBtnContent].code}
            </code>
          </pre>
        </div>)}
      </section>
      </main>
     
    </div>
  
  );
}

export default App;
