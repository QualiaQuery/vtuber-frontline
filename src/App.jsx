import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VTuberList from './pages/VTuberList';
import VTuberDetail from './pages/VTuberDetail';
import SubmissionForm from './pages/SubmissionForm';
import Matching from './pages/Matching';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vtubers" element={<VTuberList />} />
            <Route path="/matching" element={<Matching />} />
            <Route path="/vtuber/:id" element={<VTuberDetail />} />
            <Route path="/submit" element={<SubmissionForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
