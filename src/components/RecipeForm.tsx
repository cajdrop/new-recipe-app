import { Box, Card, CardHeader, CardFooter, CardBody, Heading, Input, Button, Textarea } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import SubFormCard from "./SubFormCard";
import { IFormRequestedFields } from "../ts/FormRequestedFields";
import { UseFormRegister, FieldErrors } from "react-hook-form"

interface IFormProps {
    currentStepIndex: number;
    setCurrentStepIndex: Dispatch<SetStateAction<number>>;
    register: UseFormRegister<IFormRequestedFields>;
    errors: FieldErrors;
    listOfIngredients: Array<IRecipeItems>;
    setListOfIngredients: Dispatch<SetStateAction<Array<IRecipeItems>>>
    listOfInstructions: Array<IRecipeItems>;
    setListOfInstructions: Dispatch<SetStateAction<Array<IRecipeItems>>>
    currentRecipe: any;
    isEdit: boolean
  }

interface IRecipeItems {
    item: string;
}
  
export default function RecipeForm({currentStepIndex, setCurrentStepIndex, register, errors, setListOfIngredients, listOfIngredients, setListOfInstructions, listOfInstructions, currentRecipe, isEdit} : IFormProps) {

    function removeInstruction(index: number){
        const newInstructions = [... listOfInstructions]
        newInstructions.splice(index, 1)
        setListOfInstructions(newInstructions)
    }
    function addNewInstruction(newItem: any){
        if(newItem !== ''){
            const newInstructions = [... listOfInstructions]
            newInstructions.push({item: newItem})
            setListOfInstructions(newInstructions)
        }
    }
    
    function removeIngredient(index: number){
        const newIngredients = [... listOfIngredients]
        newIngredients.splice(index, 1)
        setListOfIngredients(newIngredients)
    }

    function addNewIngredient(newItem: any){
        if(newItem !== ''){
            const newIngredients: any[] = [... listOfIngredients]
            newIngredients.push({item: newItem})
            setListOfIngredients(newIngredients)
        }
    }

    function handleNext(){
        if(currentStepIndex === 2 && listOfIngredients.length < 1){
            console.log('nope')
        }else{
            setCurrentStepIndex(currentStepIndex + 1)
        }
        
    }

    useEffect(()=>{
        if(isEdit){
            setListOfIngredients(currentRecipe.ingredients)
            setListOfInstructions(currentRecipe.instructions)
        }
        console.log(currentRecipe, 'current')
    }, [])

  return (
        <Box mt='30px' mb='30px'>
            <Card color={'#718096'}>
                {currentStepIndex === 0 && 
                    <>
                    <CardHeader>
                        <Heading size='md'> Recipe title</Heading>
                    </CardHeader>
                    <CardBody>
                        <Input {...register("title", { required: true })} defaultValue={currentRecipe.title}/>
                        {errors.title && <span>This field is required.</span>}
                    </CardBody>
                    </>
                }

                {currentStepIndex === 1 && 
                    <>
                    <CardHeader>
                        <Heading size='md'>Description</Heading>
                    </CardHeader>
                    <CardBody>
                        <Textarea {...register("description", { required: true })} defaultValue={currentRecipe.description}/>
                        {errors.description && <span>This field is required.</span>}
                    </CardBody>
                    </>
                }

                {/* Ingredients form */}
                {currentStepIndex === 2 && 
                    <>
                    <SubFormCard heading='Ingredients' recipeItems={listOfIngredients} removeItem={removeIngredient} addNewItem={addNewIngredient}/>
                    {listOfIngredients.length < 1 && <span>Add at least one ingredient.</span>}
                    </>
                }

                {/* Instructions form */}
                {currentStepIndex === 3 && 
                    <>
                    <SubFormCard heading='instructions' recipeItems={listOfInstructions} removeItem={removeInstruction} addNewItem={addNewInstruction}/>
                    {listOfInstructions.length < 1 && <span>Add at least one instruction.</span>}
                    </>
                }

                <CardFooter>
                    {currentStepIndex > 0 &&
                    <Button color={'teal'} onClick={() => setCurrentStepIndex(currentStepIndex - 1)}>Back</Button>
                    }
                    {currentStepIndex < 3 && 
                    <Button color={'teal'} onClick={() => handleNext()}>Next</Button>
                    }
                </CardFooter>
            </Card>
        </Box>
  )
}
