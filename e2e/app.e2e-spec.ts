import { DevicereadyMeasurementPage } from './app.po';

describe('deviceready-measurement App', function() {
  let page: DevicereadyMeasurementPage;

  beforeEach(() => {
    page = new DevicereadyMeasurementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
