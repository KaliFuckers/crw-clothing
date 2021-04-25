import { _decreaseQuantity, _increaseQuatity } from "../../utils/utils";


export const addItem = ({ items, payload }) => {
  const itemExist = items.find((item) => item.id === payload.id);
  if (itemExist) {
    return _increaseQuatity({ items, id: payload.id });
  } else {
    return [...items, { ...payload, quantity: 1 }];
  }
};

export const deleteItem = ({ items, id }) => {
  return items.filter((item) => item.id !== id);
};

export const increaseQuantity = ({ items, payload }) => {
  return _increaseQuatity({ items, id: payload });
};

export const decreaseQuantity = ({ items, payload }) => {
  const existingItem = items.find(item => item.id === payload);
  if(existingItem.quantity === 1){
    return deleteItem({items, id: payload});
  }
  else{
    return _decreaseQuantity({items, id: payload})
  }
};
