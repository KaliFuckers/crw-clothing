import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectorCollectionsFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner.component";
import CollectionOverView from "./collections-overview.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectorCollectionsFetching,
});

// First way
// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   withSpinner(CollectionOverView)
// );

//Better way with compose

//Compose help us to chain function who returns function
//First pasr the component to withSpinner and then pass it to connect
//Remember that connect is a function who return a new function
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverView);

export default CollectionsOverviewContainer;
