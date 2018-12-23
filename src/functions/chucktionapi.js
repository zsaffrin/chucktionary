const fetch = require('node-fetch');

const API_ENDPOINT = 'https://chucktionapi.firebaseapp.com/api/v1/';

exports.handler = async function(event, context) {
  try {
    const response = await fetch(API_ENDPOINT);
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
