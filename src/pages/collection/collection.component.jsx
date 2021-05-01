import { selectorCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = (props) => {
  const { collection } = props;
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            price={item.price}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectorCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
