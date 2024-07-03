import { Box, Card, CardHeader, CardFooter, CardBody, Heading, Input, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from 'react';

interface IFormProps {
    currentStepIndex: number;
    setCurrentStepIndex: Dispatch<SetStateAction<number>>;
  }
  
export default function RecipeForm({currentStepIndex, setCurrentStepIndex} : IFormProps) {
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

            {currentStepIndex === 1 && 
                <>
                <CardHeader>
                    <Heading size='md'> Ingredients</Heading>
                </CardHeader>
                <CardBody>
                    <Input />
                </CardBody>
                </>
            }

            {currentStepIndex === 2 && 
                <>
                <CardHeader>
                    <Heading size='md'> Instructions</Heading>
                </CardHeader>
                <CardBody>
                    <Input />
                </CardBody>
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
