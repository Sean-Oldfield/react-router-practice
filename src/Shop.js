import React from 'react';
import { Link } from 'react-router-dom';

export class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.fetchItems = this.fetchItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  async fetchItems() {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const items = await data.json();
    this.setState({ items: items.data });
    }

  render() {
    const items = this.state.items;

    return (
      <div>
        <h1>Welcome to my Shop</h1>
          {items.map(item => {
            return ( 
            <Link to={`/shop/${item.itemId}`}>
              <h3 key={item.itemId}>{item.item.name}</h3>
            </Link>
            );
          })}
      </div>
    );
  }
}
