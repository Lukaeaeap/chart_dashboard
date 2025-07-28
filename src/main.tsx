import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>

  </StrictMode>,
)

// Now, running 
//    npm run dev
// will start both the Vite dev server and the json-server together.
// Open your browser and navigate to:
//    http://localhost:5173/
