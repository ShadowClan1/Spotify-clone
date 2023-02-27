import React, { useContext, useEffect } from "react";
import context1 from "../context/Context1";

import { GrAddCircle } from "react-icons/gr";
import GridOfSongs from "./GridOfSongs";

const Fav = () => {
  const context = useContext(context1);

  const { favArr, setFavArr, data, arrReturn } = context;

  const newArr = arrReturn(data, favArr).reverse();

  // const arrrrr = newArr.reverse();

  return (
    <div className="fav-block">
      <div className="fav-songs">
        <div className="content">
          <div className="content-box">
            <div>
              {" "}
              Recently Added <hr />{" "}
            </div>
            <div className="content-w">
              {  newArr?.map((e: any) => { 
                return e.key && <GridOfSongs element={e} />;
              })}

              {favArr.length === 0 && (
                <div>
                  <div className="add-song">
                    <GrAddCircle />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="content-box">
            <div className="content-title">
              {" "}
              All songs <hr />{" "}
            </div>
            <div className="content-w">

            {  newArr?.map((e: any) => { 
                return e.key && <GridOfSongs element={e} />;
              })}

              {favArr.length === 0 && (
                <div>
                  <div className="add-song">
                    <GrAddCircle />
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fav;
