import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {showMenu && (
        <div className="p-8 z-20 fixed  bg-blue-950/90 w-screen h-screen">
          <div className="flex justify-between align-center">
            <div>
              <img src="/images/logo-bookmark-inverse.svg" alt="" />
            </div>
            <div>
              <img
                onClick={handleMenuClick}
                className="cursor-pointer"
                src="/images/icon-close.svg"
                alt=""
              />
            </div>
          </div>
          <div className="mt-16">
            <div className="cursor-pointer w-full border-b border-t border-gray-500 p-6 text-white tracking-widest font-light  text-2xl grid place-items-center">
              <p>FEATURES</p>
            </div>
            <div className="cursor-pointer w-full border-b border-gray-500 p-6 text-white tracking-widest font-light  text-2xl grid place-items-center">
              <p>PRICING</p>
            </div>
            <div className="cursor-pointer w-full border-b border-gray-500 p-6 text-white tracking-widest font-light  text-2xl grid place-items-center">
              <p>CONTACT</p>
            </div>
            <button className="cursor-pointer mt-8 font-light  text-2xl tracking-widest w-full p-2 bg-transparent text-white border-white border-2 rounded">
              LOGIN
            </button>
          </div>
        </div>
      )}
      <div className="grid place-items-center">
        <div className="lg:pl-4 lg:pr-4 lg:max-w-5xl flex w-full items-center justify-between   p-8">
          <span>
            <img src="/images/logo-bookmark.svg" alt="" />
          </span>

          <span className="lg:hidden">
            <img
              onClick={handleMenuClick}
              className="cursor-pointer"
              src="/images/icon-hamburger.svg"
            />
          </span>
          <div className="lg:visible lg:text-sm tracking-widest lg:items-center lg:text-very-dark-blue lg:flex lg:gap-10 hidden">
            <a className="hover:text-soft-red cursor-pointer">FEATURES</a>
            <a className="hover:text-soft-red cursor-pointer">PRICING</a>
            <a className="hover:text-soft-red cursor-pointer">CONTACT</a>
            <button className="hover:bg-white hover:text-soft-red text-white text-normal border-2 border-soft-red font-normal bg-soft-red p-[0.5rem] min-w-24 rounded">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
