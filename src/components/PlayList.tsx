import React, { useContext, useEffect, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import GridOfSongs from "./GridOfSongs";
import context1 from "../context/Context1";
type Props = {};

function PlayList({}: Props) {
  useEffect(() => {
    // setPlaylist([]);
    console.log(playlist);
  }, []);

  const context = useContext(context1);
  const { favArr, setFavArr, data, playlist, setPlaylist, arrReturn } = context;

  const newArr = arrReturn(data, playlist[0]?.arr);

  return (
    <div className="fav-block">
      <div className="fav-songs">
        <div className="content">
          {playlist.map((e: any) => {
            return (
              <div key={e.name} className="content-box">
                <div>
                  {" "}
                  {e?.name} <hr />{" "}
                </div>
                <div className="content-w">
                  {arrReturn(data, e?.arr).map((e: any) => {
                    return <GridOfSongs element={e} />;
                  })}
                </div>
              </div>
            );
          })}

          <div>
            <div className="add-song">
              <GrAddCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
