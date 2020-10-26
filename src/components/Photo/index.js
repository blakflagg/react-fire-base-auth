import React, { Component } from 'react';

class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedImg: null
    };
    this.onHandleUpdate = this.onHandleUpdate.bind(this);
  }

  onHandleUpdate(e) {
    const newPhotos = [];

    console.log(Object.values(e.target.files));
    this.setState({
      selectedImg: URL.createObjectURL(e.target.files[0])
    });
  }

  render() {
    return (
      <div>
        <h1>Photos</h1>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => this.onHandleUpdate(e)}
          multiple
        />
        <img src={this.state.selectedImg} alt="" height="300" />
      </div>
    );
  }
}

export default PhotoPage;
