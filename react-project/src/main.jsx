import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UserProvider } from './Components/Authentication/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>,
);
