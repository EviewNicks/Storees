import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

async function UserIcon() {
  const user = await currentUser();
  // const { userId } = auth();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        alt="User Profile"
        src={profileImage}
        width={24}
        height={24}
        className="w-6 h-6 rounded-full object-cover"
      />
      // <LuUser className="w-6 h-6 bg-black rounded-full text-white" />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
