import { IonContent, IonPage } from '@ionic/react';
import styled from 'styled-components';

const AboutTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <TextContainer>App developped by Stéphane Riveaux</TextContainer>
      </IonContent>
    </IonPage>
  );
};

export default AboutTab;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  padding: 0 0px;
  max-width: 100%;
  `;