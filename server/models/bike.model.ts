import * as mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number
});

const Bike = mongoose.model('Bike', bikeSchema);

export default Bike;
