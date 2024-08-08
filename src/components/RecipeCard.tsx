import { Link as ReactRouterLink } from 'react-router-dom'
import { Card, CardHeader, CardFooter, CardBody, Heading, Text, Button as CLink } from '@chakra-ui/react'

interface IRecipeDetails{
    title: string;
    description: string;
    ingredients: Array<string>;
    instructions: Array<string>;
}

interface IRecipeCard {
    recipeDetails: IRecipeDetails;
    index: number;
    removeItem: () => void;
}

export default function RecipeCard({recipeDetails, index, removeItem}: IRecipeCard) {
  return (
    <Card color={'#718096'}>
        <CardHeader display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Heading size='md'>{recipeDetails.title}</Heading>
            <Text fontSize={'14px'} cursor={'pointer'} color={'red'} onClick={()=> removeItem()}>X</Text>
        </CardHeader>
        <CardBody>
            <Text>{recipeDetails.description}</Text>
        </CardBody>
        <CardFooter>
            <CLink color={'teal'} as={ReactRouterLink} to={`/recipe-details/${index}`}>
            View recipe
            </CLink>
        </CardFooter>
    </Card>

  )
}
