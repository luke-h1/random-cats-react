import React, { BrowserRouter, Route, Switch } from 'react';
import Home from './Pages/Home/Home';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
         <GlobalStyle />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
