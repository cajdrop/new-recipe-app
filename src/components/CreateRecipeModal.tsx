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
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { IFormRequestedFields } from '../ts/FormRequestedFields';
import { addNewRecipe } from '../Api';


interface IRecipeItems {
  item: string;
}

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentRecipe?: any;
    isEdit: boolean
  }

export default function CreateRecipeModal({isOpen, onClose, currentRecipe, isEdit}: IModalProps) {

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormRequestedFields>()
  const onSubmit: SubmitHandler<IFormRequestedFields> = async (data) =>{
    if(data && listOfIngredients.length > 0 && listOfInstructions.length > 0){
      addNewRecipe({
        title: data.title,
        description: data.description,
        ingredients: listOfIngredients,
        instructions: listOfInstructions
      })
      reset()
      setCurrentStepIndex(0)
      console.log(data, 'la data')
      onClose()
    }
  }

    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [listOfIngredients, setListOfIngredients] = useState(Array<IRecipeItems>)
    const [listOfInstructions, setListOfInstructions] = useState(Array<IRecipeItems>)

    useEffect(()=>{
      console.log(currentRecipe, 'currentaaaa')
  }, [])
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <form onSubmit={handleSubmit(onSubmit)}>
    <ModalContent  maxWidth={'45vw'}>
      <ModalHeader>Add a new recipe</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <RecipeFormStepper currentStepIndex={currentStepIndex} setCurrentStepIndex={setCurrentStepIndex} />

          <RecipeForm isEdit={isEdit} currentRecipe={currentRecipe} errors={errors} register={register} currentStepIndex={currentStepIndex} setCurrentStepIndex={setCurrentStepIndex} listOfIngredients={listOfIngredients} setListOfIngredients={setListOfIngredients} listOfInstructions={listOfInstructions} setListOfInstructions={setListOfInstructions} />

      </ModalBody>

      <ModalFooter>
        <Button variant='outline' colorScheme='teal' onClick={handleSubmit(onSubmit)}>{isEdit ? 'Update recipe' : 'Add recipe'}</Button>
      </ModalFooter>
    </ModalContent>
    </form>
  </Modal>
  )
}
