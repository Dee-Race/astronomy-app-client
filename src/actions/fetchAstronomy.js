const URL = `https://api.nasa.gov/planetary/apod?api_key=${
  process.env.REACT_APP_NASA_API_KEY
}`;

// Async Actions //

// GET NOTES - FETCH REQUEST

export const fetchAstronomyData = () => {
  let data = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return dispatch => {
    fetch(`${URL}`, data)
      .then(response => response.json())
      .then(astronomy =>
        dispatch({
          type: "FETCH_ASTRONOMY_DATA",
          payload: astronomy
        })
      )
      .catch(error => console.log(error));
  };
};
