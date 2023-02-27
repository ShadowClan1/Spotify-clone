import React, { useEffect, useState } from 'react'




type Props = {}

const Search: React.FC = ({}: Props)=> {
const change = (e : any) : void => {
setSearch(e.target.value);

}
const [data , setData ] = useState <any>([]);



const handleClick = (e :any)=>{

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e5d7681bcbmshe19a3a820d88b44p1a6e8ajsn2817547b058f',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
  fetch(`https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=5`, options)
    .then(response => response.json())
    .then((response : any) => {
    setData(response)})
    .catch(err => console.error(err));



e.preventDefault();
}



    const [search, setSearch] = useState<string>("")
  return (
    <div className='search'>




 <div className=''>
     
     <h4 >Search</h4>
     <hr/>

<div className='search-box'>
  <form>


<label htmlFor='search-box' > 
    <input type='text' placeholder='Enter First three key words' value={search} onChange={change} />
</label>

<button className='search-button' onClick={handleClick} >Search</button>
  </form>

</div>


</div>
{ data?.tracks?.hits?.length>0 && <>
<div className='content'>


<div className='content-box'>


      <div  > Songs  <hr/>  </div>

<div className='content-w' >
{data?.tracks?.hits?.map((element : any) =>
<div className='tile' key={element.track.title}> 
<img src={element.track.images.coverart ? element.track.images.coverarthq : ''} alt={element.track.title}   />
<h4>
{element.track.title}
</h4>

 </div>
)}
</div>
</div>

<div className='content-box'>


      <div  > Artists  <hr/>  </div>

<div className='content-w' >
{data?.artists?.hits?.map((element : any) =>
<div className='tile' key={element.artist.id}> 
<img src={element.artist.avatar ? element.artist.avatar : "https://pbs.twimg.com/profile_images/2746282753/e553dab99603f347ace1a8ee92d10f59_400x400.jpeg"} alt={element.artist.name}   />
<h4>
{element.artist.name}
</h4>

 </div>
)}
</div>
</div>
</div>
</>
}



    </div>
  )
}

export default Search