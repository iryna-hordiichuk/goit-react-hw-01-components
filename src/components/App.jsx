import {
  Section,
  Container,
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';

import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import user from 'data/user.json';

export const App = () => {
  console.log(data);
  console.log(friends);
  return (
    <Section>
      <Container>
        <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        <Statistics title={'Upload stats'} stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </Container>
    </Section>
  );
};
