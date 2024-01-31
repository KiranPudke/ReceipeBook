"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2"; 

const APP_ID = 'db481d36';
const API_KEY = '59594c9e84fe79dbd6d4b4e4cd0ae73f';
const TYPE = "public";


// exported function
export const fetchData = async function (queries, successCallback) {

  //cobstructing API request
  const query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

  // fetching data
  const response = await fetch(url);
  if (response.ok) {
      const data = await response.json();
      successCallback(data);
  }
}

