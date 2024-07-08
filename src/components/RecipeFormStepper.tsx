import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box
  } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react';

  interface IStepperProps {
    currentStepIndex: number;
    setCurrentStepIndex: Dispatch<SetStateAction<number>>;
  }

  const steps = [
    { title: 'First', description: 'Title' },
    { title: 'Second', description: 'Description' },
    { title: 'Third', description: 'Ingredients' },
    { title: 'Fourth', description: 'Instructions' },
  ]
  

export default function RecipeFormStepper({currentStepIndex, setCurrentStepIndex} : IStepperProps) {
  return (
        <Stepper colorScheme='teal' index={currentStepIndex} > 
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setCurrentStepIndex(index)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
    
              <Box flexShrink='0'>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
    
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
    )
}
