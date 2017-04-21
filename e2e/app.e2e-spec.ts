import { BikeShedPage } from './app.po';

describe('bike-shed App', () => {
  let page: BikeShedPage;

  beforeEach(() => {
    page = new BikeShedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
