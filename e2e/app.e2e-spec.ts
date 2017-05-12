import { SodwepPage } from './app.po';

describe('sodwep App', () => {
  let page: SodwepPage;

  beforeEach(() => {
    page = new SodwepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
