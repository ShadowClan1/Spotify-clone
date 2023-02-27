import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import GridOfSongs from './GridOfSongs';
type Props = {
  data : any;
}

function Content({data}: Props) {
const   handleClickFav = (id : string) :void =>{

console.log(id)

}
  return (
    <div className='content'>

<div className='content-box'>


      <div  > Newly Released  <hr/>  </div>
      <div className='content-w' >
{data?.map((data : any)   => <GridOfSongs element={data} />

)}
</div>
</div>
<div className='content-box'>


<div className='content-title' > Newly Released  <hr/>  </div>
<div className='content-w' >
{data?.map((data : any) => <GridOfSongs element={data}/>
)}


</div>



</div>
    </div>
  )
}

export default Content