import styled from 'styled-components'
import {FaUsers, FaChartBar,FaClipboard} from 'react-icons/fa'
import Widget from './summary-components/widget'
import Chart from './summary-components/Chart'
import Navbar from '../Navbar'
import Transactions from './summary-components/Transactions'
import AllTimeData from './summary-components/AllTimeData'


const Summary = () => {
//     const [users,setUsers] = useState([])

//     useEffect(()=>{
//         async function fetchData(){
// try {
//     const res=axios.get("/api/v1/users/stats",token)
// } catch (err) {
//     console.log(err)
// }
//         }
//         fetchData()
//     },[])

    const data =[
        {
            icon:<FaUsers/>,
            digits:50,
            isMoney:false,
            title:"Users",
            color:"rgb(102,108,255)",
            bgColor:"rgba(102,108,255,0.12)",
            percentage:30,
        },
        {
            icon:<FaClipboard/>,
            digits:70,
            isMoney:false,
            title:"Orders",
            color:"rgb(38,198,249)",
            bgColor:"rgba(38,198,249,0.12)",
            percentage:20,
        },{
            icon:<FaChartBar/>,
            digits:5000,
            isMoney:true,
            title:"Earnings",
            color:"rgb(253,181,40)",
            bgColor:"rgba(253,181,40,0.12)",
            percentage:60,
        }
    ]
  return (
    <>
    <Navbar/>
    <StyledSummary>
        <MainStats> 
            <Overview>
                <Title>
                    <h2>Overview</h2>
                    <p>How your shop is performing compared to the previous month</p>
                </Title>
                <WidgetWrapper>
                    {data?.map((data,index)=><Widget Key={index} data={data}/>)}
                </WidgetWrapper>
            </Overview>
            <Chart/>
        </MainStats>
        <SideStats>
            <Transactions/>
            <AllTimeData/>
        </SideStats>
    </StyledSummary>
    </>
  )
}

export default Summary;

const StyledSummary = styled.div`
width:40%;
display:flex;

`;
const MainStats = styled.div`
flex:2;
width:100%;
`;
const Title = styled.div`
p{
    font-size:14px;
    color:rgba(234,234,255,0.68);
}
`;
const Overview = styled.div`
background : rgb(48,51,78);
color:rgba(234,234,255,0.87);
width:100%;
padding:1.5rem;
height:170px;
margin-top:29%;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
`;
const WidgetWrapper = styled.div`
display:flex;
width:100%;
justify-content:space-between;
`;

const SideStats = styled.div`
flex:1;
display:flex;
flex-direction:column;
margin-left:2rem;
width:100%;
`;