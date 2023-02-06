import React from 'react';
import facts from './fact-content';

import FactsList from '../components/FactsList';

const FactsListPage = () => {
  return (
    <>
      <h1>Facts</h1>
      <br />
      <FactsList facts={facts} />
    </>
  );
};

export default FactsListPage;
