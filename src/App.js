import {BrowserRouter,Route,Routes} from 'react-router-dom'

import {store } from './app/store';
import { Provider } from 'react-redux';
import Counter from './feature/counter/Counter';
import PostsList from './feature/post/postsList';

function App() {
  return (

    <div className="App">

      <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path='counter/' element={<Counter />} />
      <Route path='/'element={<PostsList />} />
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
