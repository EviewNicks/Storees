'use server'

import db from '@/utils/db'
import { currentUser, auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect('/');
  return user;
};


export const fetchFeaturedProducts = async() => {
  const product = await db.product.findMany({
    where: {
      featured: true,
    }
});

  return product;
};

export const fetchAllProducts = () => {
    return db.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
};


// export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
//   const user = await getAuthUser();
//   const favorite = await db.favorite.findFirst({
//     where: {
//       productId,
//       clerkId: user.id,
//     },
//     select: {
//       id: true,
//     },
//   });
//   return favorite?.id || null;
// };


// export const toggleFavoriteAction = async (prevState: {
//   productId: string;
//   favoriteId: string | null;
//   pathname: string;
// }) => {
//   const user = await getAuthUser();
//   const { productId, favoriteId, pathname } = prevState;

//   try {
//     if (favoriteId) {
//       await db.favorite.delete({
//         where: {
//           id: favoriteId,
//         },
//       });
//     } else {
//       await db.favorite.create({
//         data: {
//           productId,
//           clerkId: user.id,
//         },
//       });
//     }
//     revalidatePath(pathname);
//     return { message: favoriteId ? 'removed from faves' : 'added to faves' };
//   } catch (error) {
//     return renderError(error);
//   }
// };

