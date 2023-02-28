import Dashboard from "./components/Dashboard"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="bg-[url('/assets/background.png')] bg-black h-[900px] bg-no-repeat bg-cover z-0">
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
