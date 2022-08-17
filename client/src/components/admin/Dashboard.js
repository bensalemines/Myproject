import {NavLink, Outlet} from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {FaUsers,FaStore,FaTachometerAlt} from "react-icons/fa"
import Navbar from 'C:/Users/HP/Desktop/CAMPING UNDER THE STARS/client/src/components/Navbar'
import '../../styles/style.css'

const Dashboard = () =>{
    const {isAuth,userInfo} = useSelector((state)=>state.user)

    if (!isAuth && userInfo.role ==='user') return <p>Access denied.</p>
    return(
        <>
        <Navbar/>
        <StyledDashboard>
            <SideNav>
                <h3>Quick Links</h3>
                <NavLink exact className="active"
            to="/admin/Summary"
            >
                <FaTachometerAlt/> Summary
            </NavLink>
            <NavLink className={({isActive})=>
                isActive? "link-active" : "link-inactive"
            }to="/admin/Product"
            >
                <FaStore/>Products
            </NavLink>
            <NavLink className={({isActive})=>
                isActive? "link-active" : "link-inactive"
            }to="/admin/Events"
            >
                <FaUsers/> Events
            </NavLink>
            <NavLink className={({isActive})=>
                isActive? "link-active" : "link-inactive"
            }to="/admin/Users"
            >
                <FaUsers/> Users
            </NavLink>
            </SideNav>
        </StyledDashboard>
        <Outlet/>
        </>
    )
};
export default Dashboard;

const StyledDashboard = styled.div`
display:flex;
margin-top:68px;
`;
const SideNav = styled.div`
height: calc(100vh - 70px);
position:fixed;
overflow-y:auto;
width:200px;
display:flex;
border-radius:10px;
margin-top:-5px;
box-shadow: rgba(0, 0, 0, 0.56) 0px 0px 70px 4px;
background-image: linear-gradient(to left, #060606,#002045  );
flex-direction:column;
padding:3rem;
left:0;
buttom:0;
h3{
    margin-bottom:30px;
    padding:0;
    text-transform:uppercase;
    font-size:22px;
    color:#aaafcf;

}
a{
    text-decoration:none;
    margin-bottom:3rem;
    font-size:15px;
    display:flex;
    align-items:center;
    // font-weight:700;
    svg{
        margin-right:0.5rem;
        font-size:15px;
    }

}
`;
// const Content = styled.div`
// margin-left:200px;
// padding: 2rem 3rem;
// width:100%;
// `

