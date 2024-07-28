import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS styles
import { RouterProvider } from 'react-router-dom';
import {routerWraper} from './routes'; // Make sure this is the correct import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      {/* <NavBar /> */}
     <RouterProvider router={routerWraper}>
    </RouterProvider>
  </React.StrictMode>
);
