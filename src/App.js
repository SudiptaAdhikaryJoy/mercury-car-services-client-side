import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Services from './components/Services/Services';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Home/Home/Header';
import ContactForm from './components/ContactForm/ContactForm';
// import LinearPro from './components/LinearProgress/LinearPro';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/contact'>
            <ContactForm></ContactForm>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
