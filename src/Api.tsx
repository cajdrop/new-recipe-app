import { get, ref, remove, set, update } from 'firebase/database'
import { database } from './firebaseConfig.js'

export const getRecipeDetails = async () => {
    const recipesDetailsRef = ref(database, 'recipes')
    await get(recipesDetailsRef).then((snapshot: any) => {
        if (snapshot.exists()){
            const recipesArray = snapshot.val()
            console.log(snapshot.val(), 'array')
            return recipesArray
        }else{
            console.log('no data')
        }
    })
}

let recipesLength = 0
export const addNewRecipe = async (data: Object) => {
    console.log(getRecipeDetails(), 'getrei')
    const recipesDetailsRef = ref(database, 'recipes/' + recipesLength)
    recipesLength++
    await set(recipesDetailsRef, {...data})
}

export const removeRecipe = async (index: number) => {
    const recipesDetailsRef = ref(database, 'recipes/' + index)
    await remove(recipesDetailsRef)
}

export const updateRecipe = async (data: object, index: number) => {
    const recipesDetailsRef = ref(database, 'recipes/' + index)
    console.log(data, recipesDetailsRef, 'TEEEEEEEEEEEST', index)
    await update(recipesDetailsRef, {...data})
}