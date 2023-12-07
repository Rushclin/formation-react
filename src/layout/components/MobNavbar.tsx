import React from "react";
import { IconButton } from "@/components/Buttons/Buttons";
import { app } from "@/configs/app";
import { useRouter } from "next/router";
import { BiCart } from "react-icons/bi";

const MobNavbar = () => {
  const router = useRouter();
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8 z-50">
      <div className="flex justify-between text-[28px] py-2">
        {app.mobNavMenu.map((item) => (
          <IconButton
            action={() => {
              router.push(`${item.lien}`);
            }}
            icon={<item.icon />}
            key={item.id}
          />
        ))}
        <IconButton
          action={() => {
            router.push("/panier");
          }}
          icon={<BiCart />}
          nombre={1}
        />
      </div>
    </div>
  );
};

export default MobNavbar;
