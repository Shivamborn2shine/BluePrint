/**
 * config.js
 * Independent business configuration for Blue Door Café & Bakes, Dehradun
 */
export const BUSINESS_CONFIG = {
    id: 'blue-door-cafe-and-bakes',
    name: 'Blue Door Café & Bakes',
    tagline: 'Artisanal bakes, specialty coffee & handcrafted desserts in Dehradun',

    // Contact Details
    phone: '+917455866408',
    whatsapp: '917455866408',

    // Physical Location
    address: 'Clement Town, Dehradun, Uttarakhand 248002, India',
    coordinates: {
        latitude: 30.2629266,
        longitude: 77.9993898
    },

    // Google Maps Place & Review URLs
    googlePlaceId: '14447932579898534547',
    googleHexFeatureId: '0x39092b746f09dd97:0xc8815e220ba52a93',
    googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJl90Jb3QrCTkRkyqlCyJegcg',
    googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=14447932579898534547',
    mapsEmbedUrl: 'https://maps.google.com/maps?q=30.2629266,77.9993898&t=&z=16&ie=UTF8&iwloc=&output=embed',

    // Telemetry Sync with central ONESCAN Dashboard
    dashboardSync: true
};
