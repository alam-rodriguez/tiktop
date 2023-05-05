export const getAccessToken = async () => {
  const url = 'https://open.tiktokapis.com/v2/oauth/token/';
  const options = {
    method: 'POST',
    Headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: {
      'client_key': 'aw7ndcvep1fehhc9',
      'client_secret': '83e75e2e20e04d45e494d941a4d4ae29',
      'grant_type': 'client_credentials',
    }
  };

  try{
    const response = await fetch(url, options);

    return response;
  }catch(e){
    return e;
  }


}