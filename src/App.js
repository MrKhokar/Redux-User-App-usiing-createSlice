import './App.css';
import configStore from './Store/configStore';
import { detailsAdd, detailsDelete, detailsUpdate } from './Store/details';
const store =configStore()
store.dispatch(detailsAdd({productDetails:"Iphone13",price:"116000"}))
store.dispatch(detailsAdd({productDetails:"Iphone10",price:"96000"}))
store.dispatch(detailsAdd({productDetails:"Iphone9",price:"86000"}))
store.dispatch(detailsAdd({productDetails:"Iphone8",price:"76000"}))
store.dispatch(detailsUpdate({id:8002,productDetails:"iphone78",price:"8752000"}))
store.dispatch(detailsDelete({id:8001}))

console.log(store.getState(),"store")
function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
