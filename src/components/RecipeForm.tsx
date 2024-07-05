import { Box, Card, CardHeader, CardFooter, CardBody, Heading, Input, Button, Text, ButtonGroup, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from 'react';
import SubFormCard from "./SubFormCard";

interface IFormProps {
    currentStepIndex: number;
    setCurrentStepIndex: Dispatch<SetStateAction<number>>;
  }
  
export default function RecipeForm({currentStepIndex, setCurrentStepIndex} : IFormProps) {


    const [recipeInstructions, setRecipeInstructions] = useState([{item: 'lalal'}, {item: 'lelel'}, {item: 'lilili'}, ])
    function removeInstruction(index: number){
        const newInstructions = [... recipeInstructions]
        newInstructions.splice(index, 1)
        setRecipeInstructions(newInstructions)
    }
    function addNewInstruction(newItem: any){
        if(newItem !== ''){
            const newInstructions = [... recipeInstructions]
            newInstructions.push({item: newItem})
            setRecipeInstructions(newInstructions)
        }
    }
    
    const [recipeIngredients, setRecipeIngredients] = useState([{item: 'lalal'}, {item: 'lelel'}, {item: 'lilili'}, ])
    function removeIngredient(index: number){
        const newIngredients = [... recipeIngredients]
        newIngredients.splice(index, 1)
        setRecipeIngredients(newIngredients)
    }

    function addNewIngredient(newItem: any){
        if(newItem !== ''){
            const newIngredients = [... recipeIngredients]
            newIngredients.push({item: newItem})
            setRecipeIngredients(newIngredients)
        }
    }

  return (
    <Box mt='30px' mb='30px'>
        <Card color={'#718096'}>
            {currentStepIndex === 0 && 
                <>
                <CardHeader>
                    <Heading size='md'> Recipe title</Heading>
                </CardHeader>
                <CardBody>
                    <Input />
                </CardBody>
                </>
            }

            {/* Ingredients form */}
            {currentStepIndex === 1 && 
                <>
                <SubFormCard heading='Ingredients' recipeItems={recipeIngredients} removeItem={removeIngredient} addNewItem={addNewIngredient}/>
                </>
            }

            {/* Instructions form */}
            {currentStepIndex === 2 && 
                <>
                <SubFormCard heading='instructions' recipeItems={recipeInstructions} removeItem={removeInstruction} addNewItem={addNewInstruction}/>
                </>
            }

            <CardFooter>
                {currentStepIndex > 0 &&
                <Button color={'teal'} onClick={() => setCurrentStepIndex(currentStepIndex - 1)}>Back</Button>
                }
                {currentStepIndex < 2 && 
                    <Button color={'teal'} onClick={() => setCurrentStepIndex(currentStepIndex + 1)}>Next</Button>
                }
            </CardFooter>
        </Card>
    </Box>
  )
}
