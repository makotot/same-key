import React, { useEffect, useState } from 'react';
import './App.css';

const items = [
  [
    {id: 0, name: "A------------------------------"},// https://github.com/facebook/react/issues/24871 lose tracking
    {id: 0, name: "A"},
    {id: 1, name: "B"},
    {id: 2, name: "C"}
  ],
  [
    {id: 3, name: "D"},
  ],
]

function App() {
  const [current, updateIndex] = useState<0 | 1>(0)

  useEffect(() => {
    return () => {
      console.log(current)
    }
  })

  return (
    <div className="App">
      <button onClick={() => updateIndex(current === 0 ? 1 : 0)}>Switch</button>
      <ul>
        {
          items[current].map((item) => {
            return (
              <li key={item.id}>
                {item.id} : {item.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
