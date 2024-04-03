import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './component/sidebar';
import HomePageContent from './HomePageContent';
import CategoryPage from './categoryPage';
import CreateJob from './CreateJobPage';
import PrivacyPageContent from './PrivacyPageContent';
import TermsPageContent from './TermsPageContent';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store'
import Jobs from './jobs';
import JobsDetails from './jobsDetails';
import Applicants from './applicants';
import Message from './messagePage';
import ContactReply from './contactreply';
import SidebarPage from './component/pagesWithsidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      
      <Routes>
        <Route path="/"  element={<SidebarPage><App /></SidebarPage>} />
        <Route path="/jobs" element={<SidebarPage><Jobs /></SidebarPage>} />
        <Route path="/jobs-details/:id" element={<SidebarPage><JobsDetails /></SidebarPage>} />
        <Route path="/applicants/:id" element={<SidebarPage><Applicants /></SidebarPage>} />
        <Route path="/home-page-content" element={<SidebarPage><HomePageContent /></SidebarPage>} />
        <Route path="/create-category" element={<SidebarPage><CategoryPage /></SidebarPage>} />
        <Route path="/create-job" element={<SidebarPage><CreateJob /></SidebarPage>} />
        <Route path="/privacy-page-content" element={<SidebarPage><PrivacyPageContent /></SidebarPage>} />
        <Route path="/terms-and-conditions" element={<SidebarPage><TermsPageContent /></SidebarPage>} />
        <Route path='/chatpage' element={<SidebarPage><Message /></SidebarPage>} />
        <Route path='/contact-reply' element={<SidebarPage><ContactReply /></SidebarPage>} />

      </Routes>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
