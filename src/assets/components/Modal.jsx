import React from "react";
import websites from "/public/webstie.json";
import Rating from "react-rating";
import Prograss from "./Prograss";

const Modal = () => {
  const { image, url, name, rating, reviews, authorisationInfo } = websites[0];

  const handleHover = (val) => {
    console.log(val);
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_4" className=" backdrop-blur-md  modal">
        <div className=" min-h-[90vh] modal-box flex gap-2 flex-col bg-yellow-50 justify-between w-11/12  max-w-5xl">
          <h1 className=" text-4xl leading-none">
            This Site may not be trusted !
          </h1>
          <div className=" space-y-[10px] w-full mb-3 main-content">
            <div className=" bg-white flex justify-between h-[30vh] section-1">
              <div className=" h-full flex-grow">
                <div className=" flex web_image flex-1 px-8 py-7 bg-white">
                  <img
                    className=" w-[30vh] h-[20vh]"
                    src={image}
                    alt="web_image"
                  />
                  <div className="   web_title flex-1 px-8 py-7 bg-white">
                    <h1 className=" text-[2vw]">{name}</h1>

                    <small>
                      <div className="tooltip" data-tip={`${rating}`}>
                        <Rating
                          onHover={handleHover}
                          readonly={true}
                          stop={5}
                          initialRating={Number(rating)}
                        />
                      </div>
                    </small>
                  </div>
                </div>
              </div>
              <div className=" px-4 py-4 flex flex-col justify-center w-[20vw] h-[30vh]">
                <div className=" py-2 px-3 rounded-2xl ">
                  <a
                    className=" text-blue-500 text-lg border-2 border-blue-500 px-2 py-4 flex flex-col rounded-2xl "
                    href={url}
                  >
                    {/* <FaExternalLinkAlt /> */}
                    {url}
                    <small className=" text-sm text-stone-400">
                      visit webstie
                    </small>
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex gap-4section-2">
              <div className="bg-white px-4 flex-grow border-2 reviews">
                <div className="">
                  <div className=" mb-3 flex items-center gap-3">
                    <h1 className=" leading-none space-x-3 text-[3vw] font-bold">
                      Reviews
                    </h1>
                    <span>{rating}</span>
                  </div>
                  <small className=" text-stone-500 font-semibold">
                    915 Total
                  </small>
                </div>
                <div className=" border-2 mt-3 grid grid-cols-1 gap-4 w-full">
                  <Prograss value={10} />
                  <Prograss value={20} />
                  <Prograss value={30} />
                  <Prograss value={40} />
                  {/* {reviews?.map((review, index) => (
                    <p key={index}>{review?.username}</p>
                  ))} */}
                </div>
              </div>
              <div className=" flex bg-white py-3 items-center flex-col px-4 gap-3 justify-center flex-1 company_activity">
                <div>
                  <h1>Most Concerning !</h1>
                </div>
                <div className=" w-full space-y-3">
                  <p className=" px-2 py-3  border-b w-full">Not Authorized </p>
                  <p className=" px-2 py-3  border-b w-full">Not Authorized </p>
                  <p className=" px-2 py-3  border-b w-full">Not Authorized </p>
                  <p className=" px-2 py-3  border-b w-full">Not Authorized </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex">
            <div className="  mx-auto flex gap-8 ">
              <form className=" mx-auto" method="dialog">
                <button className="btn bg-error">Close</button>
              </form>
              <form className="mx-auto " method="dialog">
                <button className="btn bg-success">continue</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
