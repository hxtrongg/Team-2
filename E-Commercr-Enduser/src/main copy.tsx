import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
// import { AppProvider } from './contexts/app.context';


// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
      },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
