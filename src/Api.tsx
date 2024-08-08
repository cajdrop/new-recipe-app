import { get, ref } from 'firebase/database'
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