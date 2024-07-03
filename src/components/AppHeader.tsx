import { Button as CLink, Container, Grid, GridItem, Heading } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export default function AppHeader() {
  return (
    <Container maxW="100vw" pt="20px" pb="20px" bg='teal' color='white'>
        <Grid templateColumns='repeat(5, 1fr)' pl='25px' pr='25px' gap={4}>
            <GridItem colSpan={2} h='10'>
                <Heading>
                    My recipes
                </Heading>
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='10'>
            <CLink as={ReactRouterLink} to='/' float={'right'} color='teal'>
                Logout
            </CLink>
            </GridItem>
        </Grid>
    </Container>
  )
}
