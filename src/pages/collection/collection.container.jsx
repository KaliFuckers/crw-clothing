import { compose } from "redux";
import { connect } from "react-redux";
import withSpinner from "../../components/with-spinner";
import { createStructuredSelector } from "reselect";
import { selectorCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectorCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner,
)(CollectionPage);

export default CollectionPageContainer;