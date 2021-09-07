const axios = require("axios");

const evaluateStatus = (status) => {
  if (status === 201) {
    console.log("Post successful");
  } else {
    console.log("Post unsuccessful");
  }
};

const postProperty = (property) => {
  return axios
    .post("http://localhost:3000/api/v1/PropertyListing/", property)
    .then((response) => {
      evaluateStatus(response.status);
      console.log(response.data);
    });
};

export default postProperty;
