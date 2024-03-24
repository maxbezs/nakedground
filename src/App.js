import { Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import CoffeePage from './pages/CoffeePage'
import LocationPage from './pages/LocationPage'
import CareersPage from './pages/CareersPage'
import UserPage from './pages/UserPage'
import MenuPage from './pages/MenuPage'
import ScrollToTop from "./ScrollToTop";
import PolicyPage from './pages/PolicyPage'
import LangProvider from './providers/LangProvider'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LangProvider>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/coffee' element={<CoffeePage/>}/>
              <Route path='/reservation' element={<FormPage/>}/>
              <Route path='/ibiza-house' element={<LocationPage/>}/>
              <Route path='/careers' element={<CareersPage/>}/>
              <Route path='/subscribe' element={<UserPage/>}/>
              <Route path='/menu' element={<MenuPage/>}/>
              <Route path='/privacy-policy' element={<PolicyPage/>}/>
            </Routes>
          </ScrollToTop>
        </LangProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
