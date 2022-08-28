import React from 'react';
import{Head,AboutUsImage,Icons1,DesqT,Icon1,Footer,JoinParag,Ligne,RegisterButton,FooterButtom,Pages,HomePage,AboutPage,JoinPage,Copyright,Projection,Fishing,Desq,Icon8,Music,Camp,Icon2,Icon3,Rafting,Icon4,Viewing,Icons2,Icon5,Biking,Icon6,Hiking,Ligne1,Ligne2,Icon7,ExperienceTitle,History,AboutTitle,Activities,Intro,Image3,UnderTitle,Introduction,Images,Image1,Team,Des,Image2,Localisation,} from '../styles/components.styled'
import Group from '../assets/Team.png'
import team from '../assets/img1.png'
import local from '../assets/localisation.png'
import activitie from '../assets/activities.png';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'

const AboutUs = () => {
  const url1="https://img.icons8.com/ios/100/000000/tent.png"
  const url2 = "https://img.icons8.com/ios/100/000000/trekking.png";
  const url3 = "https://img.icons8.com/ios/100/000000/canoe-slalom--v1.png";
  const url4 = "https://img.icons8.com/ios/100/000000/binoculars.png";
  const url5 = "https://img.icons8.com/ios/100/000000/cycling-road--v1.png";
  const url6 = "https://img.icons8.com/ios/100/000000/fishing-pole.png";
  const url7 = "https://img.icons8.com/ios/100/000000/movie-projector.png";
  const url8 = "https://img.icons8.com/ios/100/000000/guitarist.png";
  // const facebook = "https://img.icons8.com/ios/50/40C057/facebook-f.png";
  // const instagram = "https://img.icons8.com/ios/50/40C057/instagram-new--v1.png"
  // const tweeter = "https://img.icons8.com/ios/50/40C057/twitter--v1.png"
  
  
  return (
    <Head>
  <Navbar/> 
   <div>
   <AboutTitle>About us</AboutTitle>
   <Intro>Welcome to Camping Under The Stars your gateway to discover our Nation's hidden  <br/> treasures and engage in timeless outdoor recreation and multiple activities.</Intro>
   <AboutUsImage src={Group}></AboutUsImage>
   </div>
   <div>
   <UnderTitle>About Camping Under The Stars</UnderTitle>
   <Introduction>Think of us as your one-stop-shop - a place with all the tools, services and information you'll need to imagine your next adventure, plan the details, experience it firsthand, and then share those stories. With multiple activities and multiple sites across our beautiful Tunisia, we are confident that you will not only find what you need, but more importantly create lasting memories and take home a story.</Introduction>
  
   <Images>
   <Image1> 
   <Team src={team} ></Team> 
   <Des>3000 + campers</Des>
   </Image1> 
   <Image2>
    <Localisation src={local}></Localisation>
    <Des>8000 + Localisations</Des>
   </Image2>
   <Image3>
    <Activities src={activitie}></Activities>
    <Des>1000 + Activities</Des>
   </Image3>
   </Images>
   
   <History>
   <ExperienceTitle>Our Experiences</ExperienceTitle>
   <DesqT>The term "recreation" could be seen as broadly as the vast outdoors, so we want to better frame the great activities you can explore on Recreation.gov. Below you'll find just a few of the things you can do</DesqT>
   <Icons1>
    <Icon1>
    <Camp src={url1}></Camp>
    <Desq>Camping</Desq>
    </Icon1>

    <Icon2>
    <Hiking src={url2}></Hiking>
    <Desq>Hiking</Desq>
    </Icon2>

    <Icon3>
    <Rafting src={url3}></Rafting>
    <Desq>Rafting</Desq>
    </Icon3>

    <Icon4>
    <Viewing src={url4}></Viewing>
    <Desq>Wildlife Viewing</Desq>
    </Icon4>
    </Icons1>

    <Icons2>
    <Icon5>
    <Biking src={url5}></Biking>
    <Desq>Biking</Desq>
    </Icon5>
    <Icon6>
    <Fishing src={url6}></Fishing>
    <Desq>Fishing</Desq>
    </Icon6>

    <Icon7>
    <Projection src={url7}></Projection>
    <Desq>Films</Desq>
    </Icon7>

    <Icon8>
    <Music src={url8}></Music>
    <Desq>Musical Nights</Desq>
    </Icon8>
    </Icons2>
    <Ligne1>And many more experiences to help you.</Ligne1>
    <Ligne2>BRING HOME A STORY!</Ligne2>
   </History>
   </div>

   <div>
    <Footer>
      <JoinParag>
      <Ligne>You can be a part of us!</Ligne>
      <Link to='/Login'><RegisterButton>Register Now</RegisterButton></Link>
      </JoinParag>
      {/* <SocialMedia>
        <Link to='/contact'> <Facebook src={facebook}></Facebook></Link>
        <Link to='/instagram'><Instagram src={instagram}></Instagram></Link>
        <Link to='/tweeter'><Tweeter src={tweeter}></Tweeter></Link>
      </SocialMedia> */}
      <FooterButtom>
      <Pages>
      <Link to='/Home'><HomePage>Home</HomePage></Link>
      <Link to='/AboutUs'><AboutPage>AboutUs</AboutPage></Link>
      <Link to='/JoinUs'><JoinPage>JoinUs</JoinPage></Link>
      </Pages>
      <Copyright>© 2022 Camping under the stars.  All Rights Reserved.</Copyright>
      </FooterButtom>
    </Footer>
   </div>
   </Head>
   
  )
}

export default AboutUs