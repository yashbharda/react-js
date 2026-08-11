import React from 'react'

function Card(props) {
    console.log("props",props);
    
  return (
    <div className="w-80 flex flex-col rounded-xl bg-black min-h-[19rem]">
      
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="w-full h-64 object-cover object-center rounded-t-xl"
        />
      </div>

      <div className="flex flex-col py-3 px-3 pb-6">

        <div className="flex justify-between items-center gap-3">
          <h1 className="font-bold text-lg">
            Bored ape nft accidental
          </h1>

          <h1 className="text-sm whitespace-nowrap">
            Price
          </h1>
        </div>

        <div className="flex justify-between mt-2">
          <p>#345</p>
          <p>{props.btnText}</p>
        </div>

      </div>
    </div>
  )
}

export default Card