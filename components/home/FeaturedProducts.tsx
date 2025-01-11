import { fetchFeaturedProducts } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
      
    </section>
  );
};

export default FeaturedProducts;
