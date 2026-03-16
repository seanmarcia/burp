import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Enlightenment from './pages/Enlightenment';
import ArticleDetail from './pages/ArticleDetail';
import Competitions from './pages/Competitions';
import SOFB from './pages/SOFB';
import SOFBRules from './pages/SOFBRules';
import SOFBRegistration from './pages/SOFBRegistration';
import SOFBSponsorship from './pages/SOFBSponsorship';
import About from './pages/About';
import PreviousOfficers from './pages/PreviousOfficers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />
          <Route path="enlightenment" element={<Enlightenment />} />
          <Route path="enlightenment/:slug" element={<ArticleDetail />} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="sofb" element={<SOFB />} />
          <Route path="sofb/rules" element={<SOFBRules />} />
          <Route path="sofb/registration" element={<SOFBRegistration />} />
          <Route path="sofb/sponsorship" element={<SOFBSponsorship />} />
          <Route path="about" element={<About />} />
          <Route path="about/previous-officers" element={<PreviousOfficers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
