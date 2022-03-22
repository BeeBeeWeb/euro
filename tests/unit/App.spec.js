import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';

import App from '../../src/App.vue';


describe('App.vue', () => {
  const localVue = createLocalVue();

  let vuetify;
  let wrapper;

  beforeEach(() => {
    vuetify = new Vuetify();

    wrapper = mount(App, {
      localVue,
      vuetify,
      data: () => (
        {
          offers: {
            data: [
              {
                "origin": "FRA",
                "destination": "FCO",
                "departureDate": "2022-04-13",
                "returnDate": "2022-04-13",
                "seatAvailability": "7",
                "offerType": "Best Price",
                "uuid": "1",
                "price": {
                  "amount": "128.26",
                  "currency": "EUR"
                }
              },
              {
                "origin": "AAQ",
                "destination": "ABJ",
                "departureDate": "2022-04-13",
                "returnDate": "2022-04-13",
                "seatAvailability": "9",
                "offerType": "Best Price",
                "uuid": "2",
                "price": {
                  "amount": "128.26",
                  "currency": "EUR"
                }
              },
              {
                "origin": "FRA",
                "destination": "ABZ",
                "departureDate": "2022-04-13",
                "returnDate": "2022-04-13",
                "seatAvailability": "3",
                "offerType": "Best Price",
                "uuid": "2",
                "price": {
                  "amount": "99.26",
                  "currency": "EUR"
                }
              },
              {
                "origin": "ACC",
                "destination": "ADB",
                "departureDate": "2022-04-13",
                "returnDate": "2022-04-13",
                "seatAvailability": "32",
                "offerType": "Best Price",
                "uuid": "2",
                "price": {
                  "amount": "289.26",
                  "currency": "EUR"
                }
              }
            ]
          }
        }
      )
    });
  });

  it('is a vue instance', () => {
    const wrapper = mount(App, {
      localVue,
      vuetify,
    });
    // console.log(wrapper.html());

    expect(wrapper.vm).toBeTruthy();
  });

  it('renders the list of offers', () => {
    
    // console.log(wrapper.html());
    const offerRows = wrapper.findAll('tbody tr');

    expect(offerRows).toHaveLength(4);
  });

  it('filters the result set by origin or destination', async () => {

    await wrapper.setData({ search: 'ACC' });

    const offerRows = wrapper.findAll('tbody tr');

    expect(offerRows).toHaveLength(1);

    const filteredOffer = wrapper.find('tbody tr td:first-of-type');

    expect(filteredOffer.text()).toBe('ACC');
  })
})