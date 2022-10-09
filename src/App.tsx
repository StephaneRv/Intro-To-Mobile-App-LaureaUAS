import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonMenuToggle, IonButton, IonToolbar, IonTitle
} from '@ionic/react';

import styled from 'styled-components';

import { IonReactRouter } from '@ionic/react-router';
import { home, informationCircle, menu, cloud } from 'ionicons/icons';

import AboutTab from './pages/About';
import HomeTab from './pages/Home';
import Weather from './pages/Weather';
import Settings from './pages/Settings';
import Help from './pages/Help';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables */
import './theme/variables.css';
import { SideMenu } from './components/SideMenu';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <SideMenu/>
        <IonToolbar>
          <IonMenuToggle>
            <HeaderContainer>
            <IonButton fill="default">
              <IonIcon icon={menu}/>
            </IonButton>
            <TitleContainer>
              <IonTitle>Stéphane App</IonTitle>
            </TitleContainer>
            </HeaderContainer>
          </IonMenuToggle>
        </IonToolbar>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/homeTab">
            <HomeTab />
          </Route>
          <Route exact path="/aboutTab">
            <AboutTab />
          </Route>
          <Route exact path="/weather">
            <Weather />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/">
            <Redirect to="/homeTab" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="black">
          <IonTabButton tab="aboutTab" href="/aboutTab">
            <IonIcon icon={informationCircle} />
          </IonTabButton>
          <IonTabButton tab="homeTab" href="/homeTab">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="weather" href="/weather">
            <IonIcon icon={cloud} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

const HeaderContainer = styled.div`
  display: flex;
  padding-top: 20px;
`;

const TitleContainer = styled.div`
  padding-top: 10px;
`;