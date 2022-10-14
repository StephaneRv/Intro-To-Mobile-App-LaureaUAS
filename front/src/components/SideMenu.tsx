import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonPage } from '@ionic/react';
import styled from 'styled-components';

export const SideMenu: React.FC = () => (
  <>
  <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <ListContainer>
        <IonList>
          <IonItem>
            <IonButton href='/register' fill="clear" color="dark">register</IonButton>
          </IonItem>
          <IonItem>
            <IonButton href='/login' fill="clear" color="dark">login</IonButton>
          </IonItem>
          <IonItem>
            <IonButton href='/help' fill="clear" color="dark">Help</IonButton>
          </IonItem>
        </IonList>
      </ListContainer>
    </IonContent>
  </IonMenu>
  <IonPage id="main-content"/>
</>
);

const ListContainer = styled.div`
    // padding-top: 50px;
    `;