import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Container>
        <Jumbotron className="mt-4">
          <h1>React Google Books Search</h1>
          <h3>Search and save books of interest!</h3>
        </Jumbotron>

        <Router>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Router>
      </Container>
    </div>
  );
}

export default App;
