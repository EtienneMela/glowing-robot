const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: 'task1 cannot be blank'
    },
    desc: {
      type: String,
      required: 'task2  cannot be blank'
    },
    price: {
      type: String,
      required: 'Price cannot be blank'
    },
    img: {
      type: String,
      required: 'Img cannot be blank'
    }
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);