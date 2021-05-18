import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Blog from './Components/Blog';
import BlogEditor from './Components/BlogEditor';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Notfound from './Components/Notfound';
import SignUp from './Components/SignUp';
import About from './Components/About';
import SignIn from './Components/SignIn';
import PrivateRoute from './Components/helper/PrivateRoute';
import AdminRoute from './Components/helper/AdminRoute';
import UpdateBlog from './Components/UpdateBlog';
import Blogs from './Components/Blogs';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className="App">
<Header/>
<div style ={{marginTop:"100px"}}>
<BrowserRouter>

<Switch>
  <Route path = "/" exact component = {HomePage}/>
  <Route path = "/blog/:blogId" exact component = {Blog}/>
  <Route path = "/blogs" exact component = {Blogs}/>
  <AdminRoute path="/blog/create" exact component={BlogEditor} />
  <AdminRoute path="/blog/update/:blogId" exact component={UpdateBlog} />
  <Route path = "/about" exact component = {About}/>
  <Route path = "/signup" exact component = {SignUp}/>
  <Route path = "/signin" exact component = {SignIn}/>
  <Route component = {Notfound}/>
</Switch>

</BrowserRouter>
</div>
     <Footer/>
     
     
    </div>
  );
}

export default App;
