import ProductsContainer from "@/components/products/ProductsContainer";

interface SearchParams {
  layout?: string;
  search?: string;
}

const ProductsPage = ({ searchParams }: { searchParams: SearchParams }) => {
  console.log({ params: {}, searchParams });
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;
