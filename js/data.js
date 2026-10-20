/**
 * data.js
 * MASTER APPLICATION DATA & CONFIGURATION STORE
 * Blue Door Café & Bakes — ONESCAN Experience Engine
 * 
 * NOTE FOR DEVELOPERS:
 * You have 100% full access and control here.
 * Any text, image URL, link, menu item, testimonial, or review template
 * edited in this file (or via the in-browser Live Developer Mode)
 * will instantly update across the entire web application.
 */

import { REVIEWS_DB } from './reviews-db.js';

export const DEFAULT_STORE_DATA = {
    // ═══════════════════════════════════════════════════════════════
    // 1. BRAND & STORE IDENTITY
    // ═══════════════════════════════════════════════════════════════
    brand: {
        id: 'blue-door-cafe-and-bakes',
        name: 'Blue Door Café & Bakes',
        shortName: 'Blue Door',
        initials: 'BD',
        tagline: 'Artisanal bakes, specialty coffee & handcrafted desserts in Dehradun',
        statusBadge: 'Open Now • 9 AM - 10:30 PM',
        categoryBadge: '☕ Artisanal Café',
        heroHandwriting: 'Good Food\nGood Vibes ✨',
        logoImg: './assets/images/blue-door/blue-door-sign.png',
        heroImg: './assets/images/blue-door/hero-food-collage.jpg',
        rating: 4.9,
        ratingStars: '★★★★★',
        ratingCountText: '1,240+ Google Reviews',
        badgeText: 'Top Rated Cafe'
    },

    // ═══════════════════════════════════════════════════════════════
    // 2. CONTACT & LOCATION DETAILS
    // ═══════════════════════════════════════════════════════════════
    contact: {
        phone: '+917455866408',
        phoneDisplay: '+91 74558 66408',
        whatsapp: '917455866408',
        address: 'Clement Town, Dehradun, Uttarakhand 248002, India',
        shortAddress: 'Clement Town, Dehradun',
        coordinates: {
            latitude: 30.2629266,
            longitude: 77.9993898
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. ACTION BUTTONS & EXTERNAL LINKS
    // (Edit these URLs to change redirect destinations site-wide)
    // ═══════════════════════════════════════════════════════════════
    links: {
        // Google Place ID (used to identify business on Google)
        googlePlaceId: 'ChIJBVRVOgArCTkRi8U55iIBsHg',

        // Direct Google Review Page (redirects user here after copying review)
        googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJBVRVOgArCTkRi8U55iIBsHg',
        googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJBVRVOgArCTkRi8U55iIBsHg',

        // Directions / Navigation Link ("Directions", "Find Us", "Open in Maps")
        googleMapsUrl: 'https://www.google.com/maps?cid=8696452129855489419',

        // Interactive Map Embed (Google Maps iframe src)
        mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.704247068065!2d77.9985567!3d30.272292299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b003a555405%3A0x78b00122e639c58b!2sScoop%20n%20brew!5e1!3m2!1sen!2sin!4v1792495036661!5m2!1sen!2sin',

        // Instagram Profile Link
        instagramUrl: 'https://www.instagram.com/blue_door_cafe',

        // Menu Link & Button Label
        menuUrl: '#',
        menuLabel: 'Browse Menu'
    },

    // ═══════════════════════════════════════════════════════════════
    // 4. SPECIALITIES CAROUSEL
    // ═══════════════════════════════════════════════════════════════
    specialities: [
        {
            id: 'spec-biscoff',
            name: 'Lotus Biscoff',
            image: './assets/images/blue-door/biscoff-cheesecake.jpg',
            gradient: 'from-amber-400 to-orange-500',
            categoryKey: 'BISCOFF'
        },
        {
            id: 'spec-tiramisu',
            name: 'Tiramisu Cup',
            image: './assets/images/blue-door/tiramisu-cup.jpg',
            gradient: 'from-amber-600 to-yellow-600',
            categoryKey: 'TIRAMISU'
        },
        {
            id: 'spec-pancakes',
            name: 'Pancakes',
            image: './assets/images/blue-door/fluffy-pancakes.jpg',
            gradient: 'from-blue-400 to-indigo-500',
            categoryKey: 'PANCAKES'
        },
        {
            id: 'spec-pasta',
            name: 'Penne Pasta',
            image: './assets/images/blue-door/penne-pasta.jpg',
            gradient: 'from-rose-500 to-red-600',
            categoryKey: 'PASTA'
        },
        {
            id: 'spec-bento',
            name: 'Bento Cake',
            image: './assets/images/blue-door/bento-cake.jpg',
            gradient: 'from-pink-400 to-rose-400',
            categoryKey: 'CAKES'
        },
        {
            id: 'spec-orange',
            name: 'Orange Cake',
            image: './assets/images/blue-door/orange-cake.jpg',
            gradient: 'from-amber-500 to-orange-400',
            categoryKey: 'CAKES'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 5. REVIEW CHIP SELECTORS (AI Review Generator)
    // ═══════════════════════════════════════════════════════════════
    reviewChips: [
        { key: 'ALL', label: 'Overall Experience', icon: '✨' },
        { key: 'BISCOFF', label: 'Biscoff Cheesecake', icon: '🍰' },
        { key: 'TIRAMISU', label: 'Tiramisu Cup', icon: '☕' },
        { key: 'PANCAKES', label: 'Fluffy Pancakes', icon: '🥞' },
        { key: 'PASTA', label: 'Penne Pasta', icon: '🍝' },
        { key: 'CAKES', label: 'Artisanal Cakes', icon: '🎂' },
        { key: 'COFFEE', label: 'Specialty Coffee', icon: '☕' },
        { key: 'AMBIENCE', label: 'Cozy Ambience', icon: '🌿' }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 6. AI REVIEW TEMPLATE BANK (Managed centrally in js/reviews-db.js)
    // ═══════════════════════════════════════════════════════════════
    reviewBank: REVIEWS_DB,

    // ═══════════════════════════════════════════════════════════════
    // 7. CULINARY GALLERY ITEMS (All 8 Items)
    // ═══════════════════════════════════════════════════════════════
    gallery: [
        {
            id: 'biscoff-cheesecake',
            src: './assets/images/blue-door/biscoff-cheesecake.jpg',
            title: 'Lotus Biscoff Cheesecake',
            category: 'bakes',
            categoryLabel: 'Cheesecake',
            tag: 'Lotus Biscoff',
            desc: 'Creamy layered artisanal cheesecake with authentic Lotus Biscoff spread and spiced biscuit crumb crust.',
            aiCategory: 'BISCOFF'
        },
        {
            id: 'fluffy-pancakes',
            src: './assets/images/blue-door/fluffy-pancakes.jpg',
            title: 'Fluffy Blueberry Pancakes',
            category: 'brunch',
            categoryLabel: 'Brunch',
            tag: 'Blueberry Pancakes',
            desc: 'Golden soufflé-style stacked pancakes layered with organic blueberries, churned butter, and pure maple syrup.',
            aiCategory: 'PANCAKES'
        },
        {
            id: 'penne-pasta',
            src: './assets/images/blue-door/penne-pasta.jpg',
            title: 'Penne Arrabbiata Pasta',
            category: 'brunch',
            categoryLabel: 'Savory',
            tag: 'Arrabbiata Pasta',
            desc: 'Al dente penne in a slow-simmered fiery tomato pomodoro sauce with aromatic fresh Italian herbs and garlic.',
            aiCategory: 'PASTA'
        },
        {
            id: 'tiramisu-cup',
            src: './assets/images/blue-door/tiramisu-cup.jpg',
            title: 'Classic Tiramisu Cup',
            category: 'bakes',
            categoryLabel: 'Dessert',
            tag: 'Tiramisu Cup',
            desc: 'Authentic Italian recipe with espresso-dipped ladyfingers, velvety mascarpone cream, and Dutch cocoa dust.',
            aiCategory: 'TIRAMISU'
        },
        {
            id: 'bento-cake',
            src: './assets/images/blue-door/bento-cake.jpg',
            title: 'Handcrafted Bento Cake',
            category: 'bakes',
            categoryLabel: 'Bento Cake',
            tag: 'Bento Floral Cake',
            desc: 'Charming personal mini celebration cake with delicate handcrafted buttercream floral decor.',
            aiCategory: 'CAKES'
        },
        {
            id: 'carrot-cake',
            src: './assets/images/blue-door/carrot-cake.jpg',
            title: 'Spiced Walnut Carrot Cake',
            category: 'bakes',
            categoryLabel: 'Artisanal',
            tag: 'Carrot Cake',
            desc: 'Moist spiced sponge packed with fresh grated carrots, toasted walnuts, and silky cream cheese frosting.',
            aiCategory: 'CAKES'
        },
        {
            id: 'cheesecake-cafe',
            src: './assets/images/blue-door/cheesecake-cafe.jpg',
            title: 'Signature New York Cheesecake',
            category: 'bakes',
            categoryLabel: 'Cheesecake',
            tag: 'Baked Cheesecake',
            desc: 'Dense, rich, and velvety classic New York style baked cheesecake served fresh from our pastry vitrine.',
            aiCategory: 'BISCOFF'
        },
        {
            id: 'orange-cake',
            src: './assets/images/blue-door/orange-cake.jpg',
            title: 'Citrus Glazed Orange Cake',
            category: 'bakes',
            categoryLabel: 'Citrus Glaze',
            tag: 'Orange Cake',
            desc: 'Fragrant zest-infused sponge topped with hand-caramelized candied orange slices and citrus syrup.',
            aiCategory: 'CAKES'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 8. ABOUT US & HIGHLIGHT BADGES
    // ═══════════════════════════════════════════════════════════════
    about: {
        title: 'About Blue Door Café & Bakes',
        description: 'Blue Door Café & Bakes was founded with a love for artisanal European baking and rich, velvety specialty roasts. From flaky breakfast pastries and fluffy banana blueberry pancakes to decadent Lotus Biscoff cheesecakes, every recipe is made from scratch with authentic butter, fine chocolate, and pure passion.',
        highlights: [
            { icon: '✨', text: '100% Real Dairy Butter' },
            { icon: '☕', text: 'Grade-1 Arabica Beans' },
            { icon: '🌿', text: 'Eggless Bakes Daily' },
            { icon: '🐾', text: 'Pet Friendly Patio' }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 9. CUSTOMER TESTIMONIALS (Why People Love Us)
    // ═══════════════════════════════════════════════════════════════
    testimonials: [
        {
            id: 't-1',
            name: 'Rhea Sen',
            initial: 'R',
            avatarBg: 'bg-blue-600',
            rating: 5,
            timeAgo: '2 days ago',
            quote: 'The Lotus Biscoff cheesecake literally melts in your mouth! Aesthetic seating and top-tier brews. Easily our new Dehradun favorite.'
        },
        {
            id: 't-2',
            name: 'Kabir Mehta',
            initial: 'K',
            avatarBg: 'bg-amber-600',
            rating: 5,
            timeAgo: '1 week ago',
            quote: 'Best pancakes in Clement Town. Generous portions, authentic maple drizzle, and the coffee roast is exceptionally smooth!'
        },
        {
            id: 't-3',
            name: 'Ananya Joshi',
            initial: 'A',
            avatarBg: 'bg-rose-600',
            rating: 5,
            timeAgo: '3 weeks ago',
            quote: 'Ordered a customized bento floral cake for my sister\'s birthday. It was breathtakingly pretty and super fresh. 10/10 service!'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 10. FOOTER & BRANDING
    // ═══════════════════════════════════════════════════════════════
    footer: {
        poweredBy: 'ONESCAN Reviews',
        poweredBySubtitle: 'AI Experience Engine',
        copyright: '© 2026 Blue Door Café & Bakes. All rights reserved.'
    }
};

/**
 * Storage & State Helper
 * Gets live active store (from localStorage if edited, or defaults)
 */
export function getStoreData() {
    try {
        const stored = localStorage.getItem('bluedoor_store_data');
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.warn('Failed to parse stored store data, falling back to defaults', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STORE_DATA));
}

/**
 * Saves current store data to localStorage
 */
export function saveStoreData(data) {
    try {
        localStorage.setItem('bluedoor_store_data', JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Failed to save to localStorage', e);
        return false;
    }
}

/**
 * Resets store data back to default data
 */
export function resetStoreData() {
    try {
        localStorage.removeItem('bluedoor_store_data');
        return true;
    } catch (e) {
        console.error('Failed to reset localStorage', e);
        return false;
    }
}
