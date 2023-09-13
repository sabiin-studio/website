import React from 'react';
import '../assets/styles/App.css';
import UnderConstruction from './under-construction/under-construction';

function App() {
  return (
    <div>
      <div className="bg-electric-blue">
        <div className="bg-[url('/src/assets/images/Warning.svg')] bg-no-repeat bg-[length:50%]">
          <UnderConstruction/>
        </div>
      </div>
    </div>
  );
}

export default App;
