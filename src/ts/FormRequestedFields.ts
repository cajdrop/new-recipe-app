type IItem = {
    item: string
}

export interface IFormRequestedFields {
    title: string;
    description: string;
    ingredients: Array<IItem>;
    instructions: Array<IItem>;
}