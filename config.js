let devConfig = {
    DBURL: 'mongodb://127.0.0.1:27017/hackernews',
    PORT:3000,
  };

  let prodConfig = {};

  if(process.env.ENV === 'production'){
      config = prodConfig;
  }else{
      config = devConfig;
  }

  module.exports=config;