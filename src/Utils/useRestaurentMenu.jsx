import { useEffect,useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resinfo, setresinfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json);
    setresinfo(json.data);
  };
  return resinfo;
};

export default useRestaurantMenu;


