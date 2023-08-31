import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import { Signup } from "./components/Signup.js";
import { Login } from "./components/Login.js";
import Info from "./components/Info.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Section from "./components/Section.jsx";
import Faq from "./components/Faq.jsx";
import Blog from "./components/Blog.js";
import About from "./components/About.js";
import Profile from "./components/Profile_Section/Profile.js";
import Users from "./Users.js";
import Card from "./components/profile_Cards/card.jsx";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={
            <>
              <Navigation />
              <Content />       
              <Section />
              <Info />
              <Testimonials />
              <Faq />
              <Footer />
            </>
          } />

        <Route path="/blog" element={
          <>
            <Navigation />
            <Blog />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navigation />
            <About />
            <Footer/>
          </>
        } />

        <Route path="/signup" element={
          <>
            <Navigation />
            <Signup />
          </>
        } />
        
        <Route path="/login" element={
        <>
          <Navigation />
          <Login />
        </>
        } />

        <Route path="/profile" element={
        <>
          <Navigation />
          <Profile />
        </>
        } />

        <Route path="/card" element={
        <>
          <Navigation />
          <Card/>
        </>
        } />
      </Routes>
      <h1 className="heading">My Contacts</h1>
    <Card
      name={Users[0].name}
      img={Users[0].imgURL}
      tel={Users[0].phone}
      email={Users[0].email}
    />
    <Card
      name={Users[1].name}
      img={Users[1].imgURL}
      tel={Users[1].phone}
      email={Users[1].email}
    />
    <Card
      name={Users[2].name}
      img={Users[2].imgURL}
      tel={Users[2].phone}
      email={Users[2].email}
    />
    </div>
  );
}

export default App;
