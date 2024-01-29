import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    searchTerm: '',
    data: []
}

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
      changeSearcTerm(state, action){
          state.searchTerm = action.payload;
      },
      addCar(state, action){
        //ASSUMPTION
        //action.payload => { name: 'ab', cost:140 }
        state.data.push({
            name: action.payload.name,
            cost: action.payload.cost,
            id: nanoid()
        })
      },
      removeCar(state, action){
          //ASSUMPTION
          //action.payload === id of the car that we want to remove
          const updated = state.data.filter((car)=>{
            return car.id !== action.payload
          });
          state.data = updated;
      }
  }
});

export const {changeSearcTerm, addCar, removeCar} = carsSlice.actions;

export const carReducer = carsSlice.reducer;