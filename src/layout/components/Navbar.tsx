import { Button } from "@/components/Buttons/Buttons";
import { app } from "@/configs/app";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {

  const router = useRouter()

  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-5">
          <div className="flex h-16 items-center justify-center">
            <div className="">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6">
                  {app.homeLinks.map((link) => (
                    <Button action={() => {router.push(link.lien)}} title={link.title}/>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
