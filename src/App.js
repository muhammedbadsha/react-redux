// import {BrowserRouter,Route,Routes} from 'react-router-dom'

import {store } from './app/store';
import { Provider } from 'react-redux';
import Counter from './feature/counter/Counter';

function App() {
  return (

    <div className="App">
      <Provider store={store}> 
      <Counter />
      </Provider>
    </div>
  );
}

export default App;
