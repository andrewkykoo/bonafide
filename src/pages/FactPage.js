import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import facts from './fact-content';
import NotFoundPage from './NotFoundPage';

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

  if (!fact) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{fact.title}</h1>
      <p>Upvotes: {factInfo.upvotes} upvote(s)</p>
      {fact.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
};

export default FactPage;
