import { Link as ReactRouterLink } from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button as CLink,
  } from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form"
import { createNewUser, logIn } from '../firebase/auth.js';
import { useNavigate } from 'react-router-dom';

interface ILoginFormProps {
  selectLoginAction: string
}

interface IFormFields {
  email: string;
  password: string;
}

export default function LoginForm({selectLoginAction} : ILoginFormProps) {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormFields>()

  const onSubmit: SubmitHandler<IFormFields> = async (data) => {
    if(selectLoginAction === 'signin'){
      await createNewUser(data)
      navigate('/dashboard')
    }
    if(selectLoginAction === 'login'){
      await logIn(data)
      navigate('/dashboard')
    }

  }

  return (
    <Stack mt={'15px'}>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' {...register("email", { required: true })}/>
            {errors.email && <span>This field is required.</span>}
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' {...register("password", { required: true })} />
            {errors.password && <span>This field is required.</span>}
        </FormControl>
        <CLink as={ReactRouterLink} to='/dashboard' variant='solid' mt='10px'  width={100} colorScheme='teal' onClick={handleSubmit(onSubmit)}>
            Submit
        </CLink>
    </Stack>
  )
}
