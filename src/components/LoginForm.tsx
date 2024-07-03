import { Link as ReactRouterLink } from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Stack,
    Button as CLink,
  } from '@chakra-ui/react'

export default function LoginForm() {
  return (
    <Stack mt={'15px'}>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
        </FormControl>
        <CLink as={ReactRouterLink} to='/dashboard' variant='solid' mt='10px'  width={100} colorScheme='teal'>
            Submit
        </CLink>
    </Stack>
  )
}
