import React from 'react'

//     handling props
function Card({Fname, btnText = "can also give default value here "}) {    //   instead of using props we can direct give the value inside "{Fname}"
    // console.log("props", props);
    console.log(Fname);    //    if element name is given in the parameter no need to write "props._"
    console.log(btnText);
    

    return (
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h2 className="font-bold ">{Fname}</h2>
            <h3>Price</h3>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            {/* "visit me"  is the default value  can also give in parameter*/}
            <p>{btnText || "visit me"}</p>   
          </div>
        </div>
      </div>
    )
}

export default Card