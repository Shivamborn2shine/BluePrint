/**
 * ===========================================================================
 * BLUE DOOR CAFE & BAKES — MASTER SITE CONFIGURATION
 * ===========================================================================
 * 
 * Edit any link, phone, WhatsApp message, map, or review URL here.
 * Changes made in this file automatically update the ENTIRE website!
 * ===========================================================================
 */

// ===========================================================================
// 1. SITE LINKS & BUTTONS (Call, WhatsApp, Maps, Review Page)
// ===========================================================================
const SITE_LINKS = {

    // --- PHONE NUMBER ------------------------------------------------------
    // Used by the "Call" button. Include country code (+91 for India).
    phone: '+917455866408',

    // --- WHATSAPP ----------------------------------------------------------
    // Mobile number without "+" or special characters.
    whatsappNumber: '917455866408',

    // Default message that appears in the customer's WhatsApp chat (URL-encoded).
    whatsappMessage: 'Hi%20Blue%20Door%20Caf%C3%A9%20%26%20Bakes,%20I%20would%20like%20to%20order%20or%20reserve%20a%20table',

    // --- GOOGLE MAPS / DIRECTIONS ------------------------------------------
    // Used by "Directions", "Open in Maps", and address card links.
    googleMapsUrl: 'https://www.google.com/maps?cid=14447932579898534547',

    // --- GOOGLE MAP EMBED (iframe src) -------------------------------------
    // From Google Maps -> Share -> Embed a map -> copy only the src="..." URL.
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.0186942214077!2d77.99681487526102!3d30.262931208186323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b746f09dd97%3A0xc8815e220ba52a93!2sBlue%20Door%20Cafe%20and%20Bakes!5e1!3m2!1sen!2sin!4v1792500845424!5m2!1sen!2sin',

    // --- GOOGLE REVIEW SUBMISSION PAGE -------------------------------------
    // Redirects the user here immediately after clicking "Copy & Open Google Review".
    googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJl90Jb3QrCTkRkyqlCyJegcg',

    // --- INSTAGRAM PROFILE -------------------------------------------------
    // Direct link to Instagram profile
    instagramUrl: 'https://www.instagram.com/blue_door_cafe',

    // --- GOOGLE PLACE ID ---------------------------------------------------
    googlePlaceId: 'ChIJl90Jb3QrCTkRkyqlCyJegcg',
};

// ===========================================================================
// 2. BUSINESS PROFILE & DETAILS
// ===========================================================================
const BUSINESS_CONFIG = {
    id: 'blue-door-cafe-and-bakes',
    name: 'Blue Door Café & Bakes',
    tagline: 'Artisanal bakes, specialty coffee & handcrafted desserts in Dehradun',
    address: 'Clement Town, Dehradun, Uttarakhand 248002, India',
    fallbackQuery: 'Blue Door Cafe and Bakes Dehradun',

    coordinates: {
        latitude: 30.2629266,
        longitude: 77.9993898
    },

    // Derived from SITE_LINKS (no need to change these manually)
    phone: SITE_LINKS.phone,
    whatsapp: SITE_LINKS.whatsappNumber,
    googlePlaceId: SITE_LINKS.googlePlaceId,
    googleReviewUrl: SITE_LINKS.googleReviewUrl,
    googleWriteReviewUrl: SITE_LINKS.googleReviewUrl,
    googleMapsUrl: SITE_LINKS.googleMapsUrl,
    mapsEmbedUrl: SITE_LINKS.mapEmbedUrl,

    // Telemetry Sync with central ONESCAN Dashboard
    dashboardSync: true
};

// ===========================================================================
// 3. AUTOMATIC LINK BINDING ENGINE
// ===========================================================================
/**
 * applyLinks()
 * Finds every element with a [data-link="..."] attribute and attaches
 * the correct URL automatically:
 *   - data-link="call"        -> Phone dialer (tel:...)
 *   - data-link="whatsapp"    -> Direct WhatsApp chat
 *   - data-link="directions"  -> Google Maps link
 *   - data-link="review"      -> Google write-review page
 *   - data-link="mapEmbed"    -> Sets iframe src
 */
function applyLinks() {
    const map = {
        call: 'tel:' + SITE_LINKS.phone,
        whatsapp: 'https://wa.me/' + SITE_LINKS.whatsappNumber + '?text=' + SITE_LINKS.whatsappMessage,
        directions: SITE_LINKS.googleMapsUrl,
        instagram: SITE_LINKS.instagramUrl,
        review: SITE_LINKS.googleReviewUrl,
        mapEmbed: SITE_LINKS.mapEmbedUrl,
    };

    document.querySelectorAll('[data-link]').forEach(el => {
        const key = el.dataset.link;
        const url = map[key];
        if (!url) return;

        if (el.tagName === 'IFRAME') {
            el.src = url;
        } else {
            el.href = url;
        }
    });
}

// ===========================================================================
// 4. GLOBAL EXPORTS & LIFECYCLE
// ===========================================================================
if (typeof window !== 'undefined') {
    window.SITE_LINKS = SITE_LINKS;
    window.BUSINESS_CONFIG = BUSINESS_CONFIG;
    window.applyLinks = applyLinks;

    // Auto-run when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyLinks);
    } else {
        applyLinks();
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SITE_LINKS, BUSINESS_CONFIG, applyLinks };
}
