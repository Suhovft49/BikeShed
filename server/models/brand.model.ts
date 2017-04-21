import * as mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  name: String,
  logo: String
});

const Brand = mongoose.model('Bike', brandSchema);

export default Brand;
