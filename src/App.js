import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Calls from './pages/Todo.jsx';
import Chat from './pages/Chat.jsx';
import Calendars from './pages/Calendars.jsx';
import Files from './pages/Files.jsx';
import Applications from './pages/Shop.jsx';
import MyEvent from './pages/MyEvent.jsx';
import Profile from './pages/Profile.jsx';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEvent from './pages/AddEvent';
import Attendance from './participants/Attendance.jsx';
import Award from './pages/Award.jsx';
import Winner from './pages/Winner';
import Lvquest from './pages/QuestLv';
import AwardPart from './participants/AwardPart';
import Activity from './pages/Activity';
import CreateLv from './pages/CreateLv';
import CreateQuiz from './pages/CreateQuiz';
import DetailsQuizFake from './pages/DetailsQuizFake';
import CreateLD from './pages/CreateLD';
import ResultLv from './participants/ResultLv';
import PlayLv from './participants/PlayLv';

import Dashboard from './pages/Dashboard.jsx';
import EventSummary from './pages/EventSummary.jsx';
import OrganizationStructure from './pages/OrganizationStructure.jsx';
import EventAgenda from './pages/EventAgenda.jsx';
import BudgetPlan from './pages/BudgetPlan.jsx';
import GenerateCertificate from './pages/GenerateCertificate.jsx';
import FinalReport from './pages/FinalReport.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import VendorRegister from './pages/VendorRegister.jsx';
import VendorLogin from './pages/VendorLogin.jsx';
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import ValidateVendor from "./pages/ValidateVendor";
import ApproveVendor from "./pages/ApproveVendor";
import CreatePost from "./pages/CreatePost";


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<MyEvent />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/files" element={<Files />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/myevent" element={<MyEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myevent/addevent" element={<AddEvent />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/award" element={<Award />} /> 
          <Route path="/winnerdetails" element={<Winner />} /> 
          <Route path="/LivePoll" element={<Lvquest />} />
          <Route path="/awardpage" element={<AwardPart />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/createlivepoll" element={<CreateLv />} />
          <Route path="/createquiz" element={<CreateQuiz />} />
          <Route path="/createquizdetails" element={<DetailsQuizFake />} />
          <Route path="/createquiz/createquizdetails" element={<DetailsQuizFake />} />
          <Route path="/createluckydraw" element={<CreateLD />} />
          <Route path="/resultlivepoll" element={<ResultLv />} />
          <Route path="/playlivepoll" element={<PlayLv />} />

          <Route path="/myevent/dashboard" element={<Dashboard />} />
          <Route path="/myevent/dashboard/eventsummary" element={<EventSummary />} />
          <Route path="/myevent/dashboard/organizationstructure" element={<OrganizationStructure />} />
          <Route path="/myevent/dashboard/eventagenda" element={<EventAgenda />} />
          <Route path="/myevent/dashboard/budgetplan" element={<BudgetPlan />} />
          <Route path="/myevent/dashboard/attendance" element={<Attendance />} />
          <Route path="/myevent/dashboard/activity" element={<Activity />} />
          <Route path="/myevent/dashboard/award" element={<Award />} />
          <Route path="/myevent/dashboard/generatecertificate" element={<GenerateCertificate />} />
          <Route path="/myevent/dashboard/generatefinalreport" element={<FinalReport />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/vendorregister" element={<VendorRegister />} />
          <Route path="/vendorlogin" element={<VendorLogin />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/createpost' element={<CreatePost />} />
          {/* delete */}
          {/* edit */}
          <Route path='/validatevendor' element={<ValidateVendor />} />
          <Route path='/validatevendor/approvevendor' element={<ApproveVendor />} />
          {/* categories?? */}
          {/* admin dashboard */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
