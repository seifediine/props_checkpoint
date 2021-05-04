import './App.css';
import Profile from './profile/Profile';
import image from './profile/profile.jpg';

function App() {
  const handleName = (name) => {
    alert(`Name of profile user ${name}`)
  }

  return (
    <div className="App">
      <Profile 
        fullName="Seifeddine Elkorichi" 
        profession="Beginner Full-Stack Developer"
        bio="Tsema ana kanet andi une passion pour le codage mondo tofola"
        handleName={handleName}>
        <img src={image} alt="Meee!"></img>    
      </Profile>
    </div>
  );
}

export default App;
