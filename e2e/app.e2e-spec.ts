import { AngularRutasPage } from './app.po';

describe('angular-rutas App', () => {
  let page: AngularRutasPage;

  beforeEach(() => {
    page = new AngularRutasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
