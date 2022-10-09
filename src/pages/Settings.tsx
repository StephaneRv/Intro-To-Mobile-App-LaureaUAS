import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonInput, IonItem, IonList, IonItemDivider } from '@ionic/react';
import styled from 'styled-components';

const Settings: React.FC = () => {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Login</IonItemDivider>
          <IonItem>
            <IonInput value={username} placeholder="Username" onIonChange={e => setUsername(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  text-aglin: center;
  `;
