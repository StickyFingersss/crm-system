import { ClientMax } from '../../components/ClientList/ClientMax';
import { Comments } from '../../components/Comments/Comments';
import { useState } from 'react';

export const Customer = () => {
  const [getAccess, setGetAccess] = useState(true);

  if (getAccess) {
    return (
      <>
        <div>Client Page</div>
        <div className="container">
          <ClientMax setGetAccess={setGetAccess} />
          <Comments />
        </div>
      </>
    );
  } else {
    return <h1>We cant find this customer in your team</h1>;
  }
};
// const session = useMySelector((store) => store.isAutenticatedSlice.session);
// (OneCustomer.team_id === session.team_id && OneCustomer.manager_id === session.userId) ||
//     (session.isAdmin && OneCustomer.team_id === session.team_id)
