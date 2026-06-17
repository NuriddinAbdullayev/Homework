import {createStore} from "redux"
import cakesReducer from "./cakes/cakesReducer"

const magazin = createStore(cakesReducer)

export default magazin