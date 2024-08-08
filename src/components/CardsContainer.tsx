import { Container, Grid } from '@chakra-ui/react'
import RecipeCard from './RecipeCard'
import { useEffect, useState } from 'react'
import { get, ref, remove } from 'firebase/database'
import { database } from '../firebaseConfig.js'


export default function CardsContainer() {

    const [recipesDetails, setRecipesDetails]= useState([])

    const getRecipes = async () => {
        const recipesDetailsRef = ref(database, 'recipes')
        await get(recipesDetailsRef).then((snapshot: any) => {
            if (snapshot.exists()){
                const recipesArray = snapshot.val()
                setRecipesDetails(recipesArray)
                console.log(recipesArray, 'recipes')
            }else{
                console.log('no data')
            }
        })
    }

    useEffect(() => {
        getRecipes()
    }, [])

    const removeRecipe = async (index: number) => {
        const recipesDetailsRef = ref(database, 'recipes/'+index)
        await remove(recipesDetailsRef)

        getRecipes()
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
