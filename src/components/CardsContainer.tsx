import { Container, Grid } from '@chakra-ui/react'
import RecipeCard from './RecipeCard'
import { useEffect } from 'react'
import { removeRecipe } from '../Api'

interface ICardsContainerProps {
    getRecipes: () => void;
    allRecipes: Array<{}>;
}


export default function CardsContainer({getRecipes, allRecipes}: ICardsContainerProps) {
    useEffect(() => {
        getRecipes()
    }, [])

    const handleRemoveRecipe = async (index: number) => {
        removeRecipe(index)
        getRecipes()
    }

  return (
    <Container maxW="80vw" pt="20px" pb="20px" color='white'>
        <Grid templateColumns='repeat(4, 1fr)' pl='25px' pr='25px' gap={4}>
            {allRecipes.map((recipe: any, index: number) => (
                <RecipeCard recipeDetails={recipe} index={index} removeItem={() => handleRemoveRecipe(index)} />
            ))}
        </Grid>
    </Container>
  )
}
