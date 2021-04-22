import "./collection-preview.styles.scss";
import PropTypes from "prop-types";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items.filter((item, index) => index < 4).map(({id, name, price, imageUrl}) => {
          return (
            <CollectionItem
              key={id}
              name={name}
              price={price}
              id={id}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default CollectionPreview;
