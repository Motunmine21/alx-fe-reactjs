
import UserContext from "./UserContext";
import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  const userData = {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography",
  }
  return (
    
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <h1>My React App</h1>
      <ProfilePage />
      <Footer />
    </UserContext.Provider>
  );
}

  

 
   
  

export default App;

