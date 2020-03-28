/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'towels',
    label: 'Towels',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'swimming_pool',
    label: 'Swimming pool',
  },
  {
    key: 'own_drinks',
    label: 'Own drinks allowed',
  },
  {
    key: 'jacuzzi',
    label: 'Jacuzzi',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'barbeque',
    label: 'Barbeque',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];
export const diasDisponibles = [
  { key: 'lunes', label: 'Lunes' },
  { key: 'martes', label: 'Martes' },
  { key: 'miércoles', label: 'Miércoles' },
  { key: 'jueves', label: 'Jueves' },
  { key: 'viernes', label: 'Viernes' },
  { key: 'sabado', label: 'Sábado' },
  { key: 'domingo', label: 'Domingo' },
];
// export const categories = [
//   { key: 'smoke', label: 'Smoke' },
//   { key: 'electric', label: 'Electric' },
//   { key: 'wood', label: 'Wood' },
//   { key: 'other', label: 'Other' },
// ];

export const hours = [
  { key: '1', label: '01h00' },
  { key: '2', label: '02h00' },
  { key: '3', label: '03h00' },
  { key: '4', label: '04h00' },
  { key: '5', label: '05h00' },
  { key: '6', label: '06h00' },
  { key: '7', label: '07h00' },
  { key: '8', label: '08h00' },
  { key: '9', label: '09h00' },
  { key: '10', label: '10h00' },
  { key: '11', label: '11h00' },
  { key: '12', label: '12h00' },
  { key: '13', label: '13h00' },
  { key: '14', label: '14h00' },
  { key: '15', label: '15h00' }, 
  { key: '16', label: '16h00' },
  { key: '17', label: '17h00' },
  { key: '18', label: '18h00' },
  { key: '19', label: '19h00' },
  { key: '20', label: '20h00' },
  { key: '21', label: '21h00' },
  { key: '22', label: '22h00' },
  { key: '23', label: '23h00' },
  { key: '24', label: '00h00' },
];




export const categories = [
  { key: 'comida', label: 'Comida' },
  { key: 'servicios_para_el_hogar', label: 'Servicios para el hogar' },
  { key: 'mascotas', label: 'Mascotas' },
  { key: 'clases', label: 'Clases' },
  { key: 'deportes', label: 'Deportes' },
  { key: 'cultura_e_historia', label: 'Cultura e Historia' },
  { key: 'bienestar', label: 'Bienestar' },
  { key: 'servicios_profesionales', label: 'Servicios profesionales' },
  { key: 'salud_fisica_y_recreacion', label: 'Salud física y recreación' },
  { key: 'entretenimiento', label: 'Entretenimiento' },
  { key: 'musica', label: 'Música' },
  { key: 'manualidades', label: 'Manualidades' },
  { key: 'belleza', label: 'Belleza' },
  { key: 'jardin', label: 'Jardín' },
  { key: 'vida_y_estilo', label: 'Vida y estilo' }, 
  { key: 'salud', label: 'Salud' },
  { key: 'seguridad', label: 'Seguridad' },
  { key: 'educacion', label: 'Educación' },
  { key: 'tiempo_libre', label: 'Tiempo libre' },
  { key: 'moda', label: 'Moda' },
  { key: 'productos_para_el_hogar', label: 'Productos para el hogar' },
  { key: 'otros', label: 'Otros' },
];


// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
