import React, { useRef } from "react";
import "./ExploreContainer.css";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonPage,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/react";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const weightInput = useRef<HTMLIonInputElement>(null);
  const heightInput = useRef<HTMLIonInputElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-content ion-padding">
        <IonItem>
          <IonLabel position="floating">Your Height</IonLabel>
          <IonInput ref={heightInput} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Your Weight</IonLabel>
          <IonInput ref={weightInput} />
        </IonItem>
        <IonGrid className="ion-text-center ion-margin">
          <IonRow>
            <IonCol>
              <IonButton>
                <IonIcon icon={calculatorOutline} slot="start" /> Calculate
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton>
                <IonIcon icon={refreshOutline} slot="start" /> Reset
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ExploreContainer;
