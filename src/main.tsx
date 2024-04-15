import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import WorkerProvider from './context/Provider.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <WorkerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WorkerProvider>,
);
