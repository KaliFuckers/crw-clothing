import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import SHOP_DATA from "./shop.data.js";

class ShopPage extends Component {
  constructor(props) {
    super();
    console.log(SHOP_DATA);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        <h1>Shop Page</h1>
        {this.state.collections.map((collection) => {
          return (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={collection.items}
            />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
