function Home() {
  return (
    <div className="lg:flex-row-reverse lg:justify-between lg:mt-12  flex  w-full flex-col items-center justify-center p-4">
      <div className=" relative max-h-60  mb-12 mt-8  ">
        <img
          className="lg:max-w-[32rem] lg:-top-8 lg:left-10 relative left-0 top-0 z-10 max-w-80 -translate-x-5"
          src="/images/illustration-hero.svg"
          alt=""
        />
        <div className="lg:min-h-[260px] lg:max-w-[26rem] lg:bottom-[7rem] lg:left-[10rem] z-5 relative min-h-[180px] -translate-y-[175px] translate-x-10  w-full rounded-l-full bg-soft-blue"></div>
      </div>

      <div>
        <div className="lg:items-start lg:max-w-lg flex w-full max-w-sm flex-col items-center justify-center ">
          <h1 className="lg:text-[2.7rem] lg:text-left mb-4 leading-[3rem]  text-center text-3xl font-medium text-very-dark-blue">
            A Simple Bookmark Manager
          </h1>
          <p className="lg:max-w-[30rem] lg:text-left font-light max-w-80 text-center text-lg text-grayish-blue">
            A clean and simple interface to organize your favorite websties.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className="lg:justify-start mt-12 flex  justify-center gap-4">
          <button className="lg:min-w-[9rem] hover:bg-white hover:text-soft-blue border-2 drop-shadow border-soft-blue max-h-[3.2rem] flex items-center justify-center rounded-md bg-soft-blue p-4 text-white">
            Get it on Chrome
          </button>
          <button className=" lg:min-w-[9rem] hover:bg-white hover:text-gray-800 border-2 drop-shadow border-gray-200 max-h-[3.2rem] flex items-center justify-center rounded-md bg-gray-200 p-4 text-gray-800">
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
