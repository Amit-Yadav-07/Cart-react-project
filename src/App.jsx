import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import useGlobalContext from "./context";

let App = () => {

  let { loading } = useGlobalContext()

  if (loading) {
    return <div className="Loading"></div>
  }

  return (
    <main className="main">
      <Navbar />
      <CartContainer />
    </main>
  )
}


export default App;