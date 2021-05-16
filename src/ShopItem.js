import React from 'react';

export class ShopItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        item: {
            name: 'Loading...',
            description: 'Loading...',
            images: {
                information: '#'
            }
        }
      };
    this.fetchItem = this.fetchItem.bind(this);
  }

  componentDidMount() {
      this.fetchItem();
  }

  async fetchItem() {
      const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`);
      const item = await fetchItem.json();
      this.setState({item: item.data.item});
    }

  render() {
    return (
      <div>
        <h1>{this.state.item.name}</h1>
        <h2>{this.state.item.description}</h2>
        <img src={this.state.item.images.information} alt={this.state.item.name} />
      </div>
    );
  }
}
