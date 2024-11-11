export default function Tabs({children,ButtonContainer,buttons})
{
 return (
    <>
     {/* <menu>{buttons}</menu> */}
     <ButtonContainer>{buttons}</ButtonContainer>
     {children}
    </>
 )
}