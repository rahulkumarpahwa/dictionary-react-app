import { useRef, useState } from "react";
import SearchBar from "./SearchBar";

const Body = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const inputElement = useRef();

  const onSearchButton = async () => {
    setError(null); // Clear previous errors
    setResult(null); // Clear previous results
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputElement.current.value}`
      );
      if (!response.ok) {
        throw new Error("Word not found");
      }
      const data = await response.json();
      setResult(data[0]); // Assuming the first result is the most relevant
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchBar inputElement={inputElement} onSearchButton={onSearchButton} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-2xl font-bold">{result.word}</h2>
          {result.phonetics?.[0]?.text && (
            <p className="text-gray-500">{result.phonetics[0].text}</p>
          )}
          {result.phonetics?.[0]?.audio && (
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => new Audio(result.phonetics[0].audio).play()}
            >
              Play Pronunciation
            </button>
          )}
          <div className="mt-2">
            {result.meanings.map((meaning, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{meaning.partOfSpeech}</h3>
                <ul className="list-disc list-inside">
                  {meaning.definitions.map((definition, i) => (
                    <li key={i}>{definition.definition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
