import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

function Product() {
  return (
    <section className="flex flex-col gap-6 pb-12 tablet:gap-12 desktop:flex-row desktop:gap-32 desktop:items-center desktop:pb-24">
      <ProductGallery />

      <ProductDetails />
    </section>
  )
}

export default Product;