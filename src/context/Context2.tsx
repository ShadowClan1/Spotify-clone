import { useState } from "react";

import context1 from "./Context1";

type context ={
    children : any;
}

const Context2 = (props : context)=>{
    const [data, setData] = useState<any>([]);
    const [playlist, setPlaylist] = useState<any>([{ name : "Playlist1"  , arr : ["501844142"]}]);
    const [favArr, setFavArr] = useState<any>([]);
    const fetchFunction = ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e5d7681bcbmshe19a3a820d88b44p1a6e8ajsn2817547b058f',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        
        fetch('https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US', options)
            .then(response => response.json())
            .then(response => {
            setData(response.tracks)})
            .catch(err => console.error(err));
    
    
    }

    const arrReturn = (arr1 : Array<any>, arr2 : Array<string>):Array<any> =>{
        const newArr = [];
        
        for(let i = 0; i< arr2?.length ; i++){
        
          newArr.push( arr1.filter((e:any)=> e.key === arr2[i])[0]!== undefined && arr1.filter((e:any)=> e.key === arr2[i])[0]);
        
        }
        // console.log(data);
        // {console.log(newArr)}
        return newArr;
        
        }



    const loadFav = () =>{
        
const newArr = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("favDat"))));
if(newArr !==null && newArr.length > 0 ) setFavArr(newArr)



    }

return (<context1.Provider value={{loadFav, data, setData , fetchFunction, favArr, setFavArr, setPlaylist, playlist, arrReturn}}>
{props.children}
</context1.Provider>)


}

export default Context2;

