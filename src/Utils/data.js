
let dataJson;

async function swiggyApiCall() {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  console.log(data);
  const data0 = await data.json();
  const data1=await data0["data"]["cards"];
  dataJson=await data1[1]["card"].card.
  gridElements.infoWithStyle.restaurants ;
  console.log(dataJson);
}

// Call the function to fetch data
swiggyApiCall();

// Export the dataJson after the API call is complete
export const restaurantData = dataJson;
// export const restaurantData =
//   [
//     {
//       "name": "Meghana Foods",
//       "rating": "4.9 stars",
//       "price": "500 for two people",
//       "description": "Authentic biryani and other Indian delicacies.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Barbeque Nation",
//       "rating": "4.7 stars",
//       "price": "1500 for two people",
//       "description": "All-you-can-eat BBQ and buffet.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Pizza Hut",
//       "rating": "4.3 stars",
//       "price": "800 for two people",
//       "description": "Wide variety of pizzas and sides.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "KFC",
//       "rating": "4.2 stars",
//       "price": "700 for two people",
//       "description": "Famous for fried chicken and more.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Domino's Pizza",
//       "rating": "4.4 stars",
//       "price": "750 for two people",
//       "description": "Delicious pizzas delivered fast and hot.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Subway",
//       "rating": "4.1 stars",
//       "price": "500 for two people",
//       "description": "Fresh and customizable sandwiches.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "McDonald's",
//       "rating": "4.5 stars",
//       "price": "600 for two people",
//       "description": "World's favorite burgers and fries.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Taco Bell",
//       "rating": "4.0 stars",
//       "price": "650 for two people",
//       "description": "Mexican-inspired fast food.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Olive Garden",
//       "rating": "4.6 stars",
//       "price": "1200 for two people",
//       "description": "Italian dishes with a modern twist.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Chili's",
//       "rating": "4.3 stars",
//       "price": "1100 for two people",
//       "description": "Bold flavors and Southwest style.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Cheesecake Factory",
//       "rating": "4.8 stars",
//       "price": "2000 for two people",
//       "description": "Extensive menu and decadent cheesecakes.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Red Lobster",
//       "rating": "4.5 stars",
//       "price": "1800 for two people",
//       "description": "Seafood dishes and fresh catches.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Panera Bread",
//       "rating": "4.2 stars",
//       "price": "700 for two people",
//       "description": "Bakery-cafe with fresh ingredients.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Chipotle",
//       "rating": "4.4 stars",
//       "price": "900 for two people",
//       "description": "Customizable burritos and bowls.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "P.F. Chang's",
//       "rating": "4.6 stars",
//       "price": "1600 for two people",
//       "description": "Asian cuisine and signature cocktails.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Outback Steakhouse",
//       "rating": "4.5 stars",
//       "price": "1500 for two people",
//       "description": "Steakhouse with Australian-themed dishes.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Buffalo Wild Wings",
//       "rating": "4.3 stars",
//       "price": "1000 for two people",
//       "description": "Wings, beer, and sports.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Applebee's",
//       "rating": "4.1 stars",
//       "price": "800 for two people",
//       "description": "Neighborhood grill and bar.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "IHOP",
//       "rating": "4.2 stars",
//       "price": "600 for two people",
//       "description": "Pancakes and breakfast favorites.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Denny's",
//       "rating": "4.0 stars",
//       "price": "550 for two people",
//       "description": "America's diner with classic dishes.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Five Guys",
//       "rating": "4.5 stars",
//       "price": "900 for two people",
//       "description": "Handcrafted burgers and fries.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Wingstop",
//       "rating": "4.3 stars",
//       "price": "700 for two people",
//       "description": "Flavorful wings and fries.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Sonic Drive-In",
//       "rating": "4.0 stars",
//       "price": "600 for two people",
//       "description": "Drive-in fast food and drinks.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Shake Shack",
//       "rating": "4.7 stars",
//       "price": "1200 for two people",
//       "description": "Gourmet burgers and shakes.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "In-N-Out Burger",
//       "rating": "4.8 stars",
//       "price": "800 for two people",
//       "description": "West Coast classic burgers.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Panda Express",
//       "rating": "4.1 stars",
//       "price": "650 for two people",
//       "description": "Fast casual Chinese cuisine.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     },
//     {
//       "name": "Jamba Juice",
//       "rating": "4.2 stars",
//       "price": "400 for two people",
//       "description": "Fresh smoothies and juices.",
//       "image": "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//     }]