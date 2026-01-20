import { Routes, Route } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import GenderReveal from "../components/GenderReveal/GenderReveal";
import IdealWeihtCalculator from "../components/IdealWeihtCalculator/IdealWeihtCalculator";
import Nationalize from "../components/Nationalize/Nationalize";
import SpaceMissionForm from "../components/SpaceMissionForm/SpaceMissionForm";
import UsersList from "../components/UsersList/UsersList";
import Layout from "../layouts/Layout";
import ProfileLayout from "../layouts/ProfileLayout";
import About from "../pages/About/About";
import CarPage from "../pages/CarPage/CarPage";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ProductPage from "../pages/ProductPage/ProductPage";
import Profile from "../pages/Profile/Profile";
import ProfileData from "../pages/ProfileData/ProfileData";
import Settings from "../pages/Settings/Settings";
import { ROUTES } from "../shared/routes";
import UserPage from "../pages/UserPage/UserPage";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import CreateCategory from "../pages/CreateCategory/CreateCategory";
import Parent from "../components/Family/Parent";

// import { ROUTES as R } from "../shared/routes"; як коротший варіант запису -  <Route path={R.HOME} element={<Home />} />

export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout - глобальний hedaer і footer  */}
      <Route path="/" element={<Layout />}>
        {/* альтернатива домашней страницы пишут просто index <Route index element={<Home />} /> */}
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GENDER_REVEAL} element={<GenderReveal />} />
        <Route path={ROUTES.NATIONALIZE} element={<Nationalize />} />
        <Route path={ROUTES.COUNTER} element={<Counter />} />
        <Route path={ROUTES.SPACE_MISSION} element={<SpaceMissionForm />} />
        <Route path={ROUTES.CALCULATOR} element={<IdealWeihtCalculator />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACTS} element={<Contact />} />
        {/* створили додатковий лейаут */}
        <Route path={ROUTES.PROFILE} element={<ProfileLayout />}>
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.PROFILE_DATE} element={<ProfileData />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Route>

        {/* Добавляяємо сторінку продукту */}
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="/cars/:model" element={<CarPage />}></Route>

        {/*UserList */}
        <Route path={ROUTES.USERS} element={<UsersList />}></Route>
        <Route path={ROUTES.USER(":id")} element={<UserPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />

        <Route path={ROUTES.CREATE_CATEGORY} element={<CreateCategory />} />
        <Route path={"/parent"} element={<Parent />} />
      </Route>

      {/* path="*" - це wild card - козирь */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
