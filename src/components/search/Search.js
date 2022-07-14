import React from "react";
import searchData from "./searchData";
import { useState } from "react";

const Search = () => {
  console.log(searchData);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      {searchData
        .filter((value) => {
          if (searchTerm == "") {
            return value;
          } else if (value.name.includes(searchTerm)) {
            return value;
          }
        })

        .map((value) => {
          return (
            <>
              <p> {value.name}</p>
              {/* {Search} */}
            </>
          );
        })}
    </div>
  );
};

export default Search;
