import * as express from 'express';

import BikesCtrl from './controllers/bike';
import Bike from './models/bike.model';
import BrandsCtrl from './controllers/bike';
import Brand from './models/bike.model';

export default function setRoutes(app) {

  const bikes = new BikesCtrl();
  const brands = new BrandsCtrl();

  // APIs
  app.route('/api/bikes').get(bikes.getAll);
  app.route('/api/brands').get(brands.getAll);
  app.route('/api/bike').post(bikes.insert);
  app.route('/api/bike/:id').get(bikes.get);
  app.route('/api/bike/:id').put(bikes.update);
  app.route('/api/bike/:id').delete(bikes.delete);

}
