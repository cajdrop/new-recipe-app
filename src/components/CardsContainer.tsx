import { Container, Grid } from '@chakra-ui/react'
import RecipeCard from './RecipeCard'
import { useState } from 'react'


export default function CardsContainer() {

    const [recipesDetails, setRecipesDetails]= useState([
        {
            title: 'Customer dashboard 1',
            description: 'View a summary of all your customers over the last month.',
            ingredients: ['lalala', 'lelelel', 'lilili'],
            instructions: ['lalala', 'lelelel', 'lilili']
        },
        {
            title: 'Customer dashboard 2',
            description: 'View a summary of all your customers over the last month.',
            ingredients: ['lalala', 'lelelel', 'lilili'],
            instructions: ['lalala', 'lelelel', 'lilili']
        },
        {
            title: 'Customer dashboard 3',
            description: 'View a summary of all your customers over the last month.',
            ingredients: ['lalala', 'lelelel', 'lilili'],
            instructions: ['lalala', 'lelelel', 'lilili']
        },
        {
            title: 'Customer dashboard 4',
            description: 'View a summary of all your customers over the last month.',
            ingredients: ['lalala', 'lelelel', 'lilili'],
            instructions: ['lalala', 'lelelel', 'lilili']
        },
        {
            title: 'Customer dashboard 5',
            description: 'View a summary of all your customers over the last month.',
            ingredients: ['lalala', 'lelelel', 'lilili'],
            instructions: ['lalala', 'lelelel', 'lilili']
        },
        {
            title: 'Customer dashboard 6',
            description: 'View a summary of all your customers over the last month.',
            ingredients: ['lalala', 'lelelel', 'lilili'],
            instructions: ['lalala', 'lelelel', 'lilili']
        },
    ])

    function removeRecipe(index: number){
        const newRecipesDetails = [... recipesDetails]
        newRecipesDetails.splice(index, 1)
        setRecipesDetails(newRecipesDetails)
    }

  return (
    <Container maxW="80vw" pt="20px" pb="20px" color='white'>
        <Grid templateColumns='repeat(4, 1fr)' pl='25px' pr='25px' gap={4}>
            {recipesDetails.map((recipe, index) => (
                <RecipeCard recipeDetails={recipe} index={index} removeItem={removeRecipe} />
            ))}
        </Grid>
    </Container>
  )
}
