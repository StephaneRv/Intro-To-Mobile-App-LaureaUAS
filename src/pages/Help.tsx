import { IonContent, IonPage } from '@ionic/react';
import styled from 'styled-components';

const Help: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <TextContainer>If you need help, contact the developper at riveaux.stephane@gmail.com</TextContainer>
      </IonContent>
    </IonPage>
  );
};

export default Help;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  padding: 0 25px;
  max-width: 90%;
  `;
