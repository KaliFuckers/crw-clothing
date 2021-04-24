export const addItem = ({ items, payload }) => {
  // const { items } = state;
  // const index = items.findIndex((item) => item.id === action.payload.id);
  // if (index === -1) {
  //   state.items.push(action.payload);
  //   return {
  //     ...state,
  //     items: state.items,
  //   };
  // } else {
  //   const item = items[index];
  //   item.cuantity += 1;
  //   item.price *= item.cuantity;
  //   items[index] = item;

  //   return {
  //     ...state,
  //     items: items,
  //   };
  // }

  console.log(items);

  const itemExist = items.find((item) => item.id === payload.id);
  if (itemExist) {
    return items.map((item) =>
      item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  else{
    return [...items, {...payload, quantity: 1}]
  }
};
