import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
};

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
};
    
const editComment = function editComment(id) {
  return {
    type: EDIT_COMMENT,
    id
  } 
};
    
function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
};

export const thumbDownComment = function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: uuid.v4()
  }
};

export default {ADD_COMMENT};
export {addComment};
export {removeComment};
export {thumbUpComment};
export {editComment};