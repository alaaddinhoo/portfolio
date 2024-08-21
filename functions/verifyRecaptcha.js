const axios = require("axios");

exports.handler = async function (event, context) {
  const { token } = JSON.parse(event.body);

  const requestBody = {
    event: {
      token: token,
      expectedAction: "USER_ACTION", // Optional
      siteKey: "6LdokiQqAAAAAIvI20jxHA3mbRBAsVX_9M_yCQZu",
    },
  };

  const apiKey = "AIzaSyB0Rf7vViIR06uTHlwSABIlZBtc1FDyM1Q"; // Replace with your API key
  const verificationUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/tripify-ai-planner/assessments?key=${apiKey}`;

  try {
    const response = await axios.post(verificationUrl, requestBody);

    if (response.data.tokenProperties.valid) {
      return {
        statusCode: 200,
        body: JSON.stringify({ verified: true }),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({ verified: false }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to verify reCAPTCHA" }),
    };
  }
};
