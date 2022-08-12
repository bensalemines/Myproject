import {P1,P2,SuccessPage,ImagePart,Phone,ParaghPart,Back,Svg,Heart} from '../styles/components.styled'
import success from '../assets/success.png';
import {Link} from 'react-router-dom';

const CheckoutSuccess = () => {
  const fleche = "https://img.icons8.com/sf-black-filled/64/FFFFFF/double-left.png";
  const heart = "https://img.icons8.com/material-rounded/24/40C057/hearts.png";
  return (
    <SuccessPage>
    <ParaghPart>
    <P1>Checkout Successfully Done</P1>
    
    <P2>THANK YOU FOR YOUR TRUST <Heart src={heart}/></P2>
    <Link to="/Home"><Back><Svg src={fleche}/></Back></Link>
    </ParaghPart>
    <ImagePart >
    <Phone src={success} />
    </ImagePart >
    </SuccessPage>
  )
}

export default CheckoutSuccess