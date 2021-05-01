// import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.component";
// const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
// const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends Component {
  async componentDidMount() {

    this.props.fetchCollectionsStart();
    //with redux thunk
    // this.props.fetchCollectionsStartAsync();
    // const collectionsRef = FirebaseServices.firestore.collection("collections");
    //Second way
    // collectionsRef.get().then((snapshot) => {
    //   const collections = FirebaseServices.convertCollectionsSnapshotToMap(
    //     snapshot
    //   );
    //   this.props.setCollections(collections);
    //   this.setState({
    //     loading: false,
    //   });
    // });
    //First way
    // collectionsRef.onSnapshot((snapshot) => {
    //   const collections = FirebaseServices.convertCollectionsSnapshotToMap(
    //     snapshot
    //   );
    //   this.props.setCollections(collections);
    //   this.setState({
    //     loading: false,
    //   });
    // });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={`${match.path}/`}
            // render={(props) => (
            //   <CollectionOverviewWithSpinner
            //     isLoading={isCollectionFetching}
            //     {...props}
            //   />
            // )}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            //Shop component don't have to care if collections are loaded or not
            // render={(props) => (
            //   <CollectionPageWithSpinner
            //     isLoading={!isCollectionLoaded}
            //     {...props}
            //   />
            // )}
            component={CollectionPageContainer}
          />
        </Switch>
      </div>
    );
  }
}

// Work with redux
// const mapDispatchToProps = (dispatch) => ({
//   // setCollections: (collections) => dispatch(setCollections(collections)),
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
