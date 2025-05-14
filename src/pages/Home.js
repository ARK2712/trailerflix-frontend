import React, { useEffect, useState } from "react";
import axios from "axios";
import TrailerCard from "../components/TrailerCard";

function Home() {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/trailers"
        );
        setTrailers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrailers();
  }, []);

  return (
    <div className="container mx-auto py-10 px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {trailers.map((trailer) => (
        <TrailerCard key={trailer._id} trailer={trailer} />
      ))}
    </div>
  );
}

export default Home;
