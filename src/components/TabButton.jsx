export default function TabButton(props)
{
    return (<li><button className = {props.selected ? "active": ""} onClick = {props.onSelect}>{props.children}</button></li>);
}