import Heading from '../common/Heading';
import Layout from '../common/Layout';
import UsersSwitch from '../features/users/UsersSwitch';
import Messages from '../features/messages/Messages';

function App() {
  return (
    <Layout>
      <Heading>Chat application</Heading>
      <UsersSwitch />
      <Messages />
    </Layout>
  );
}

export default App;
