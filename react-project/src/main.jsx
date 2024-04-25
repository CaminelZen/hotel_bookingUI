import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UserProvider } from './Components/Authentication/context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>,
  
  <UserProvider>
    <App />
  </UserProvider>,
);
