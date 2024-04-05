import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row gap-4 max-w-fit'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-3xs animate-[spin_5s_linear_infinite]" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-3xs animate-[spin_5s_linear_infinite]" alt="React logo" />
        </a>
      </div>
      <h1 className='text-3xl font-bold text-center my-8 py-4'>Vite + React</h1>
      <div className="text-center text-xl">
        <button onClick={() => setCount((count) => count + 1)} className='border py-2 px-4 rounded hover:bg-slate-800 '>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
