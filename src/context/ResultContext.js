import { useState, createContext, useContext } from "react";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "0dd2be6652msh8252a947bc6760dp13dff6jsna780b74034fd",
      },
    });
    const data = await response.json();

    if(type.includes('/news')) {
       setResults(data.entries);
    } else if(type.includes('/images')) {
       setResults(data.image_results);
    } else {
      console.log({ data });
       setResults(data.results);
    }
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading, setIsLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);