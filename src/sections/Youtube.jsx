import React from 'react'

const Youtube = () => {
  return (
    <div className="flex justify-center items-center w-[100%] py-[50px]">
      <div>
        <iframe
          //   autoplay="true"
          autoplay
          width="560"
          height="315"
          src="https://www.Youtube.com/embed/PXD06IbazfQ?si=1J_f9Ln9x2TKKB2i"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube
