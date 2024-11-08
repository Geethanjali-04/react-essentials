import reactImage from "../../assets/react-core-concepts.png"
import "./Header.css"
const descriptionArr = ["Core", "Fundamental", "crucial"]
function intRandomIndex(length)
{
  return Math.floor(Math.random()*length);
}
export default function Header()
{ 
  // way of outputing dynamic content , we use "{}"
  const description = descriptionArr[intRandomIndex(2)]
 return ( <header>
  <img src={reactImage} alt="Stylized atom" />
  <h1>React Essentials </h1>
  <p>
    {description} React concepts you will need for almost any app you are
    going to build!!
  </p>
</header>);
}