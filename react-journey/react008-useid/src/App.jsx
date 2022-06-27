import { useId } from 'react'

function App() {
  
  const id1 = useId();
  const id2 = useId();

  return (
    <div>
      <h1>React - useID</h1>
      <hr />
      <form action="#">
      <div>
        <label htmlFor={id1}>Checkbox 1</label>
        <input type="checkbox" id={id1} />
      </div>
      <div>
        <label htmlFor={id2}>Checkbox 2</label>
        <input type="checkbox" id={id2} />
      </div>
      </form>
    </div>
  )
}

export default App
