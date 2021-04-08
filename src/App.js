import "./App.scss";
import Dashboard from './components/dashboard'

//drei
import {  useProgress } from "@react-three/drei";

// React Spring
import { a, useTransition } from "@react-spring/web";


function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}
function App() {
  return (
   
    <div className="body">
       <Loader/>
      <div className="top-bar"> 

      </div>
      <div className="side-bar">
        
      </div>
      <Dashboard/>
     
    </div>
  );
}

export default App;
