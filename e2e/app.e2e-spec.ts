import { CheckpointerPage } from './app.po';

describe('checkpointer App', function() {
  let page: CheckpointerPage;

  beforeEach(() => {
    page = new CheckpointerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
