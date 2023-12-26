
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Adminreg from './component/Admin/Adminreg'
import Adminlogin from './component/Admin/Adminlogin/Adminlogin'
import Adminhome from './component/Admin/Adminhome/Adminhome'
import Forgotpassword from './component/Admin/Forgot password/Forgotpassword'
import Addcategory from './component/Admin/Adminhome/Addcategory/Addcategory'
import Addproduct from './component/Admin/Adminhome/Addproduct/Addproduct'
import Editcategory from './component/Admin/Adminhome/editcategory/Editcategory'
import Home from './component/Home/Home'
import Categoryproduct from './component/category-vise/Categoryproduct'
import Addcustomer from './component/User/Addcustomer'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/adminregister' Component={Adminreg}/>
            <Route path='/adminlogin' Component={Adminlogin}/>
            <Route path='/adminhome' Component={Adminhome}/>
            <Route path='/adminforgetpwd' Component={Forgotpassword}/>
            <Route path='/addcategory' Component={Addcategory}/>
            <Route path='/addproduct' Component={Addproduct}/>
            <Route path='/editcategory/:id' Component={Editcategory}/>
            <Route path='/' Component={Home}/>
            <Route path='/categoryproduct' Component={Categoryproduct}/>
            <Route path='/addcustomer' Component={Addcustomer}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
