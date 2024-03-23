import { useState } from "react";

function Footer() {
  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSent(true);
    } else {
      setIsError(true);
    }
  };
  const handleEmailChange = (event) => {
    setEmail((email) => event.target.value);
  };

  const handleInputFoucs = () => {
    setIsError(false);
  };

  return (
    <>
      <footer>
        <div className="mt-16">
          <div className="p-8 bg-soft-blue flex flex-col justify-center items-center text-white">
            <p className="mt-8 font-thin">35,000+ ALREADY JOINED</p>
            <h1 className="lg:max-w-[25rem] mb-12 mt-2 text-3xl text-center">
              Stay up-to-date with what we’re doing
            </h1>
            <div className="lg:flex-row lg:items-start flex flex-col justify-center items-center w-full gap-4">
              <div className="grid place-items-center w-full max-w-sm">
                <input
                  onFocus={handleInputFoucs}
                  onChange={handleEmailChange}
                  value={email}
                  className={
                    !isError
                      ? "max-w-sm border-transparent  border-4 w-full p-3  text-black"
                      : "max-w-sm border-4 w-full p-3  text-black rounded-t border-soft-red "
                  }
                  placeholder="Enter your email address"
                />
                {isError && (
                  <div className="max-w-sm w-full">
                    <p className="text-sm italic p-2 rounded-b bg-soft-red">
                      Whoops, make sure it's an email
                    </p>
                    <img
                      className="float-right -translate-y-[70px] -translate-x-4 relative right-0"
                      src="images/icon-error.svg"
                    />
                  </div>
                )}
              </div>

              {!isSent ? (
                <button
                  onClick={handleEmail}
                  className="lg:max-w-[8rem] hover:bg-white hover:text-soft-red border-2 border-soft-red w-full max-w-sm bg-soft-red p-3  rounded"
                >
                  Contact Us
                </button>
              ) : (
                <p className="lg:max-w-[8rem] lg:text-left text-center">
                  You've joined the newsletter
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="lg:flex-row lg:justify-around text-white text-lg font-thin p-8 gap-6 flex flex-col justify-center items-center bg-very-dark-blue">
          <div className="lg:flex-row flex items-center flex-col gap-8">
            <img
              className="min-w-[180px]"
              src="/images/logo-bookmark-white.svg"
              alt=""
            />
            <p className="hover:text-soft-red cursor-pointer">FEATURES</p>
            <p className="hover:text-soft-red cursor-pointer">PRICING</p>
            <p className="hover:text-soft-red cursor-pointer">CONTACT</p>
          </div>
          <div className="lg:mt-0 flex items-center gap-12 mt-4">
            <img
              className="cursor-pointer"
              src="/images/icon-facebook.svg"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="/images/icon-twitter.svg"
              alt=""
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
