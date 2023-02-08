import React, { useState } from 'react';
import axios from 'axios';

const AddCommentForm = ({ title, onFactUpdated }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const response = await axios.post(`/api/facts/${title}/comments`, {
      postedBy: name,
      text: commentText,
    });

    const updatedFact = response.data;

    onFactUpdated(updatedFact);
    setName('');
    setCommentText('');
  };

  return (
    <div id='add-comment-form'>
      <h3>Add a comment</h3>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows='5'
          cols='50'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button onClick={addComment}>Add</button>
    </div>
  );
};

export default AddCommentForm;
