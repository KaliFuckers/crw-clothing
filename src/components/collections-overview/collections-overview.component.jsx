import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectorCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = (props) => {
  const { collections } = props;
  return (
    <div className="collection-overview">
      {collections
        ? collections.map((collection) => {
            return (
              <CollectionPreview
                key={collection.id}
                title={collection.title}
                items={collection.items}
              />
            );
          })
        : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectorCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
