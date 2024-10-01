import { Provider } from 'react-redux';
import store from './store/store';
import UserComponent from './components/UserComponent';

function AppNavigation() {
  return (
    <>
      <UserComponent />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
