import { get, ref, remove } from 'firebase/database'
import { database } from './firebaseConfig.js'

export const getRecipeDetails = () => {
    const recipesDetailsRef = ref(database, 'recipes')
    get(recipesDetailsRef).then((snapshot: any) => {
        if (snapshot.exists()){
            const recipesArray = snapshot.val()
            console.log(recipesArray, 'array')
            return recipesArray
        }else{
            console.log('no data')
        }
    })
}

export const removeRecipe = async (index: number) => {
    const recipesDetailsRef = ref(database, 'recipes/' + index)
    await remove(recipesDetailsRef)
}