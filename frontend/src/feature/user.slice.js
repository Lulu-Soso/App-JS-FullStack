import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", // BD qui s'appelle "user"
  initialState: {
    userId: null // part de la data suivante userId, de base que l'on ne connait pas, c'est pourquoi le null
  },
  // Fonction que l'on lui passe au store
  reducers: {
    getUser: (state, {payload}) => { // fonction pour récupérer les données de l'utilisateur
      state.userId = payload  // state, c'est l'élément plus qui a data userId
    }
  }
})

export const {getUser} = userSlice.actions; // Pour récupérer dans le composant que l'on veut pour faire un dispatch l'information au store
export default userSlice.reducer;
