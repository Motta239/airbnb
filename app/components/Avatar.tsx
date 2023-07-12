"use client";

import Image from "next/image";
interface AvatarProps {
  userImg?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ userImg }) => {
  return (
    <Image
      className=" rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={userImg ? userImg : "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
