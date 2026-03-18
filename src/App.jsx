import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <div className="text-base leading-base text-grey-500 flex flex-col tablet:px-20 tablet:gap-12">
      <Header />

      <main>
        <Product />
      </main>
    </div>
  )
}

export default App
