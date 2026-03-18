import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

function Product() {
  return (
    <section className="flex flex-col gap-6 pb-12 tablet:gap-12">
      <ProductGallery />

      <ProductDetails />
    </section>
  )
}

export default Product;