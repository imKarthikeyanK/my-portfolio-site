import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import Home from './components/home';
import Photography from './components/Photography';
import TechStack from './components/TechStack';
import NavBar from './components/Navbar';
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
      pageLink: '/tech-stack',
      view: TechStack,
      displayName: 'Tech Stack',
      aminationDelayForNavbar: 0.2,
      showInNavbar: true
    },
    {
      pageLink: '/photography',
      view: Photography,
      displayName: 'PhotoGraphy',
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
