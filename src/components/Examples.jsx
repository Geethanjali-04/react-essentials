import { useState } from "react";
import { EXAMPLES } from "../data"
import TabButton from "./TabButton";
import Tabs from "./Tabs";

export default function Examples(){
    let [counterValue,setCounter] = useState(0);
    let [selectedBtnContent, setSelectedBtnContent] = useState();
    function handleClick(selectedBtnContent){
    // console.log("hello this");
        console.log(selectedBtnContent);
        setSelectedBtnContent(selectedBtnContent);
    }
    const tabContent = !selectedBtnContent 
  ? "Please select the button?" 
  : (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedBtnContent].title}</h3>
        <p>{EXAMPLES[selectedBtnContent].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedBtnContent].code}
          </code>
        </pre>
      </div>
    );

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

  return (<section id="examples">
    {/* setting resuable tabs */}
    <Tabs ButtonContainer = "menu" buttons = {
        <>
            <TabButton selected = {selectedBtnContent === "components"} onSelect = {()=>handleClick("components")}>components</TabButton>
            <TabButton selected = {selectedBtnContent === "jsx"} onSelect = {() =>handleClick("jsx")}>JSX</TabButton>
            <TabButton selected = {selectedBtnContent === "props"} onSelect = {() => handleClick("props")}>Props</TabButton>
            <TabButton selected = {selectedBtnContent === "state"} onSelect = {() => handleClick("state")}>State</TabButton>
            <button onClick = {()=>counter("increment")}>increment</button>
            <button onClick = { ()=>counter("decrement")}>decrement</button>
            {counterValue}
        </>
    }>
      {tabContent}
    </Tabs>


    {/* <menu>
    <TabButton selected = {selectedBtnContent === "components"} onSelect = {()=>handleClick("components")}>components</TabButton>
      <TabButton selected = {selectedBtnContent === "jsx"} onSelect = {() =>handleClick("jsx")}>JSX</TabButton>
      <TabButton selected = {selectedBtnContent === "props"} onSelect = {() => handleClick("props")}>Props</TabButton>
      <TabButton selected = {selectedBtnContent === "state"} onSelect = {() => handleClick("state")}>State</TabButton>
      <button onClick = {()=>counter("increment")}>increment</button>
      <button onClick = { ()=>counter("decrement")}>decrement</button>
      {counterValue}
    </menu>
    {tabContent} */}

  </section>)
}