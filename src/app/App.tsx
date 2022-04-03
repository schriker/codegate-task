import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';
import UserSwitch from '../components/UserSwitch/UserSwitch';

function App() {
  return (
    <Layout>
      <Heading>Chat application</Heading>
      <UserSwitch />
    </Layout>
  );
}

export default App;
