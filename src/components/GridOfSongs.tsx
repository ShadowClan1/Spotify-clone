import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import context1 from "../context/Context1";
type Props = {
  element: any;
};

const GridOfSongs = ({ element }: Props) => {
  const context = useContext(context1);
  const { favArr, setFavArr } = context;

  const handleClickFav =  (key: any): void => {
    console.log(favArr);
    
    console.log(element.key);
    if ( favArr.filter((e: any) => element.key === e).length === 0) {
   setFavArr([...favArr, element.key]);



    } else {
      setFavArr( favArr.filter((e: any) => e !== element.key))

      
    }
    if( favArr.length == 0) { console.log("Deleting storage")
    
    localStorage.removeItem("favDat")} 
    console.log(favArr);
    
      const tempData =  JSON.stringify(favArr)
    

      
      localStorage.removeItem("favDat");

    localStorage.setItem("favDat", tempData );
  };

  return (
    <>
      <div className="tile" key={element.key}>
        <div className="img-cover">
          <div className="fav-icons">
            <div>
              {favArr.filter((e: any) => element.key === e).length === 0 ? (
                <>
                  <div
                    onClick={() => {
                      handleClickFav(element.key);
                    }}
                  >
                    <AiOutlineHeart />
                  </div>

                  <h5>Add to fav</h5>
                </>
              ) : (
                <>
                  <div onClick={() =>{
                    handleClickFav(element.key)
                  }}>
                    <AiFillHeart />
                  </div>

                  <h5>Remove</h5>
                </>
              )}
            </div>
            <div>
              <div>
                <BsFillBookmarkHeartFill />
              </div>
              <h5>Add to playlist</h5>
            </div>
          </div>
          <img src={element.images?.coverart} alt={element.title} />
        </div>

        <h4>{element?.title?.substr(0, 20)}</h4>
      </div>
    </>
  );
};

export default GridOfSongs;
