import AppHeader from '../components/AppHeader'
import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import CardsContainer from '../components/CardsContainer'
import CreateRecipeModal from '../components/CreateRecipeModal'
import { get, ref } from 'firebase/database'
import { database } from '../firebase/firebaseConfig.js'
import { useState } from 'react'


export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [allRecipes, setAllRecipes]= useState([])

  const getRecipes = async () => {
    const allRecipesRef = ref(database, 'recipes')
    await get(allRecipesRef).then((snapshot: any) => {
        if (snapshot.exists()){
            const recipesArray = snapshot.val()
            setAllRecipes(recipesArray)
        }else{
            console.log('no data')
        }
    })
}
  return (
    <>
      <AppHeader />
      <Flex align={'center'} justify={'right'}>
      <Button onClick={onOpen} variant='outline' mt='30px' mr='35px' colorScheme='teal'>
          Create new recipe
      </Button>
      </Flex>

      <CardsContainer getRecipes={getRecipes} allRecipes={allRecipes}/>
      <CreateRecipeModal isEdit={false} isOpen={isOpen} onClose={onClose} getRecipes={getRecipes} allRecipes={allRecipes}/>
    </>
  )
}
