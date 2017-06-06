import { Angular2SearchCompPage } from './app.po';

describe('angular2-search-comp App', function() {
  let page: Angular2SearchCompPage;

  beforeEach(() => {
    page = new Angular2SearchCompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
