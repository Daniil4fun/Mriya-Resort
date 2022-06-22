import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/header_components/app_header/AppHeader';
import { BrowserRouter } from 'react-router-dom';
import AppMain from './components/main_components/app_main/AppMain';
import AppFooter from './components/footer_components/app_footer/AppFooter';
import AppMenu from './components/menu/AppMenu';

function App() {

  let [isActive, setIsActive] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader isActive={isActive} setIsActive={setIsActive} />
        <AppMain />
        <AppFooter />
        <AppMenu isActive={isActive} setIsActive={setIsActive} />
      </div>
    </BrowserRouter>
  );
}

export default App;
