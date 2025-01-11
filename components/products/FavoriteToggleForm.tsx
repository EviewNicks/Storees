"use client";

import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
// import { toggleFavoriteAction } from "lib/actions/favorites";

type FavoriteToggleFormProps = {
  productId: string;
  // favoriteId: string | null;
};
const FavoriteToggleForm = ({ productId }: FavoriteToggleFormProps) => {
  const pathname = usePathname();
  // const toggleAction = toggleFavoriteAction.bind(null, {
  //   productId,
  //   favoriteId,
  //   pathname,
  // });
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleForm;
