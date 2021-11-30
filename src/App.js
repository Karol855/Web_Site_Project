import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./components/pages/Home";
import Diet from "./components/pages/Diet";
import Blog from "./components/pages/Blog";
import CustomMenu from "./components/common/CustomMenu";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import "./scss/main.scss";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import About from "./components/pages/About";
import Calculator from "./components/pages/Calculator";
import LogIn from "./components/pages/LogIn";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";



function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <CssBaseline />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/blog" element={<Blog />}/>
            <Route exact path="/diety" element={<Diet />}/>
            <Route exact path="/omnie" element={<About />}/>
            <Route exact path="/kalkulator" element={<Calculator />}/>
            <Route exact path="/zaloguj" element={<LogIn />}/>
            <Route exact path="/kontakt" element={<Contact />}/>
            <Route exact path="/politykaprywatnosci" element={<PrivacyPolicy />}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;


// <Route path="blog" element={<Blog />}>
//     <Route path=":id" element={<Blog />} />
// </Route>