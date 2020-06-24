const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    userId: Schema.Types.ObjectId,
    username: {
        type: String,
        required: [true,'必须输入虎克小哥哥的名字']
    },
})
module.exports=mongoose.model('TEMP_Users', usersSchema)