import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import StartBusiness from "./pages/StartBusiness";
import Navigation from "./common/navigation";
import Footer from "./common/footer";
import Consultation from "./pages/Consultation";
import CreateBlog from "./pages/CreateBlog";
import SingleBlog from "./pages/SingleBlog";
import BrandDescriptionPage from "./pages/BrandDescriptionPage";
import GrowBusiness from "./pages/GrowBusiness";
import LeaderDescription from "./pages/LeaderDescription";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/start-a-business" element={<StartBusiness />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/grow-brand" element={<BrandDescriptionPage />} />
          <Route path="/grow-business" element={<GrowBusiness />} />
          <Route path="/lead-business" element={<LeaderDescription />} />
          <Route path="/start-business" element={<StartBusiness />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
