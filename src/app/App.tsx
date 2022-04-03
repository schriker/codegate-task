import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';
import UserSwitch from '../components/UserSwitch/UserSwitch';
import Messages from '../features/messages/Messages';

function App() {
  return (
    <Layout>
      <Heading>Chat application</Heading>
      <UserSwitch />
      <Messages />
    </Layout>
  );
}

export default App;
