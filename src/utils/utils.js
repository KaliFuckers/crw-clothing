export const _increaseQuatity = ({ items, id }) => {
  return items.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const _decreaseQuantity = ({items, id}) => {
  return items.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  );
}
