
import styled from "styled-components";

//HOME PAGE 


export const Landing = styled.div`
display: grid;
  grid-template-columns: 650px 150px;
`
export const LeftSide = styled.div`
padding-top:250px;
`
export const RightSide = styled.div`
padding-left:150px;
margin-left:50%;
`
export const Quote = styled.div`
color:black;
margin-top:-120px;
text-align:left;
margin-left:40px;
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
`
export const JoinusButton = styled.button`
margin-top:40px;
margin-left:180px;
display: inline-block;
outline: 0;
padding:10px;
width:250px;
border:0;
cursor: pointer;
text-decoration: none;
position: relative;
color: #000;
background: #fff;
line-height: 30px;
border-radius: 40px;
font-size: 20px;
font-weight: bold;
box-shadow: rgb(255, 198, 0) -2px -2px 0px 2px, #0000f6 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 0px 2px 7px;
transition: all 0.2s;
&:hover{
    box-shadow: #0000f6 -2px -2px 0px 2px, rgb(255, 198, 0) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 0px 2px 7px;
    transform: scale(1.01);
}

`
export const H= styled.p`
padding-left:60px;
margin-bottom:2px;
font-size:60px;
font-family: 'Lobster', cursive;
`
export const A = styled.p`
margin-top:20px;
font-size:25px;
word-break: break-all;
padding-left:50px;
padding-right:60px;
`
export const ImageHome = styled.img`
width:108vh;
margin-right:130px;
margin-top:40px;
`

// export const ImageHome = styled.img`
// padding:20px;
// margin-left:55%;
// margin-top:100px;
// width:40%;
// `


// export const Background = styled.video`
//   position:fixed; 
//   width: 100%;
//   height: 100%;
//    object-fit: cover;
// `

//NAVBAR
export const CardIcon = styled.div`
margin-right:60px;
margin-top:10px;
display:flex;
`

export const ItemsNumber = styled.p`
background:rgb(255, 198, 0);
border-radius:100%;
margin-bottom:8px;
color:white;
padding:10px;
font-size:10px;
font-weight:bold;
`
//SIGNUP LOGIN PAGE
export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 80%;
height: 85vh;
top:100px;
margin-left:180px;
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
font-size:60px;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin:4px;
width: 100%;
border-radius:8px;
height:30px;
`;
export const Select = styled.select`
color: gray;
padding-left: 20px;
font-size: 14px;
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 20px 0;
width: 104%;
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
top:370px; 
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
top:545px; 
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
   background-color:#0000fe;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   color: #ffffff;
   font-size: 16px;
   font-weight: bold;
   padding: 12px 60px;
   margin-top: 20px;
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
background: -webkit-linear-gradient(to right, #b6dc9d, #299798);
background: linear-gradient(to right, #0000fe, #00aae5);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;

// background:linear-gradient(90deg, #000046 0%, #1cb5e0 100%)
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
`;
export const ErrorsMessages = styled.p`
font-size:14px;
color : red;
text-align:center;
font-weight: bold;
`

//ABOUT US PAGE
export const AboutTitle = styled(Title)`
margin-top:150px;
position:absolute;
color:black;
margin-left:65%;
color:rgb(255, 198, 0);

` 
export const AboutUsImage = styled.img`
margin-top:20px;
width:40%;
height:'auto';
margin-left:60px;
`
export const Head = styled.div`
width:100%;
`


export const Intro = styled.p`
position:absolute;
margin-top:280px;
color:black;
font-size:25px;
margin-left:150px;
font-weight:bold;
margin-left:30%;
padding-right:120px;
padding-left:420px;
text-align:center;

`
export const UnderTitle = styled(Title)`
font-size:40px;
text-align:center;
margin-top:70px;
color:#0a00f7;
`
export const Introduction = styled.p`
text-align:center;
margin-top:50px;
font-size:25px;
margin-left:20%;
margin-right:20%;
`
export const Images = styled.div`
display:flex;
flex-direction:row;
margin-top:60px;
justify-content: space-between;
`
//Image1
export const Image1 = styled.div`
margin-left:10%;
padding-left:40px;
`
export const Team = styled.img`
width:50%;
`
export const Des = styled.h1`
color:#f6a530;
font-size:40px;
`
//Image2
export const Image2 = styled.div`
margin-left:140px;
`
export const Localisation = styled.img`
width:60%;
`
//Image3
export const Image3 = styled.div`

`
export const Activities = styled.img`
width:60%;
`
//History
export const History = styled.div`
background-color:#cce7f8;
width:100%;
padding-bottom:80px;
`
export const ExperienceTitle = styled(UnderTitle)`
padding-top:50px;
`
export const Icons1 = styled.div`
margin-top:30px;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`
export const Icons2 = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin-top:80px;
`
export const Camp = styled.img`

`
export const Icon1 = styled.div`
`
export const Desq = styled.p`
font-size:25px;
color:#7c7c7c;
padding-right:20px;
padding-top:20px;
`
export const Icon2 = styled.div``
export const Hiking = styled.img`

`
export const Icon3 = styled.div``
export const Rafting = styled.img`
`

export const Icon4 = styled.div``
export const Viewing = styled.img`
`

export const Icon5 = styled.div``
export const Biking = styled.img`
`

export const Icon6 = styled.div``
export const Fishing = styled.img`
`

export const Icon7 = styled.div``
export const Projection = styled.img`
`

export const Icon8 = styled.div``
export const Music = styled.img`
`
export const DesqT = styled.p`
margin-top:50px;
font-size:25px;
text-align: center;
margin-left:70px;
margin-right:70px;
color:#7c7c7c;
`
export const Ligne1 = styled.p`
text-align:center;
font-size:28px;
margin-top:40px;
color:#7c7c7c;
`
export const Ligne2 = styled.h1`
text-align:center;
margin-top:20px;
color:rgb(255, 198, 0);
font-size:60px;
`
//FOOTER
export const Footer = styled.div`
margin-bottom: 0;
margin-top:50px;
height: auto;
width: 100%;
padding-top: 40px;
display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;    `

    export const FooterButtom = styled.div`
    width: 97.7%;
    padding: 20px;
    padding-bottom: 40px;
    text-align: center;
    `
export const SocialMedia = styled.div`
margin-left:80%;
display: flex;
align-items: center;
justify-content: center;
margin: 1rem 0 3rem 0;
`
export const Facebook = styled.img`
text-decoration: none;
    color: #fff;
    // border: 1.1px solid black;
    padding: 5px;
    margin: 0 10px;
    border-radius: 50%;
`
export const Instagram = styled.img`
text-decoration: none;
    color: Black;
    // border: 1.1px solid black;
    padding: 5px;
    margin: 0 10px;
    border-radius: 50%;
`
export const Tweeter = styled.img`
text-decoration: none;
    color: black;
    // border: 1.1px solid black;
    padding: 5px;
    margin: 0 10px;
    border-radius: 50%;

`
export const RegisterButton = styled.button`
outline: 0;
grid-gap: 8px;
align-items: center;
background: 0 0;
border: 1px solid #000;
border-radius: 4px;
cursor: pointer;
display: inline-flex;
flex-shrink: 0;
font-size: 16px;
gap: 8px;
justify-content: center;
line-height: 1.5;
overflow: hidden;
padding: 12px 16px;
text-decoration: none;
text-overflow: ellipsis;
transition: all .14s ease-out;
white-space: nowrap;
:hover {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px,-4px);
}
:focus-visible{
    outline-offset: 1px;
}

`
export const Pages = styled.div`
// display:flex;
// flex-direction: row;
// justify-content:center;
// padding:20px;
text-transform: uppercase;
display: flex;

font-weight: 200;
float: right;
color:black;

`
export const HomePage = styled.h1`
color:black;
  font-size: 16px;
  text-decoration: none;
  padding-right: 80px;
display: block;
`
export const AboutPage = styled.h1`
color:black;
  font-size: 16px;
  text-decoration: none;
  padding-right: 80px;
display: block;
`
export const JoinPage = styled.h1`
color:black;
  font-size: 16px;
  text-decoration: none;
  padding-right: 80px;
display: block;
`
export const JoinParag = styled.div`
display:flex;
flex-direction:column;
margin-top:10px;
`
export const Ligne=styled.h1`
text-align:center;
color:black;
`
export const Copyright=styled.p`
float: left;
    font-size: 18px;
    word-spacing: 2px;
    text-transform: capitalize;
    color:black;
`


//EVENT CARD STYLE

export const CardWrapper = styled.div`
 display:grid;
  grid-template-columns:450px;
  grid-template-rows: 510px  80px;
  grid-template-areas: "image" "stats";
  border-radius:18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin:20px;
  
`

export const CardImage = styled.div`
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  opacity: 0.3;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 40px;
  position:absolute;
`;

export const CardTextDate = styled.span`
  color: #8ab7f8;
  font-size: 30px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  // background: linear-gradient(
  //   110.78deg,
  //   rgb(118, 230, 80) -1.13%,
  //   rgb(249, 214, 73) 15.22%,
  //   rgb(240, 142, 53) 32.09%,
  //   rgb(236, 81, 87) 48.96%,
  //   rgb(255, 24, 189) 67.94%,
  //   rgb(26, 75, 255) 85.34%,
  //   rgb(98, 216, 249) 99.57%
  // );
  // background-clip: text;
  // -webkit-background-clip: text;
  // color: transparent;
  color:#f6a530;
`;

export const CardTextBody = styled.p`
  position:relative;
  color:white;
  font-size: 30px;
  font-weight: 400;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-image: linear-gradient(to right top, #004cf7, #256afc, #4884fe, #6b9dfc, #8eb5f8);
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.button`
  color: black;
  text-decoration: none;
  font-size:20px;
  font-weight:bold;
  padding:20px;
  background-color:transparent;
  border:none;
  &:hover{
   color:#f6a530;
  }
  &:active{
    transform: scale(0.95);
}
&:focus {
  outline: none;
}
`;

//JOIN US PAGE

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
export const CardContainer = styled.div`
  // width: 100vw;
  // height: 100vh;
  display: flex;
  padding-top:70px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
`;
export const ButtonDiv = styled.div`
background: #1f2229;
margin-buttom:30px;
`
export const ButtonBack = styled.button`
padding:20px;
background-color:#299798;
margin-left:47%;
margin-buttom:40px;
border:none;
border-radius:10px;
color:white;
font-size:20px;
&:hover{
  color:#e91e63;
}
`
export const Chariot = styled.div`
margin-left:90%;
margin-top:-80px;
`
export const Remarque = styled.div`
margin:30px;
`
export const Rem = styled.h1`
text-align:center;
`
export const ImageF = styled.img`
margin-bottom:-20px;
`



//EVENT DETAILS

export const EventDescription = styled.p`
text-align:center;
margin-left:60px;
margin-top:20px;
font-size:25px;
color:black;
`
export const TextTitle = styled.h1`
text-align:center;
font-size:50px;
padding:30px;
margin-top:-50px;
color:#f6a530;
`
export const PageContainer = styled.div`
margin-top:90px;
margin-left:160px;
margin-right:160px;
border-radius:30px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 70px, rgba(0, 0, 0, 0.12) 0px -12px 40px, rgba(0, 0, 0, 0.12) 0px 4px 10px, rgba(0, 0, 0, 0.17) 0px 20px 13px, rgba(0, 0, 0, 0.09) 20px -3px 20px;
`
export const EventActivities = styled.p`
text-align:center;
padding:30px;
font-size:25px;
color:black;
margin-left:20px;
margin-top:-30px;
`
export const Price =  styled.h1`
color:black;
margin-left:250px;
margin-top:-60px;
`
export const CardText = styled.div`
padding:60px;

`

export const TextDate = styled.h1`
text-align:center;
color:#00007c;
margin-top:-30px;
`
export const Subtitle = styled.h2`
font-size:30px;
text-align:left;
margin-left:70px;
margin-top:30px;
`
export const Back = styled.button`
width: 50px;
height: 50px;
margin:30px;
cursor: pointer;
background-color: #5de6de;
background-image: linear-gradient(315deg, #f77b01 0%, #f8a000 74%);
border: none;
border-radius: 50%;
transition: 200ms;
&::before {
	content: 'Back Home';
	position: absolute;
	transform: translateX(-50%) ;
	font-size: 15px;
	transition: 200ms;
	color: transparent;
	font-weight: bold;
  &:hover {
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    width: 80px;
    height: 80px;
}
@keyframes bounce {
	0% {transform: translateX(-50%) translateY(-50%)}
	25% {transform: translateX(-50%) translateY(-65%)}
	50% {transform: translateX(-50%) translateY(-50%)}
	75% {transform: translateX(-50%) translateY(-35%)}
	100% {transform: translateX(-50%) translateY(-50%)}
}
`
export const Svg = styled.img`
fill: white;
width: 30px;
height: 30px;
position: absolute;
transform: translateX(-50%) translateY(-50%);
&:hover{
  animation: bounce 01s infinite linear;
}
`
export  const BackHome = styled.button`
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  margin-left:35%;
  margin-top:80px;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
&::before {
  content: '';
  background: linear-gradient(45deg, rgb(118, 230, 80),  rgb(249, 214, 73) , rgb(240, 142, 53) , rgb(236, 81, 87) , rgb(255, 24, 189),rgb(26, 75, 255), rgb(98, 216, 249), rgb(249, 214, 73), rgb(249, 214, 73));
  position: absolute;
  top: -2px;
  left:-2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
}
  &:active {
  color: #000;
}
&:active::after {
  background: transparent;
}
&:hover::before {
  opacity: 1;
}
&::after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}
@keyframes  {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
` 
export const BookingButton = styled(BackHome)`
margin-left:8%;
`

//PRODUCT CARD

export const ProductContainer = styled.div`
display: grid;
grid-template-columns: 450px;
grid-template-rows: 390px 70px 60px;
grid-template-areas: "image" "text" "stats";
border-radius: 18px;
background: white;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
text-align: center;
margin:20px;
`
export const ProductImage = styled.div`
grid-area: image;
background-image: url(${({ background }) => background});
border-top-left-radius: 15px;
border-top-right-radius: 15px;
background-size: cover;
`

export const ProductText = styled.div`
grid-area: text;
margin-top:10px;
color:rgb(255, 198, 0);
background:transparent;
`
export const ProductPrice = styled.h1`
margin-top:0;

`
export const ProductName = styled.p`
margin-top: 0px;
font-size: 20px;
box-sizing: border-box;
min-width: 0px;
margin: 0px;
`
export const Add = styled.button`
color:black;
border:none;
font-weight:bold;
border-radius:10px;
cursor: pointer;
background-image: linear-gradient(to right top, #004cf7, #256afc, #4884fe, #6b9dfc, #8eb5f8);
`


export const ProductStat = styled.div`
grid-area: stats;
display: grid;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
background-image: linear-gradient(to right top, #004cf7, #256afc, #4884fe, #6b9dfc, #8eb5f8);
`
//SHOPPING CART
export const Carte = styled.div`
margin:100px;
background-color:white;
border-radius:20px;

box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`
export const HeadOfCard = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
border-bottom: solid 2px black;
padding:20px;
`
export const ShoppingBagTitle = styled.h1`
color: green;
font-size:60px;
`
export const RemoveAllButton = styled.p`
cursor:pointer;
margin-top:15px;
color:red;
font-weight:bold;
font-size:20px;
text-decoration:underline;
margin-right:40px;
`
export const CartItems = styled.div`
margin: auto;
width: 100%;
height: 30%;
display: flex;
flex-direction:column;


`
export const CardItem = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
border-bottom: solid 2px black;
`
export const ImageBox = styled.img`
width:120px;
height:120px;
`
export const ItemTitle = styled.p`
padding-top:40px;
size:30px;
font-weight:bold;
`
export const Counter = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width: 130px;
height:50px;
border: 0.5px solid rgb(177, 177, 177);
border-radius: 5px;
margin-top:25px;
`
export const Btn = styled.button`
border: none;
  outline: none;
  background: none;
  padding: 0.7rem 1.5rem;
  padding-top:20px;
  cursor: pointer;
`
export const Count = styled.h1`
margin-top:10px;
`
export const Prices = styled.div``
export const Amount = styled.h1`
margin-top:30px;
`
export const Remove = styled.button`
border:none;
background-color:transparent;
cursor:pointer;
color:red;
margin-left:10px;
`
export const TotalResult = styled.div`
 margin-left:83%;
 
`
export const Checkout = styled.div``
export const Total = styled.div`
padding-bottom:20px;
display:flex;
margin-right:90%;
`
export const SubTotal = styled.h1`
size:40px;
padding-right:40%;
padding-top:20px;
`
export const TotalAmount = styled.h1`
padding-top:20px;
`
export const BackToProducts = styled.button`
background-color:transparent;
border:none;
padding:30px;
margin-bottom:0px;
cursor:pointer;

`
export const Paybutton = styled.button`
width: 80%;
height: 40px;
border-radius: 5px;
font-weight: bold;
letter-spacing: 1.15px;
background-color: #4b70e2;
color: black;
border: none;
outline: none;
cursor: pointer;
margin-right:70px;
`
export const Image = styled.img`
margin-right:0px;
padding-top:10px;
`
export const NotYetParag = styled.div`
padding:30px;
text-align:center;
// margin-left:20%;
font-size:20px;
`
export const JumpButton = styled.button`
border:none;
background-color:transparent;
cursor:pointer;
`
export const ButtonB = styled.button`
border:2px solid green;
padding:10px;
background-color:transparent;
color:orange;
border-radius:10px;
cursor:pointer;
&:hover{
  transform: scale(2)
}
`
export const P = styled.h3`
color:#f76301;
`
export const ShoppingTitle = styled.h1`
color:green;
padding:40px;
text-align:center;
font-size:50px;
`
//BOOKING PAGE
export const BookingPage =styled.div`
display: flex;
padding-top:70px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
background: #1f2229;
overflow: hidden;
width:100%;
height:180vh;
`
export const BookingContainer =styled.div`
width: 70%;
height: 85%;
background-color: #ffffff;
border-radius: 20px;
box-shadow: 0px 25px 40px #1687d933;
`
export const BookingTitle =styled.h6`
background-color:Black;
color:white;
font-size:20px;
padding:20px;
border-top-left-radius:10px;
border-top-right-radius:10px;

`
export const Inputs =styled.div`
text-align:left;
margin-left:30%;
margin-top:30px;

`
export const InputNameTitle =styled.p`
font-size:20px;
font-weight:bold;
margin-bottom:15px;
margin-top:25px;
`
export const InputName =styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin-right:900px;
width: 50%;
border-radius:8px;
height:30px;
`
export const Parag =styled.p`
text-align:center;
font-size:25px;
padding:40px;
margin-top:20px;
`
export const InputNumberPersonTitle =styled.p`
font-size:20px;
font-weight:bold;
margin-bottom:15px;
margin-top:25px;
`
export const InputEmailTitle =styled.p`
font-size:20px;
font-weight:bold;
margin-bottom:15px;
margin-top:25px;
`
export const InputPerson =styled.select`
color: gray;
padding-left: 20px;
font-size: 14px;
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 10px 0;
width: 54%;
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
export const InputEmail = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin-right:900px;
width: 50%;
border-radius:8px;
height:30px;
`
export const InputAge =styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin-right:900px;
width: 50%;
border-radius:8px;
height:30px;
`
export const InputGenderTitle =styled.p`
font-size:20px;
font-weight:bold;
margin-bottom:15px;
margin-top:25px;
`
export const InputGender =styled.select`
color: gray;
padding-left: 20px;
font-size: 14px;
background-color: #eee;
border: none;
padding: 12px 15px;
margin-right:900px;
width: 53%;
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
export const InputPhoneTitle =styled.p`
font-size:20px;
font-weight:bold;
margin-bottom:15px;
margin-top:25px;
`
export const InputAgeTitle = styled.p`
font-size:20px;
font-weight:bold;
margin-bottom:15px;
margin-top:25px;
`
export const InputPhone =styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin-right:900px;
width: 50%;
border-radius:8px;
height:30px;
`
export const ButtonBookNow = styled.button`
display: block;
width: 200px;
height: 40px;
line-height: 40px;
font-size: 18px;
text-decoration: none;
color: #333;
font-weight:bold;
border: 2px solid #ff003b;
text-align: center;
position: relative;
transition: all .35s;
margin-left:42%;
margin-top:20px;
&::after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ff003b;
  transition: all .35s;
  
}
&:hover{
  color: black;
}
&:hover:after{
  width: 100%;
}
`
export const ButtonRent = styled.button`
display: block;
width: 200px;
height: 40px;
line-height: 40px;
font-size: 18px;
text-decoration: none;
color: #333;
font-weight:bold;
border: 2px solid #ff003b;
text-align: center;
position: relative;
transition: all .35s;
margin-left:42%;
margin-top:20px;
&::after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ff003b;
  transition: all .35s;
  
}
&:hover{
  color: black;
}
&:hover:after{
  width: 100%;
}
`
export const PaymentButton = styled.button`
cursor:pointer;
background-color:blue;
padding:40px;
`

//SUCCESS PAGE 
export const P1 = styled.div`
font-size:60px;
color:green;
font-weight:bold;
`
export const P2 = styled.div`
font-size:30px;
margin-top:20px;
`
export const Heart = styled.img`

`
export const SuccessPage = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
`
export const ParaghPart = styled.div`
margin-top:300px;
`
export const ImagePart = styled.div``
export const Phone = styled.img`
margin-top:150px;
width:120%;
`






























