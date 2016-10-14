import { TechnobrainPage } from './app.po';

describe('technobrain App', function() {
  let page: TechnobrainPage;

  beforeEach(() => {
    page = new TechnobrainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
