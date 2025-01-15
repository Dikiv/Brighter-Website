import supabase from '../lib/utils'
//import { useState } from "react";

export default async function ReviewImage({ id }: { id: string }) {
    const { data: Img} = await supabase
    .storage
    .from('GameCoverArt')
    .getPublicUrl(id)
    

    const imageUrl = Img?.publicUrl

    return (
        
      <div className="w-full">

          <img
            src={imageUrl}
            //"img/americano.jpg"
            alt="Game Image"
            className="object-cover w-full h-full"
           
          />
      </div>
 
      )

}