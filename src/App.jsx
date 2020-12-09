import React, { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    </BrowserRouter>

  );
}

export default App;
