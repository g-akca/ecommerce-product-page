import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <div className="text-base leading-base text-grey-500 flex flex-col items-center tablet:px-20 tablet:gap-12 desktop:px-41.25 desktop:gap-24">
      <Header />

      <main className="tablet:max-w-200 tablet:w-full desktop:max-w-350 desktop:px-11.25">
        <Product />
      </main>
    </div>
  )
}

export default App
