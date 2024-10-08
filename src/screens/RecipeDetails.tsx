import AppHeader from '../components/AppHeader'
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { Container, Flex, Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Divider, Box, Text, ButtonGroup, Button, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { get, ref} from 'firebase/database'
import { database } from '../firebase/firebaseConfig.js'
import { removeRecipe } from '../Api'
import CreateRecipeModal from '../components/CreateRecipeModal'



export default function RecipeDetails() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const [allRecipes, setAllRecipes]= useState<any[]>([])
    const [isEdit, setIsEdit] = useState(false)

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

    useEffect(() => {
      getRecipes()
    }, [])

    const handleRemoveRecipe = async () => {
      removeRecipe(Number(recipeIndex))
      navigate('/dashboard')
  }


    const recipeIndex = Number(window.location.href.split("/").pop())
    const currentRecipe = allRecipes.find((x, index) => index === recipeIndex)
  return (
    <>
      <AppHeader />
      <Flex align={'center'} justify={'left'}>
      <Button variant='outline' mt='10px' ml='35px' colorScheme='teal' as={ReactRouterLink} to='/dashboard'>
          Back
      </Button>
      </Flex>
      <Container mt='10px'>
        {currentRecipe &&
              <Card color={'#718096'}>
              <CardHeader>
                <Heading size='md'>{currentRecipe.title}</Heading>
              </CardHeader>
      
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Text pt='2' fontSize='sm'>
                      {currentRecipe.description}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Ingredients
                    </Heading>
                    {currentRecipe.ingredients.map((ingredient: {item: string}, index: number) => (
                      <Text pt='2' fontSize='sm'>
                        {index + 1}. {ingredient.item}
                      </Text>
                    ))}

                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Instructions
                    </Heading>
                    {currentRecipe.instructions.map((instruction: {item: string}, index: number) => (
                      <Text pt='2' fontSize='sm'>
                        {index + 1}. {instruction.item}
                      </Text>
                    ))}
                  </Box>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='outline' colorScheme='teal' onClick={() => {handleRemoveRecipe()}}>
                    Delete
                  </Button>
                  <Button variant='solid' colorScheme='teal' onClick={() => {onOpen(); setIsEdit(true)}}>
                    Edit
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

        }

      </Container>
      <CreateRecipeModal isEdit={isEdit} recipeIndex={recipeIndex} currentRecipe={currentRecipe} isOpen={isOpen} onClose={onClose} getRecipes={getRecipes} allRecipes={allRecipes}/>
    </>
  )
}
