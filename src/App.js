import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {NavigationBar} from './components/ui/NavigationBar'
import { Admin } from './components/ui/Admin'
import { BASE_ROUTE, CONTACT_US, CUSTOMER_EDIT_ROUTE, CUSTOMER_LIST_ROUTE, REGISTRATION_ROUTE } from './constants/AppRoute';
import { CustomerRegistrationForm } from './components/ui/CustomerRegistrationForm';
import { CustomerList } from './components/ui/CustomerList';
import { CustomerEditForm } from './components/ui/CustomerEditForm';
import { ContactUs } from './components/ui/Contact_Us';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={BASE_ROUTE} element={<Admin />} />
          <Route path={REGISTRATION_ROUTE} element={<CustomerRegistrationForm/>} />
          <Route path={CUSTOMER_LIST_ROUTE} element={<CustomerList/>} />
          <Route path={CUSTOMER_EDIT_ROUTE} element={<CustomerEditForm/>}/>
          <Route path={CONTACT_US} element={<ContactUs/>}/>
        </Routes>

     

    </BrowserRouter>
  );
}

export default App;
