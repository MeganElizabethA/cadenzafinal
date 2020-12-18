import React from 'react';
import '@ionic/react/css/core.css';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import infoPage from './infoPageIonic';
import Key from './Key';
import mess from './mess';



const Routes = () => (
<IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
   
    
        <Route exact path="/" component={Key}/>
        
        <Route exact path="/infoPage" component={infoPage}  />

         <Route exact path="/mess" component={mess} />
        
        
</IonRouterOutlet>
    </IonReactRouter>
  


</IonApp>
);
export default Routes;