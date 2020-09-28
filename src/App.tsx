import React from 'react';
import {
    IonApp,
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
    <IonApp>
        <IonHeader>
            <IonToolbar color='primary'>
                <IonTitle>
                    Invest
                </IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>
            <IonItem>
                <IonLabel position="floating">Prix</IonLabel>
                <IonInput id='inputPrice'/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Rent</IonLabel>
                <IonInput id='inputRent'/>
            </IonItem>
            <IonGrid>
                <IonRow className='ion-margin'>
                    <IonCol className='ion-text-left'>
                        <IonButton>Calculate</IonButton>
                    </IonCol>
                    <IonCol className='ion-text-center'>
                        <IonButton fill='outline'>Reset</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <div id='result'/>
        </IonContent>
    </IonApp>
);

export default App;