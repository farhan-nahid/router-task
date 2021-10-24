import React, { createContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import TodoDetail from './components/TodoDetail/TodoDetail';
import Home from './pages/Home';
export const TitleContext = createContext();

function App() {
  const title = 'This is About Page';

  return (
    <TitleContext.Provider value={title}>
      <Router>
        <Toaster />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/todo/:id' component={TodoDetail} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </TitleContext.Provider>
  );
}

export default App;
