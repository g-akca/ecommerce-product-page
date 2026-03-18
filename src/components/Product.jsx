import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

function Product() {
  return (
    <section className="flex flex-col gap-6 pb-10">
      <ProductGallery />

      <ProductDetails />
    </section>
  )
}

export default Product;