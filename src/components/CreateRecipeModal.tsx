import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'
import RecipeFormStepper from './RecipeFormStepper';
import RecipeForm from './RecipeForm';
import { useState } from 'react';
  
interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

export default function CreateRecipeModal({isOpen, onClose}: IModalProps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent  maxWidth={'45vw'}>
      <ModalHeader>Add a new recipe</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <RecipeFormStepper currentStepIndex={currentStepIndex} setCurrentStepIndex={setCurrentStepIndex} />
        <RecipeForm currentStepIndex={currentStepIndex} setCurrentStepIndex={setCurrentStepIndex} />
      </ModalBody>

      <ModalFooter>
        <Button variant='outline' colorScheme='teal'>Add recipe</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}
