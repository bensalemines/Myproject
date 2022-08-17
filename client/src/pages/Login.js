import { useEffect,useState  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import{Container,SignUpContainer,ErrorsMessages,Select,Form,Errors,TogglePasswordSignIn,TogglePasswordSignUp,Title,Input,Button,SignInContainer,OverlayContainer,Overlay,LeftOverlayPanel,Paragraph,GhostButton,RightOverlayPanel} from '../styles/components.styled';
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux'
import  { loginUser, registerNewUser,getUserData } from "../slices/userSlices";
import {useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

const eye = <FontAwesomeIcon icon={faEye} />;
function Login() {
	const [signIn, toggle] = useState(true);
	const [passwordShown, setPasswordShown] =useState(false);
	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	  };
	
	const dispatch = useDispatch(registerNewUser)
	const loginDispatch = useDispatch(loginUser)
	const {register,handleSubmit:handleInput,formState: { errors }} =useForm();
	const {register:inputLogin,handleSubmit:handleInfo,formState: { errors:loginErrors }} =useForm();

	const onSubmit = data => {dispatch(registerNewUser(data))
		console.log(data)};

	const Submit = data => {loginDispatch(loginUser(data))
			console.log(data)};
	
	
	//   const nav = useNavigate()
	//   const {errors:registerErrors , isAuth } = useSelector(state=>state.user);
	//   useEffect(()=>{
    //            if (isAuth) nav('/profile')
	//   },[isAuth , nav]);


	  const navig = useNavigate()
	  const {loginErrors: loginError , isAuth,userInfo} = useSelector(state=>state.user);
	  useEffect(()=>{
		dispatch(getUserData)
               if (isAuth && userInfo.role ==='user') navig('/Home') 
			   else if(isAuth && userInfo.role ==='admin') navig('/admin')
	  },[isAuth , navig,userInfo.role,dispatch])
	 
	 
	 return(
		<>
		<Navbar/>
		
		 <Container>
			 <SignUpContainer signinIn={signIn}>
				 <Form onSubmit={handleInput(onSubmit)}>
					 <Title>Create Account</Title>
					  {/*FULL NAME*/}
					 <Input type='text' name='Fullname' placeholder='Full Name...' {...register('Fullname',{ required: true })} />
					 {errors.FullName?.type === 'required' && "Full name is required"}

					  {/*GENDER*/}
					 <Select {...register("gender")}>
						<option value="Male">Male</option>
						<option value="Female" selected>Female</option>
						</Select>

						 {/*AGE*/}
					 <Input type="number" name="age"  placeholder="Your Age"{...register('age',{required:true,pattern:/^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/})}/>
					 <Errors>
					 {errors.age?.type === 'required' && "Age is required"}
					 {errors.age?.type === 'pattern' && "Age should be greater than 18!"}
					 </Errors>

					  {/*PHONE NUMBER*/}
					 <Input type="tel" name="phoneNumber" placeholder='(+216)' {...register('phoneNumber',{required:true, pattern:/^[+0]{0,2}(91)?[0-9]{8}$/})} />
					 <Errors>
					 {errors.PhoneNumber?.type === 'required' && "Phone Number is required"}
					 {errors.PhoneNumber?.type === 'pattern' && "Phone Number should be valid"}
					 </Errors>


					  {/*EMAIL*/}
					 <Input type='email' placeholder='Enter Your Email...' {...register('email',{required: true ,pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/})} />
					 <Errors>
					 {errors.email?.type === 'required' && "Email is required"}
					 {errors.email?.type === 'pattern' && "Email should be valid"}
					 </Errors>


					 {/*PASSWORD*/}
					 <Input type={passwordShown ? "text" : "password"} placeholder='password...' {...register('password',{required:true, pattern:/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/})} />
                     <Errors>
					 {errors.password?.type === 'required' && "password is required"}
					 {errors.password?.type === 'pattern' && "password must have minimunm 8 characters,1 lowercase character,1 uppercase character and 1 number"}
					 </Errors>

					 {/*SIGNUP BUTTON*/}
					 {/* <ErrorsMessages>{registerErrors}</ErrorsMessages> */}
					 <TogglePasswordSignUp onClick={togglePasswordVisiblity}>{eye}</TogglePasswordSignUp>
					 <Button >Sign Up</Button>
					 

				 </Form>
			 </SignUpContainer>

			 <SignInContainer signinIn={signIn} >
				  <Form onSubmit={handleInfo(Submit)}>
					  <Title>Sign in</Title>
					  <Input type='email' placeholder="Enter Your Email..." {...inputLogin('email',{required:true})}/>
					  {loginErrors.email?.type === 'required' && "Email is required"}
					  <>
					  <Input type={passwordShown ? "text" : "password"} placeholder='Password...' {...inputLogin('password',{required:true})} />
					  <TogglePasswordSignIn onClick={togglePasswordVisiblity}>{eye}</TogglePasswordSignIn>
					  {loginErrors.password?.type === 'required' && "Password is required"}
					  </>
					  <ErrorsMessages>{loginError}</ErrorsMessages>
					  <Button>Sigin In</Button>
				  </Form>
			 </SignInContainer>

			 <OverlayContainer signinIn={signIn}>
				 <Overlay signinIn={signIn}>

				 <LeftOverlayPanel signinIn={signIn} >
					 <Title>Welcome Back!</Title>
					 <Paragraph>
						 To keep connected with us please login with your personal info
					 </Paragraph>
					 <GhostButton onClick={() => toggle(true)}>
						 Sign In
					 </GhostButton>
					 </LeftOverlayPanel>

					 <RightOverlayPanel signinIn={signIn}>
					   <Title>Hello, Friend!</Title>
					   <Paragraph>
						   Enter Your personal details and start journey with us
					   </Paragraph>
						   <GhostButton onClick={() => toggle(false)}>
							   Sigin Up
						   </GhostButton> 
					 </RightOverlayPanel>
 
				 </Overlay>
			 </OverlayContainer>

		 </Container>
		 </>
	 )
}

export default Login;