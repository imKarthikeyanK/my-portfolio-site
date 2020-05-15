import React, { Suspense, lazy } from 'react';
import Home from './components/Home';
import Gallery from './components/Gallery';
import TechStack from './components/TechStack';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.scss';

const schemaMarkup = {
  '@context': 'http:schema.org/',
  '@type': 'Portfolio',
  name: 'Karthikeyan K - Full Stack Python React developer',
  alternateName: 'Karthikeyan K',
  url: '',
  image: ''
}

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      aminationDelayForNavbar: 0.2,
      showInNavbar: true
    },
    {
      pageLink: '/tech',
      view: TechStack,
      displayName: 'Tech',
      aminationDelayForNavbar: 0.2,
      showInNavbar: true
    },
    {
      pageLink: '/projects',
      view: Projects,
      displayName: 'Projects',
      aminationDelayForNavbar: 0.2,
      showInNavbar: true
    },
    {
      pageLink: '/gallery',
      view: Gallery,
      displayName: 'Gallery',
      aminationDelayForNavbar: 0.2,
      showInNavbar: true
    },
    {
      pageLink: '/connect',
      view: SocialMedia,
      displayName: 'Connect',
      aminationDelayForNavbar: 0.2,
      showInNavbar: true
    }
  ]
  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Router>
        <Suspense fallback={<div className="lazy"></div>}>
          <Route render={({ location }) => (
            <div className="Almighty-Router">
              <NavBar pages={pages} />
              <Switch location={location}>
                {pages.map((page, index) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      render={({ match }) => (
                        <page.view key={match.params.statusCode || index} />
                      )}
                      key={index}
                    />
                  )
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
          />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
