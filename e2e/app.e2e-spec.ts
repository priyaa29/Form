import { AngularFormappPage } from './app.po';

describe('angular-formapp App', () => {
  let page: AngularFormappPage;

  beforeEach(() => {
    page = new AngularFormappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
