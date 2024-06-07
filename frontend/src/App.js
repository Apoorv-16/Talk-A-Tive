

import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path= '/chats' component={ChatPage}/>
        <Route exact path= '/' component= {HomePage}/>

      </Switch>
    </div>
  );
}

export default App;
