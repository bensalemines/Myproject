import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import{Container,SignUpContainer,Select,Form,Errors,TogglePasswordSignIn,TogglePasswordSignUp,Title,Input,Button,SignInContainer,Anchor,OverlayContainer,Overlay,LeftOverlayPanel,Paragraph,GhostButton,RightOverlayPanel} from '../styles/components.styled';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux'
import { registerNewUser } from "../slices/userSlices";
const eye = <FontAwesomeIcon icon={faEye} />;
function Login() {
	const dispatch = useDispatch(registerNewUser)
	const {register,
		handleSubmit:handleInput
		,formState: { errors }}=useForm();
	const onSubmit = data => {
		
		dispatch(registerNewUser(data))
		console.log(data)
	};

	const [signIn, toggle] = React.useState(true);
	const [passwordShown, setPasswordShown] = React.useState(false);
	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	  };
	 
	 return(
		
		 <Container>
			 <SignUpContainer signinIn={signIn}>
				 <Form onSubmit={handleInput(onSubmit)}>
					 <Title>Create Account</Title>
					  {/*FULL NAME*/}
					 <Input type='text' name='userFullname' placeholder='Full Name...' {...register('fullName',{ required: true })} />
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
					 <TogglePasswordSignUp onClick={togglePasswordVisiblity}>{eye}</TogglePasswordSignUp>
					 <Button >Sign Up</Button>
				 </Form>
			 </SignUpContainer>

			 <SignInContainer signinIn={signIn} >
				  <Form>
					  <Title>Sign in</Title>
					  <Input type='email' placeholder="Enter Your Email..."/>
					  <>
					  <Input type={passwordShown ? "text" : "password"} placeholder='Password...' />
					  <TogglePasswordSignIn onClick={togglePasswordVisiblity}>{eye}</TogglePasswordSignIn>
					  </>
					  <Anchor href='#'>Forgot your password?</Anchor>
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
	 )
}

export default Login;