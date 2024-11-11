import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept"
export default function CoreConcepts(){
    return (<section id ="core-concepts">
        <ul>
          {/* {...item} means spreads every key value as props */}
          {/* map reduces the num of lines , when we have an array , removes boilerplate code */}
          { CORE_CONCEPTS.map((item)=>(<CoreConcept key = {item.title} {...item}/>)) }
          {/* <CoreConcept title = "Components" image = {componentImage}  description = "The Core Building Block Of UI"/>
          <CoreConcept title = {CORE_CONCEPTS[1].title} image = {CORE_CONCEPTS[1].image}  description = {CORE_CONCEPTS[1].description}/> */}
          {/* spread operater */}
          {/* <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        </ul>
      </section>)
}