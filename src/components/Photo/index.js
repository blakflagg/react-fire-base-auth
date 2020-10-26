import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedImg: null,
      selectedBlob: null
    };
    this.onHandleUpdate = this.onHandleUpdate.bind(this);
  }

  componentDidMount() {}
  onHandleUpdate(e) {
    const newPhotos = [];

    console.log(Object.values(e.target.files));
    this.setState({
      selectedBlob: e.target.files[0],
      selectedImg: URL.createObjectURL(e.target.files[0])
    });
  }

  onHandleUpload = () => {
    this.props.firebase.doUploadFile(this.state.selectedBlob);
  };

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
        <button onClick={this.onHandleUpload}>Upload photo</button>
      </div>
    );
  }
}

export default withFirebase(PhotoPage);
