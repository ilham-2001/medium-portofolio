// react/react-router
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// component
import App from './App';

// stylesheet
import './index.css';

// shadcn
import { Toaster } from './@/components/ui/sonner'

// pdfjs
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