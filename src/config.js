export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "yzr-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://7o1io51s0d.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_kPSZWaU8n",
      APP_CLIENT_ID: "74ec4354tolh31uuov7jn687c2",
      IDENTITY_POOL_ID: "us-east-2:9415f799-30ff-4d1d-91bd-f881567774ba"
    },
    
    // limiting the file size of attachment
    MAX_ATTACHMENT_SIZE: 5000000

  };
  