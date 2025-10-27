import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';

// Lazy load components
const Home = lazy(() => import("./components/Pages/Home"));
const About = lazy(() => import("./components/Pages/About"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;