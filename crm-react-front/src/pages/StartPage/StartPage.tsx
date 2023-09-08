import React from 'react';
import { Link } from 'react-router-dom';

export const StartPage = () => {
  return (
    <>
      <div>StartPage</div>
      <Link to="/todos">To Task list</Link>
      <Link to="/lead">To TeamLead page</Link>
    </>
  );
};
