
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cakecontainer from './components/cakeContainer';
import Cakehookscontainer from './components/cakehookscontainer';
function App() {
  return (
   <>
   <Provider store={store}>
    <div className='App'> 

<Cakecontainer/>
<Cakehookscontainer/>


    </div>
   </Provider>

   </>
  );
}

export default App;
