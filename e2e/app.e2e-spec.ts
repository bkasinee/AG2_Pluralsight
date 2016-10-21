import { AG2PluralsightPage } from './app.po';

describe('ag2-pluralsight App', function() {
  let page: AG2PluralsightPage;

  beforeEach(() => {
    page = new AG2PluralsightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
