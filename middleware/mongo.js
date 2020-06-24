const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/npmhookdb';
module.exports= {
  startConnect: ()=> {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, '-------mongodb connect error---------'));
    db.once('open', ()=> {
      console.log('-^-^-^-^-^-  Mongodb Connect SUCCESS  -^-^-^-^-^-');
    })
  }
}
