import styled from "styled-components"

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Cormorant+Garamond:ital,wght@1,300&family=Dancing+Script:wght@600&family=MonteCarlo&family=Oswald&family=Satisfy&family=Staatliches&family=Tapestry&family=Water+Brush&display=swap');
background-color: #fff;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 100%;
height: 100vh;
font-family: Acme;
`;

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;
font-family: Acme;
font-size:60px;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 20px 0;
width: 100%;
font-family:Acme;
border-radius:8px;
height:30px;
`;
export const Select = styled.select`
font-family:Acme;
color: gray;
padding-left: 20px;
font-size: 14px;
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 20px 0;
width: 104%;
font-family:Acme;
border-radius:8px;
height:50px;
  @media only screen and (max-width: 780px) {
    width:110%;
  }

  option {
    color: #eee;
    background:#addf9e ;
    display: flex;
    white-space: pre;
    min-height: 50px;
    padding: 0px 2px 1px;
    &:hover {
      background: #000 !important;
    }
  }

`
export const TogglePasswordSignIn = styled.i`
display:block;
position:absolute;
top:430px; 
padding:0;
right:50px;
@media only screen and (max-width: 780px) {
  top:570px;
}
&:hover{
  color: #00fcb6;
  cursor: pointer;
}

`
export const TogglePasswordSignUp = styled.i`
display:block;
position:absolute;
top:640px; 
padding:0;
right:50px;
@media only screen and (max-width: 780px) {
  top:678px;
  height:60px;
}
&:hover{
  color: #00fcb6;
  cursor: pointer;
}
`

export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #addf9e;
   background-color:#addf9e;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   color: #ffffff;
   font-size: 16px;
   font-weight: bold;
   padding: 12px 60px;
   margin-top: 30px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
   &:hover{
    box-shadow: RGB(126, 183, 21) 0px 25px 20px -20px;
    transform: translateY(-7px);
   }
`;
export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right, #b6dc9d, #dbb793);
background: linear-gradient(to right, #b6dc9d, #dbb793);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 20px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.9px;
  margin: 50px 0 50px
`;
export const Errors = styled.p`
font-size:14px;
color : red;
text-align:center;
font-weight: bold;

`