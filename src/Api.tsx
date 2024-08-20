import { get, ref, remove, set, update } from 'firebase/database'
import { database } from './firebase/firebaseConfig.js'

export const addNewRecipe = async (data: Object, index: number) => {
    const recipesRef = ref(database, 'recipes/' + index)
    await set(recipesRef, {...data})
}

export const removeRecipe = async (index: number) => {
    const recipesRef = ref(database, 'recipes/' + index)
    await remove(recipesRef)
}

export const updateRecipe = async (data: object, index: number) => {
    const recipesRef = ref(database, 'recipes/' + index)
    await update(recipesRef, {...data})
}