import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setInput } from "../../redux/actions/loginActions";
import { handlePost } from "../../redux/actions/PostsActions";
import BasicButton from "../common/Buttons/BasicButton";

export class MyEditor extends Component {
  handlePosts = () => {
    const { content, title, onPost } = this.props;
    onPost({ title, content });
  };
  handleInput = ({ target: { value, name } }) => {
    const { onInputChange } = this.props;
    onInputChange({ field: name, value });
  };
  render() {
    const { content, title, message, error, history } = this.props;
    if (message) {
      setTimeout(() => {
        history.push(`/`);
      }, 3000);
    }
    return (
      <div>
        {message || error}
        <div class="form-group">
          <input
            value={title}
            name="title"
            type="text"
            class="form-control"
            placeholder="Title"
            onChange={this.handleInput}
          />
          <br />
          <textarea
            value={content}
            name="content"
            class="form-control"
            id="exampleFormControlTextarea3"
            rows="22"
            placeholder="Tell a story..."
            onChange={this.handleInput}
          />
          <br />
          <BasicButton
            onClick={this.handlePosts}
            title="Create a Post"
            className="btn-primary"
          />
        </div>
      </div>
    );
  }
}
export const mapStateToProps = ({ posts }) => ({
  error: posts.error,
  message: posts.message,
  title: posts.post.title,
  content: posts.post.content
});

export const mapDispatchToProps = dispatch => ({
  onInputChange: payload => dispatch(setInput(payload)),
  onPost: payload => dispatch(handlePost(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MyEditor));
