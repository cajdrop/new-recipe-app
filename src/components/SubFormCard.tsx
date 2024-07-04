import { Box, CardHeader, CardBody, Heading, Input, Button, Text, ButtonGroup, Stack } from "@chakra-ui/react";

interface IRecipeItems {
    item: string;
}

interface ISubFormProps {
    heading: string;
    recipeItems: Array<IRecipeItems>;
    removeItem: (index: number) => void;
}

export default function SubFormCard({heading, recipeItems, removeItem}: ISubFormProps) {
  return (
    <>
    <CardHeader>
        <Heading size='md'>{heading}</Heading>
    </CardHeader>
    <CardBody>
        <Box>
            {recipeItems.map((item, index) => (
                <>
                <Stack mb='15px' display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Text> - {item.item}</Text>
                    <Text variant={'outline'} fontSize={'12px'} cursor={'pointer'} color={'red'} onClick={()=> removeItem(index)}>X</Text>
                </Stack>
                </>
            ))}
        </Box>
        <Input mt='15px' />
        <ButtonGroup gap='1' display={'flex'} justifyContent={'flex-end'}>
            <Button mt='10px' fontWeight={800}>+</Button>
        </ButtonGroup>
    </CardBody>
</>
  )
}
