/**
 * Jai Punjab Bakery — central business configuration.
 * Edit the values below to update the site. Items left as empty
 * strings will not be shown on the page.
 */
export const bakeryConfig = {
  name: 'Jai Punjab Bakery',
  tagline: 'A Little Sweetness for Every Occasion',
  location: 'Mansa, Punjab, India',
  announcement:
    'Something sweet for every celebration — fresh baked daily.',

  // Leave empty to hide a detail until it is verified.
  address: 'Cinema Road, Guru Gobind Singh Nagar, Mansa, Punjab 151505, India',
  phone: '',
  whatsapp: '',
  email: '',

  // Opening hours — array of { days, hours }.
  openingHours: [
    { days: 'Monday – Saturday', hours: '' },
    { days: 'Sunday', hours: '' },
  ],

  // Social links — only shown when non-empty.
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },

  // Google Maps search/directions link for the verified address.
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Jai+Punjab+Bakery%2C+Cinema+Road%2C+Guru+Gobind+Singh+Nagar%2C+Mansa%2C+Punjab+151505',

  attribution: 'Website concept by TerraNova',
};
