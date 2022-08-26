
import './App.css';
import {NavLink, Routes, Route } from "react-router-dom";

const Profile = () => {
  return <h2> страница профиля</h2>;
};
const Messages = () => {
  return <h2> страница сообщений</h2>;
};
const Settings = () => {
  return <h2> страница настроек</h2>;
};
const Friends = () => {
  return <h2> страница с друзьми</h2>;
};



function App() {
  return (
    <div className='container'>
      <div className ='row'>
        <div className ="col-3">
          <div className ="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            
            <NavLink className="nav-link" to = 'profile' >Профиль</NavLink>
            <NavLink className="nav-link" to = 'messages'>Сообщения</NavLink>
            <NavLink className="nav-link" to = 'settings'>Настройки</NavLink>
            <NavLink className="nav-link" to = 'friends'>Друзья</NavLink>
          </div>
        </div>
        <div className = 'col-9'>
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/friends" element={<Friends/>} />

          </Routes>
        </div>
      </div>
    </div>    
    
    
  );
}

export default App;
