import { useRef, useState } from "react";
import SearchBar from "./SearchBar";

const Body = () => {
  // const [res, setRes] = useState([]);
  const inputElement = useRef();
  const onSearchButton = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputElement.current.value}`
    );
    const json = await data.json();
    // setRes(json);
    console.log(json);
  };

  return (
    <div className="flex items-center justify-center">
      <SearchBar inputElement={inputElement} onSearchButton={onSearchButton} />
    </div>
  );
};

export default Body;
