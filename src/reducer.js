export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => Number(item.price) + amount, 0);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let arrBasket = [...state.basket];
      const index = state.basket.findIndex((object) => {
        return object.id === action.item.id;
      });
      if (index >= 0) {
        arrBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: arrBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
