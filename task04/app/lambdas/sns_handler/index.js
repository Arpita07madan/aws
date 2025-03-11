exports.handler = async (event) => {
    console.log("SNS Event Received:", JSON.stringify(event, null, 2));

    return {
        statusCode: 200,
        body: JSON.stringify('SNS message processed successfully!')
    };
};
