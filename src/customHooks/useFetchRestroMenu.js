import { useState, useEffect, useCallback } from "react";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../utils/constants";

const useFetchRestroMenu = (url) => {
  const [restroMenuState, setRestroMenuState] = useState(null);
  const [restroMenuListState, setRestroMenuListState] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();

      // Set restaurant data
      const restaurantData =
        jsonData?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestroMenuState(restaurantData);

      // Set menu item data
      const menuItemsData = jsonData?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY);
      // ?.map((x) => x.itemCards)
      // .flat()
      // .map((x) => x.card?.info) || [];

      setRestroMenuListState(menuItemsData);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
      setRestroMenuState(null);
      setRestroMenuListState([]);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Use useMemo to avoid recalculating unique items on every render
  // const uniqueMenuItems = useMemo(() => {
  //   const seen = new Set();
  //   return restroMenuListState.filter((item) => {
  //     if (seen.has(item.id)) {
  //       return false;
  //     }
  //     seen.add(item.id);
  //     return true;
  //   });
  // }, [restroMenuListState]);

  return [restroMenuState, restroMenuListState];
};

export default useFetchRestroMenu;
