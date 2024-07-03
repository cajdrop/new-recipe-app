import { Card, CardHeader, CardFooter, CardBody, Heading, Text, Button } from '@chakra-ui/react'

export default function RecipeCard() {
  return (
    <Card color={'#718096'}>
        <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
            <Button color={'teal'}>View here</Button>
        </CardFooter>
    </Card>

  )
}
