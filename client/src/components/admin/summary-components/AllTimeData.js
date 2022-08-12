import styled from "styled-components";

const AllTimeData = () => {
  return (
    <Main>
<h3>All Time</h3>
<Info>
    <Title>Campers</Title>
    <Data>2000</Data>
</Info>
<Info>
    <Title>Rented Products</Title>
    <Data>200</Data>
</Info>
<Info>
    <Title>Reservations</Title>
    <Data>400</Data>
</Info>
<Info>
    <Title>Earnings</Title>
    <Data>2000€</Data>
</Info>
    </Main>
  )
}

export default AllTimeData
const Main = styled.div`
background:rgb(48,51,78);
color:rgba(234,234,255,0.87);
margin-top:1.5rem;
border-radius:5px;
margin-left:36%;
width:100%;
padding:1rem;
font-size:14px;
`;
const Info = styled.div`
display:flex,
justify-content:space-between;
margin-top:1rem;
padding:0.3rem;
border-radius:3px;
background:rgba(38,198,249,0.12);
&:nth-child(even){
    background:rgba(102,108,255,0.12);
}
`;
const Title = styled.div`
flex:1;

`;
const Data = styled.div`
flex:2;
font-weight:700;
margin-left:200px;
`;