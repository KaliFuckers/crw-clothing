import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
const CollectionItem = ({ id, imageUrl, price, name, addItem }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton
      otherProps={{
        className: "custom-button",
        inverted: true,
        onClick: () => addItem({ name, price, id, imageUrl }),
      }}
    >
      Add To Cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
