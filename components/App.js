import React, {Component} from 'react';
import Navigator from '../navigator';

class App extends Component {
  componentDidMount = async () => {
    // App component ini selalu di jalankan sekali pas app dibuka
    // sangat cocok untuk operasi inisialisasi database 
    // migration saat update database
    // 
  }

  render() {    
    console.disableYellowBox = true;
    return (
      <Navigator />
    );
  }
}


export default App;
