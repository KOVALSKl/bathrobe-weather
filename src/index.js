import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ForecastPage from './pages/ForecastPage/ForecastPage';
import { PageType } from './utils/types';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index={true} element={<ForecastPage type={PageType.TODAY} />} />
          <Route path='tomorrow' element={<ForecastPage type={PageType.TOMORROW} />} />
          <Route path='days' element={<ForecastPage type={PageType.DAYS} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);