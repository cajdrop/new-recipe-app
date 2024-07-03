import AppHeader from '../components/AppHeader'
import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import CardsContainer from '../components/CardsContainer'
import CreateRecipeModal from '../components/CreateRecipeModal'


export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <AppHeader />
      <Flex align={'center'} justify={'right'}>
      <Button onClick={onOpen} variant='outline' mt='30px' mr='35px' colorScheme='teal'>
          Create new recipe
        </Button>
      </Flex>

      <CardsContainer />
      <CreateRecipeModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}
