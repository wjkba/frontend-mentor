function Download() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="lg:text-3xl mb-4 font-medium text-very-dark-blue text-2xl">
          Download the extension
        </h1>
        <p className="lg:max-w-[34rem] mb-12 font-light text-center text-grayish-blue">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className=" lg:flex-row lg:pb-20 flex flex-col justify-center items-center">
        <div className=" bg-white max-w-72 w-full m-4 min-h-20px p-8 flex flex-col justify-center items-center gap-16 rounded drop-shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <img
              className="mb-8 max-w-40"
              src="/images/logo-chrome.svg"
              alt=""
            />
            <p className="mb-2 font-bold">Add to Chrome</p>
            <p className="font-light text-grayish-blue">Minimum version 62</p>
          </div>
          <button className="hover:bg-white hover:text-soft-blue border-2 border-soft-blue rounded-md  w-full bg-soft-blue p-3 text-white">
            Add & Install Extension
          </button>
        </div>
        <div className=" lg:translate-y-8 bg-white max-w-72 w-full m-4 min-h-20px p-8 flex flex-col justify-center items-center gap-16 rounded drop-shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <img
              className="mb-8 max-w-40"
              src="/images/logo-firefox.svg"
              alt=""
            />
            <p className="mb-2 font-bold">Add to Firefox</p>
            <p className="font-light text-grayish-blue">Minimum version 55</p>
          </div>
          <button className="hover:bg-white hover:text-soft-blue border-2 border-soft-blue  rounded-md w-full bg-soft-blue p-3 text-white">
            Add & Install Extension
          </button>
        </div>

        <div className="lg:translate-y-16 bg-white max-w-72 w-full m-4 min-h-20px p-8 flex flex-col justify-center items-center gap-16 rounded drop-shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <img
              className="mb-8 max-w-40"
              src="/images/logo-opera.svg"
              alt=""
            />
            <p className="mb-2 font-bold">Add to Opera</p>
            <p className="font-light text-grayish-blue">Minimum version 46</p>
          </div>
          <button className="hover:bg-white hover:text-soft-blue border-2 border-soft-blue  rounded-md w-full bg-soft-blue p-3 text-white">
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
}

export default Download;
