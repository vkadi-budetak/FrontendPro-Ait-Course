import Counter from "./components/Counter/Counter";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import IdealWeihtCalculator from "./components/IdealWeihtCalculator/IdealWeihtCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import Nationalize from "./components/Nationalize/Nationalize";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layouts/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LayoutModal from "./layouts/ProfileLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import Settings from "./pages/Settings/Settings";
import ProfileData from "./pages/ProfileData/ProfileData";
import Profile from "./pages/Profile/Profile";

function App() {
  const johnDawson = {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7x7RFFT8-4WY26mVJxhk5lvmoTIhb_0NzAQ&s",
    name: "John Dawson",
    description: "Full Stack Dev",
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout - глобальний hedaer і footer  */}
          <Route path="/" element={<Layout />}>
            {/* альтернатива домашней страницы пишут просто index <Route index element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/gender-reveal" element={<GenderReveal />} />
            <Route path="/nationalize" element={<Nationalize />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/space-mission" element={<SpaceMissionForm />} />
            <Route path="/calculator" element={<IdealWeihtCalculator />} />
            <Route
              path="/gender-reveal"
              element={<ProfileCard {...johnDawson} />}
            />

            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* створили додатковий лейаут */}
            <Route path="/profile" element={<ProfileLayout />}>
              <Route path="/profile/" element={<Profile />} />
              <Route path="/profile/data" element={<ProfileData />} />
              <Route path="/profile/settings" element={<Settings />} />
            </Route>
          </Route>

          {/* path="*" - це wild card - козирь */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
