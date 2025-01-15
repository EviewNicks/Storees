import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/action";

const favoritesPage = async () => {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text="You ave no favorites yet." />;

  return (
    <div>
      <SectionTitle text="Product List" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
};

export default favoritesPage;
