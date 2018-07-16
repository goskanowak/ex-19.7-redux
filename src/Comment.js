import React from 'react';

export const Comment = (
  { text, 
    votes, 
    id, 
    thumbUpComment, 
    thumbDownComment, 
    removeComment, 
    editComment }) => 
      <li>{text} 
        <span>votes: {votes}</span>
        <button onClick={() => 
          thumbUpComment(id)}> Thumb up
        </button>
        <button onClick={() => 
          thumbDownComment(id)}> Thumb Down
        </button>
        <button onClick={() => 
          removeComment(id)}> Remove 
        </button>
        <button onClick={() => 
          editComment(id)}> Edit 
        </button>
      </li>;

export default Comment;