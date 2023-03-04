import { useEffect, useState } from "react";

import { GalleryCard } from "./components/GalleryCard/GalleryCard";

import { IDataFetchUsers } from "./types";

const App = () => {
  const [data, setData] = useState<IDataFetchUsers[]>([]);

  useEffect(() => {
    fetch("https://postapi.onrender.com/api/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <main>{data && <GalleryCard data={data} />}</main>;
};

export default App;
