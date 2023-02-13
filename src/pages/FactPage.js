import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import facts from './fact-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import useUser from '../hooks/useUser';

const FactPage = () => {
  const [factInfo, setFactInfo] = useState({
    upvotes: 0,
    comments: [],
    canUpvote: false,
  });
  const { canUpvote } = factInfo;
  const { factId } = useParams();

  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadFactInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/facts/${factId}`, { headers });
      const newFactInfo = response.data;
      setFactInfo(newFactInfo);
    };

    if (!isLoading) {
      loadFactInfo();
    }
  }, [isLoading, user]);

  const fact = facts.find((fact) => fact.title === factId);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(`/api/facts/${factId}/upvote`, null, {
      headers,
    });
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
        {user ? (
          <button onClick={addUpvote}>
            {canUpvote ? 'Upvote' : 'Already upvoted'}
          </button>
        ) : (
          <button>Log in to upvote</button>
        )}
        <p>Upvotes: {factInfo.upvotes} upvote(s)</p>
      </div>

      {fact.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user ? (
        <AddCommentForm
          title={factId}
          onFactUpdated={(updatedFact) => setFactInfo(updatedFact)}
        />
      ) : (
        <button>Log in to comment</button>
      )}
      <CommentsList comments={factInfo.comments} />
    </>
  );
};

export default FactPage;
