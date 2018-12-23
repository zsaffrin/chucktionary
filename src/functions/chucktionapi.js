import axios from 'axios';

const API_ENDPOINT = 'https://chucktionapi.firebaseapp.com/api/v1/';

exports.handler = async (event, context) =>
  await axios
    .get(API_ENDPOINT)
    .then(res => ({ statusCode: 200, body: res.data }))
    .catch(err => {
      console.error(err);
      return { statusCode: 422, body: String(err) };
    });
