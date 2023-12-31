import { storeActionsTypes } from "./storeActionsType";
const storeReducer = (state, action) => {
  switch (action.type) {
    case storeActionsTypes.FETCH_CART_DATA:
      return {
        ...state,
        cart: action.payload
      }
      case storeActionsTypes.CART_LOADER:
      return {
        ...state,
        loading: action.payload
      }
      case storeActionsTypes.TOGGLE_CART_DRAWER:
      return {
        ...state,
        isCartDrawerOpen: action.payload
      }
    default:
      return state
  }
}
export default storeReducer;