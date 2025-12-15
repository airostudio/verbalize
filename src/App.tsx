import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Registration from './components/Registration';
import Test from './components/Test';
import Payment from './components/Payment';
import Results from './components/Results';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/test" element={<Test />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
