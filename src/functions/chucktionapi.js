import axios from 'axios';

const API_ENDPOINT = 'https://chucktionapi.firebaseapp.com/api/v1/';

exports.handler = async (event, context) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.data;

    return {
      statusCode: 200,
      body: data,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: String(err),
    };
  }
};
