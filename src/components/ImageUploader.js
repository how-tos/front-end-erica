// Import React FilePond
import React from 'react';
import axios from 'axios';
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import '../css/image-uploader.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
class ImageUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: []
    };
  }
  componentDidUpdate(prevState) {
    if (this.state.files !== prevState.files) {
      this.uploadCloudinary(this.state.files[0], this.props.selectedPostId);
    }
  };

  uploadCloudinary(file, howtoID) {
    // Cloudinary settings
    let unsignedUploadPreset = 'ia1o6v0w';
    let url = `https://api.cloudinary.com/v1_1/ha5292nce/upload`;

    let xhr = new XMLHttpRequest();
    let fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // File uploaded successfully
        let response = JSON.parse(xhr.responseText);
        console.log('successful upload!', response.secure_url);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        let url = response.secure_url;

        axios.put(`https://how-to-lambda.herokuapp.com/api/how-to/${howtoID}/image`, {image: url})
      }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
  };

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  };

  render() {
    return (
      <div className="App">
        {/* Pass FilePond properties as attributes */}
        <FilePond
          style={{width: '50px'}}
          ref={ref => (this.pond = ref)}
          files={this.state.files}
          allowMultiple={false}
          maxFiles={1}
          // server="/api/"
          oninit={() => this.handleInit()}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
          }}
        />
      </div>
    );
  }
};

export default ImageUploader;