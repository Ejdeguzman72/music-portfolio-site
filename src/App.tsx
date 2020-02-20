import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBarComponent } from './components/home/navbar-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { HomeComponent } from './components/home/home-component';
import { AboutMeComponent } from './components/about-me/about-me-component';
import { Switch, Route } from 'react-router'; 
import { MusicComponent } from './components/music/music-component';
import { ContactMeComponent } from './components/contact/contact-me-component';
import { SocialMediaBarComponent } from './components/home/social-media-component';
import './include/bootstrap';
import { MusicSinglesComponent } from './components/music/singles-component';
import { MusicAlbumsComponent } from './components/music/music-albums-component';
import { MusicPerformancesComponent } from './components/music/music-performances-component';
import { MusicTestComponent } from './components/music/music-test-component';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
      <SocialMediaBarComponent />
        <NavBarComponent />
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/aboutme" component={AboutMeComponent} />
          <Route path="/music" component={MusicComponent} />
          <Route path="/contact-me" component={ContactMeComponent} />
          <Route path="/music-singles" component={MusicSinglesComponent} />
          <Route path="/music-albums" component={MusicAlbumsComponent} />
          <Route path="/music-performances" component={MusicPerformancesComponent} />
          <Route path="/https://open.spotify.com/artist/2YHRZfwlJv8q8P0RVlmc3Z?si=8re1-QftSWmxa-nxCFriaw" />
          <Route path="/https://www.google.com" />
          <Route path="/music-test" component={MusicTestComponent}/>
          <Route component={HomeComponent} />
        </Switch>
      </HashRouter>
      
    </div>
  );
}

export default App;
