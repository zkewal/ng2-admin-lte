import { Ng2lteupgradePage } from './app.po';

describe('ng2lteupgrade App', function() {
  let page: Ng2lteupgradePage;

  beforeEach(() => {
    page = new Ng2lteupgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
