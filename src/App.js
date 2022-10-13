
import './App.css';
import Header  from './components/header';
import Aside from './components/aside';
import Section from './components/section';
import Footer from './components/footer';
import Topic from './components/topic';
import Button from './components/button';






function App() {
  return  <div className='App'>
   <div className='container'>
    <Header/>
    <Topic/>
    <div className='minibox'>
      <Section/>
    <Aside/>
</div>
    <Footer/>
    </div>
<Button />
   </div>
}

export default App;