import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import Nav from "./pages/Nav";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboardPage" element={<DashboardPage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
