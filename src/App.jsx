
import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import SideBar from './components/layout/SideBar'
import Dashboard from './components/dashboard/Dashboard';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='app'>

        <SideBar
          isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}

        />

        <Header
          onMenuClick={() => setSidebarOpen(true)}
        />

        <Dashboard />
        {/* <main className='main-content'>
          <h2>Dashboard </h2>
          
        </main> */}
      </div>

    </>
  )
}

export default App
