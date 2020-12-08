import React, { BrowserRouter, Route, Switch } from 'react';

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
