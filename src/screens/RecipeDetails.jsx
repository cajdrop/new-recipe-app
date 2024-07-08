import React from 'react'
import AppHeader from '../components/AppHeader'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Container, Flex, Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Divider, Box, Text, ButtonGroup, Button } from '@chakra-ui/react'

export default function RecipeDetails() {

  const recipesDetails = [
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
    ]
    const recipeIndex = window.location.href.split("/").pop()
    const currentRecipe = recipesDetails.find((x, index) => index === Number(recipeIndex))
  return (
    <>
      <AppHeader />
      <Flex align={'center'} justify={'left'}>
      <Button variant='outline' mt='10px' ml='35px' colorScheme='teal' as={ReactRouterLink} to='/dashboard'>
          Back
      </Button>
      </Flex>
      <Container mt='10px'>
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
                    {currentRecipe.ingredients.map((ingredient, index) => (
                      <Text pt='2' fontSize='sm'>
                        {index + 1}. {ingredient}
                      </Text>
                    ))}

                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Instructions
                    </Heading>
                    {currentRecipe.instructions.map((instruction, index) => (
                      <Text pt='2' fontSize='sm'>
                        {index + 1}. {instruction}
                      </Text>
                    ))}
                  </Box>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='outline' colorScheme='teal'>
                    Delete
                  </Button>
                  <Button variant='solid' colorScheme='teal'>
                    Edit
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

      </Container>
    </>
  )
}
