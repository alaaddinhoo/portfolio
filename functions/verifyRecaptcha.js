const axios = require("axios");

exports.handler = async function (event, context) {
  const { token } = JSON.parse(event.body);

  const secretKey = "6LdokiQqAAAAAK6eGO9I6gWGGzUO5ilxi3UwR0AW";

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await axios.post(verificationUrl);

    if (response.data.success) {
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
