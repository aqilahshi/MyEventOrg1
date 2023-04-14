import React from 'react';
import './App.css';
import './style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Todolist from './pages/Todolist';
import Comm from './pages/Comm.jsx';
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
import LuckyDrawAlgo from './participants/LuckyDrawAlgo';

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
import ViewFeed from "./pages/ViewFeed";
import Aaaa from "./pages/Aaaa";
import EditDetails from './pages/EditDetails.jsx';
import EditOrgS from "./pages/EditOrgS";
import EditEventAgenda from "./pages/EditEventAgenda";
import EditBudgetPlan from "./pages/EditBudgetPlan";
import FinalDownload from "./pages/FinalDownload";
import AdminDashboard from "./pages/AdminDashboard";
import AddAdmin from "./pages/AddAdmin";
import RemoveVendor from "./pages/RemoveVendor";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<MyEvent />} />
//           <Route path="/comm" element={<Comm />} />
//           <Route path="/calls" element={<Calls />} />
//           <Route path="/calendars" element={<Calendars />} />
//           <Route path="/files" element={<Files />} />
//           <Route path="/applications" element={<Applications />} />
//           <Route path="/myevent" element={<MyEvent />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/myevent/addevent" element={<AddEvent />} />
//           <Route path="/attendance" element={<Attendance />} />
//           <Route path="/award" element={<Award />} /> 
//           <Route path="/winnerdetails" element={<Winner />} /> 
//           <Route path="/LivePoll" element={<Lvquest />} />
//           <Route path="/awardpage" element={<AwardPart />} />
//           <Route path="/activity" element={<Activity />} />
//           <Route path="/createlivepoll" element={<CreateLv />} />
//           <Route path="/createquiz" element={<CreateQuiz />} />
//           <Route path="/createquizdetails" element={<DetailsQuizFake />} />
//           <Route path="/createquiz/createquizdetails" element={<DetailsQuizFake />} />
//           <Route path="/createluckydraw" element={<CreateLD />} />
//           <Route path="/resultlivepoll" element={<ResultLv />} />
//           <Route path="/playlivepoll" element={<PlayLv />} />
//           <Route path="/luckydraw" element={<LuckyDrawAlgo />} />          


//           {/* start kirah part */}
//           <Route path="/myevent/dashboard" element={<Dashboard />} />
//           <Route path="/myevent/dashboard/eventsummary" element={<EventSummary />} />
//           <Route path="/myevent/dashboard/organizationstructure" element={<OrganizationStructure />} />
//           <Route path="/myevent/dashboard/eventagenda" element={<EventAgenda />} />
//           <Route path="/myevent/dashboard/budgetplan" element={<BudgetPlan />} />
//           <Route path="/myevent/dashboard/attendance" element={<Attendance />} />
//           <Route path="/myevent/dashboard/activity" element={<Activity />} />
//           <Route path="/myevent/dashboard/award" element={<Award />} />
//           <Route path="/myevent/dashboard/generatecertificate" element={<GenerateCertificate />} />
//           <Route path="/myevent/dashboard/generatefinalreport" element={<FinalReport />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/vendorregister" element={<VendorRegister />} />
//           <Route path="/vendorlogin" element={<VendorLogin />} />
//           <Route path='/product' element={<Product />} />
//           <Route path='/productlist' element={<ProductList />} />
//           <Route path='/createpost' element={<CreatePost />} />
//           {/* delete */}
//           {/* edit */}
//           <Route path='/validatevendor' element={<ValidateVendor />} />
//           <Route path='/validatevendor/approvevendor' element={<ApproveVendor />} />
//           {/* categories?? */}
//           {/* admin dashboard */}
//           {/* end kirah part */}
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// };

// export default App;





import Home from "./pages/Comm";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import "./style.scss";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Extractattendance from './pages/Extractattendance';
import MainPage from './pages/MainPage';

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<MyEvent />} />
          <Route path="/comm" element={<Comm />} />
          <Route path="/todolist" element={<Todolist/>} />
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/files" element={<Files />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/myevent" element={<MyEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myevent/addevent" element={<AddEvent />} />

          {/* start part nad */}
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
          <Route path="/luckydraw" element={<LuckyDrawAlgo />} />          
          <Route path="/extractattendance" element={<Extractattendance />} />          
          <Route path="/homepage" element={<MainPage />} />  

          {/* start kirah part */}
          <Route path="/myevent/dashboard" element={<Dashboard />} />
          
          <Route path="/myevent/dashboard/eventsummary" element={<EventSummary />} />
          <Route path="/myevent/dashboard/eventsummary/editdetails" element={<EditDetails />} />
          <Route path="/myevent/dashboard/eventsummary/editdetails/eventsummary" element={<EventSummary />} />
          
          <Route path="/myevent/dashboard/organizationstructure" element={<OrganizationStructure />} />
          <Route path="/myevent/dashboard/organizationstructure/editorgs" element={<EditOrgS />} />
          <Route path="/myevent/dashboard/organizationstructure/editorgs/organizationstructure" element={<OrganizationStructure />} />
          
          <Route path="/myevent/dashboard/eventagenda" element={<EventAgenda />} />
          <Route path="/myevent/dashboard/eventagenda/editeventagenda" element={<EditEventAgenda />} />
          <Route path="/myevent/dashboard/eventagenda/editeventagenda/eventagenda" element={<EventAgenda />} />
          
          <Route path="/myevent/dashboard/budgetplan" element={<BudgetPlan />} />
          <Route path="/myevent/dashboard/budgetplan/editBudgetplan" element={<EditBudgetPlan />} />
          <Route path="/myevent/dashboard/budgetplan/editBudgetplan/budgetplan" element={<BudgetPlan />} />
          
          <Route path="/myevent/dashboard/attendance" element={<Attendance />} />
          <Route path="/myevent/dashboard/extractattendance" element={<Extractattendance />} />
          <Route path="/myevent/dashboard/activity" element={<Activity />} />
          <Route path="/myevent/dashboard/award" element={<Award />} />
          <Route path="/myevent/dashboard/generatecertificate" element={<GenerateCertificate />} />
          
          <Route path="/myevent/dashboard/generatefinalreport" element={<FinalReport />} />
          <Route path="/myevent/dashboard/generatefinalreport/finaldownload" element={<FinalDownload />} />
        
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/vendorregister" element={<VendorRegister />} />
          <Route path="/vendorlogin" element={<VendorLogin />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productlist/product' element={<Product />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/createpost/productlist' element={<ProductList />} />
          <Route path='/createpost/productlist/product' element={<Product />} />
          
          {/* delete */}
          {/* edit */}
          <Route path='/validatevendor' element={<ValidateVendor />} />
          <Route path='/validatevendor/approvevendor' element={<ApproveVendor />} />
          <Route path='/viewfeed' element={<ViewFeed />} />
          <Route path='/aaaa' element={<Aaaa />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/admindashboard/addadmin' element={<AddAdmin />} />
          <Route path='/admindashboard/validatevendor' element={<ValidateVendor />} />
          <Route path='/admindashboard/removevendor' element={<RemoveVendor />} />
          
          {/* categories?? */}
          {/* admin dashboard */}
          {/* end kirah part */}
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
