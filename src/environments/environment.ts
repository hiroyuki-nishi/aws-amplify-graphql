export const environment = {
  production: false,
  amplify: {
    AppSync: {
      aws_appsync_graphqlEndpoint: 'Your Endpoint',
      aws_appsync_region: 'ap-northeast-1',
      aws_appsync_authenticationType: 'API_KEY',
      aws_appsync_apiKey: 'Your Api Key'
    }
  }
};

