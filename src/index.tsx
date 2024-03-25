import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Toaster } from './@/components/ui/sonner';

import { BrowserRouter } from 'react-router-dom';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
    <Toaster className='bg-white'/>
  </BrowserRouter>
);