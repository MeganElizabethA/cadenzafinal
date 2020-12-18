import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './styles.css';
import { IonApp } from '@ionic/react';
import React, { Component } from 'react';
import Key from './Key';
import Infopage from './infoPageIonic';
import Mess from './mess';
import Routes from './Routes';


class App extends Component {
render() {
     return (
       <IonApp>
         <Infopage/>
         <Key/>
         <Mess/>
      <Routes/>
      </IonApp>
    );
}
}
export default App;