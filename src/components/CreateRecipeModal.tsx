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
import { useForm, SubmitHandler } from "react-hook-form"
import { IFormRequestedFields } from '../ts/FormRequestedFields';
import { addNewRecipe, updateRecipe } from '../Api';


interface IRecipeItems {
  item: string;
}

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentRecipe?: any;
    recipeIndex?: number
    isEdit: boolean
    getRecipes: () => void;
    allRecipes: Array<{}>;
  }

export default function CreateRecipeModal({isOpen, onClose, currentRecipe, isEdit, recipeIndex, getRecipes, allRecipes}: IModalProps) {

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormRequestedFields>()
  const onSubmit: SubmitHandler<IFormRequestedFields> = async (data) =>{
    if(data && listOfIngredients.length > 0 && listOfInstructions.length > 0){
      if(isEdit && recipeIndex){
        updateRecipe({
          title: data.title ? data.title : currentRecipe.title,
          description: data.description ? data.description : currentRecipe.description,
          ingredients: listOfIngredients,
          instructions: listOfInstructions
        }, recipeIndex)
      }else{
        addNewRecipe({
          title: data.title,
          description: data.description,
          ingredients: listOfIngredients,
          instructions: listOfInstructions
        }, allRecipes.length)
      }
      reset()
      setCurrentStepIndex(0)
      setListOfIngredients([])
      setListOfInstructions([])
      getRecipes()
      onClose()
    }
  }

    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [listOfIngredients, setListOfIngredients] = useState(Array<IRecipeItems>)
    const [listOfInstructions, setListOfInstructions] = useState(Array<IRecipeItems>)
    
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
        <Button variant='outline' colorScheme='teal' isDisabled={currentStepIndex !==3} onClick={handleSubmit(onSubmit)}>{isEdit ? 'Update recipe' : 'Add recipe'}</Button>
      </ModalFooter>
    </ModalContent>
    </form>
  </Modal>
  )
}
