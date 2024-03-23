import { useState } from "react";

function Features() {
  const features = [
    {
      name: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: "/images/illustration-features-tab-1.svg",
    },
    {
      name: "Intelligent search",
      description:
        " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: "/images/illustration-features-tab-2.svg",
    },
    {
      name: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: "/images/illustration-features-tab-3.svg",
    },
  ];

  const [featureName, setFeatureName] = useState(features[0].name);
  const [featureDescription, setFeatureDescription] = useState(
    features[0].description
  );
  const [featureImage, setFeatureImage] = useState(features[0].image);

  function handleFeatureChange(i) {
    setFeatureName(features[i].name);
    setFeatureDescription(features[i].description);
    setFeatureImage(features[i].image);
  }

  return (
    <div className=" flex w-full flex-col items-center justify-center">
      <div className="grid place-items-center">
        <h1 className="lg:text-4xl font-medium mb-4 text-3xl text-very-dark-blue">
          Features
        </h1>
        <p className="lg:max-w-[33rem] font-light mb-8 max-w-sm text-center text-grayish-blue">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="lg:flex-row  flex w-full flex-col items-center justify-center text-lg ">
        <div
          onClick={() => handleFeatureChange(0)}
          className="lg:border-none lg:max-w-60 grid w-full place-items-center border-b-2 border-t-2 p-4 cursor-pointer"
        >
          <p className="hover:text-soft-red z-10 w-fit text-center">
            Simple Bookmarking
          </p>
          {featureName === features[0].name ? (
            <div className="absolute w-[180px] h-[4px] bg-soft-red translate-y-[30px]"></div>
          ) : undefined}
        </div>

        <div
          onClick={() => handleFeatureChange(1)}
          className="lg:border-none lg:max-w-60 grid place-items-center w-full border-b-2 p-4 cursor-pointer"
        >
          <p className=" hover:text-soft-red text-center">Speedy Searching</p>
          {featureName === features[1].name ? (
            <div className="absolute w-[180px] h-[4px] bg-soft-red translate-y-[30px]"></div>
          ) : undefined}
        </div>

        <div
          onClick={() => handleFeatureChange(2)}
          className="lg:border-none lg:max-w-60 grid place-items-center w-full border-b-2 p-4 cursor-pointer"
        >
          <p className="hover:text-soft-red text-center">Easy Sharing</p>
          {featureName === features[2].name ? (
            <div className="absolute w-[180px] h-[4px] bg-soft-red translate-y-[30px]"></div>
          ) : undefined}
        </div>
      </div>

      {/* IMG & DESCRIPTION */}
      <div className="lg:grid lg:min-h-[25rem] relative overflow-hidden lg:grid-cols-2 lg:grid-flow-row-1 lg:gap-12 lg:items-center">
        <div className="lg:w-[22rem] lg:min-h-[260px] absolute z-1 min-h-[200px] top-[6rem]   w-[20rem] rounded-r-full bg-soft-blue"></div>
        <div className="grid place-items-center  mb-12 mt-8 ">
          <img
            className="relative left-[1rem] z-10 max-h-[15rem] lg:max-h-[18rem] max-w-[20rem]"
            src={featureImage}
            alt=""
          />
        </div>
        <div>
          <h1 className="lg:text-3xl lg:text-left pt-8 text-2xl font-medium text-very-dark-blue mb-4 text-center">
            {featureName}
          </h1>
          <div>
            <p className=" lg:text-left lg:max-w-[27rem]  font-light text-grayish-blue mb-12 text-center">
              {featureDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
