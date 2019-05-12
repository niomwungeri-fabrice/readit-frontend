import React, { Component } from "react";
import BasicButton from "../common/Buttons/BasicButton";

class MyEditor extends Component {
  handlePosts = () => {
      alert("post created successfully");
  };
  render() {
    return (
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Title" />
        <br />
        <textarea
          class="form-control"
          id="exampleFormControlTextarea3"
          rows="22"
          placeholder="Tell a story..."
        />
        <br />
        <BasicButton
          onClick={this.handlePosts}
          title="Create a Post"
          className="btn-primary"
        />
      </div>
    );
  }
}

export default MyEditor;
