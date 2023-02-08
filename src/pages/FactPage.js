import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import facts from './fact-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';

const FactPage = () => {
  const [factInfo, setFactInfo] = useState({ upvotes: 0, comments: [] });
  const { factId } = useParams();

  useEffect(() => {
    const loadFactInfo = async () => {
      const response = await axios.get(`/api/facts/${factId}`);

      const newFactInfo = response.data;
      setFactInfo(newFactInfo);
    };

    loadFactInfo();
  }, []);

  const fact = facts.find((fact) => fact.title === factId);

  const addUpvote = async () => {
    const response = await axios.put(`/api/facts/${factId}/upvote`);
    const updatedFact = response.data;
    setFactInfo(updatedFact);
  };

  if (!fact) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{fact.title}</h1>
      <div className='upvotes-section'>
        <button onClick={addUpvote}>Upvote</button>
        <p>Upvotes: {factInfo.upvotes} upvote(s)</p>
      </div>

      {fact.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <AddCommentForm
        title={factId}
        onFactUpdated={(updatedFact) => setFactInfo(updatedFact)}
      />
      <CommentsList comments={factInfo.comments} />
    </>
  );
};

export default FactPage;
