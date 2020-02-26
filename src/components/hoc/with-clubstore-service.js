import React from 'react';
import { ClubstoreServiceConsumer } from '../clubstore-service-context';

const withClubstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <ClubstoreServiceConsumer>
        {
          (clubstoreService) => {
            return (<Wrapped {...props}
                clubstoreService={clubstoreService}/>);
          }
        }
      </ClubstoreServiceConsumer>
    );
  }
};

export default withClubstoreService;