import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from './@/components/ui/sonner';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
    <Toaster className='bg-white'/>
  </BrowserRouter>
);