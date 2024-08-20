import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react'
import { useState } from 'react'
import LoginForm from './LoginForm'

export default function LoginCard() {
    const [selectLoginAction, setSelectLoginAction] = useState<'login' | 'signin' | null>(null)

  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://www.frugalandthriving.com.au/wp-content/uploads/2017/08/simmering.jpg'
            alt='Cooking'
        />

        {selectLoginAction === null && (
            <Stack>
                <CardBody>
                <Heading size='md'>My recipe app</Heading>
    
                <Text py='2'>
                    A place to keep your favorite recipes.
                </Text>
                </CardBody>
    
                <CardFooter>
                    <Stack spacing={4} direction='row' align='center'>
                    <Button variant='outline' colorScheme='teal' onClick={() => setSelectLoginAction('login')}>
                        Log in
                    </Button>
                    <Button variant='solid' colorScheme='teal' onClick={() => setSelectLoginAction('signin')}>
                        Sign in
                    </Button>
                    </Stack>
                </CardFooter>
            </Stack>
        )}

        {selectLoginAction !== null && (
            <Stack>
                <CardBody>
                    {selectLoginAction === 'login' ? (
                        <Heading size='md'>Log in to your account</Heading>
                        ) : (
                        <Heading size='md'>Create a new account</Heading>
                    )}
                    <LoginForm selectLoginAction={selectLoginAction}/>

                </CardBody>

                <CardFooter>
                    <Stack direction='row' align='center'>
                        {selectLoginAction === 'login' ? (
                            <Button variant='outline' colorScheme='teal' onClick={() => setSelectLoginAction('signin')}>
                                Sign in
                            </Button> 
                            ) : (
                            <Button variant='outline' colorScheme='teal' onClick={() => setSelectLoginAction('login')}>
                                Log in
                            </Button>
                        )}
                    </Stack>
                </CardFooter>
            </Stack>
        )}
    </Card>
  )
}
