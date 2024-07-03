import { Container, Grid } from '@chakra-ui/react'
import RecipeCard from './RecipeCard'


export default function CardsContainer() {
  return (
    <Container maxW="80vw" pt="20px" pb="20px" color='white'>
        <Grid templateColumns='repeat(4, 1fr)' pl='25px' pr='25px' gap={4}>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </Grid>
    </Container>
  )
}
