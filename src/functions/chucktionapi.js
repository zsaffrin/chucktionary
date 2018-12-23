import axios from 'axios';

const API_ENDPOINT = 'https://chucktionapi.firebaseapp.com/api/v1/';

const handler = async (event, context) =>
  axios
    .get(API_ENDPOINT)
    .then(res => ({ statusCode: 200, body: res.data }))
    .catch(err => ({ statusCode: 422, body: String(err) }));

export default handler;
