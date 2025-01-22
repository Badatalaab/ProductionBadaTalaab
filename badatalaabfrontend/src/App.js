import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/Admin/Dashboard";
import Alladmin from "./Pages/Admin/Alladmin";

import LetsTalkData from "./Pages/Admin/LetsTalkData";
import Login from "./Pages/Admin/auth/Login";
import AboutUsPage from "./Pages/AboutUsPage";
import FAQPage from "./Pages/FAQPage";
import TermsAndCondition from "./Pages/TermsAndCondition";
import AdminRoutes from "./Component/Routes/AdminRoutes";
import Disclaimer from "./Pages/Disclaimer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/terms&conditon" element={<TermsAndCondition />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy&policy" element={<PrivacyPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />

      <Route path="/dashboard" element={<AdminRoutes />}>
        <Route path="dashboard1" element={<Dashboard />} />
        <Route path="admin" element={<Alladmin />} />
        <Route path="letstalk" element={<LetsTalkData />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
