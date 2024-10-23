import { useState, useEffect } from "react";

export const useSwiggyApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const swiggyApiCall = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://food-proxy-d53f.onrender.com/api/proxy/swiggy/dapi/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        const data1 = data?.data?.cards;
        console.log(data1);
        const dataJson =  data1[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(dataJson);
        setData(dataJson);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      setLoading(false);
    };

    swiggyApiCall();
  }, []);

  return { data, loading };
};
