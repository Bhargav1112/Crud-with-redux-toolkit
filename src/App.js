import { Fragment } from 'react';
import Posts from './components/posts/allPosts';
import { Provider } from "react-redux"
import store from './redux/store';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Posts />
      </Provider>
    </Fragment>
  );
}

export default App;
