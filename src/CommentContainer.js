import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbDownComment, thumbUpComment, removeComment, editComment } from './actions';

const mapDispatchToProps = dispatch => ({
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  tumbUpComment: (id) => dispatch(thumbUpComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (id) => dispatch(editComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);