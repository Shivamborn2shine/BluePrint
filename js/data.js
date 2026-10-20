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
    // ═══════════════════════════════════════════════════════════════
    links: {
        googlePlaceId: '14447932579898534547',
        googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJl90Jb3QrCTkRkyqlCyJegcg',
        googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=14447932579898534547',
        googleMapsUrl: 'https://www.google.com/maps/place/Blue+Door+Cafe+and+Bakes/@30.2629266,77.9993898,17z/data=!4m8!3m7!1s0x39092b746f09dd97:0xc8815e220ba52a93!8m2!3d30.2629266!4d77.9993898!9m1!1b1!16s%2Fg%2F11vcwgp634',
        mapsEmbedUrl: 'https://maps.google.com/maps?q=30.2629266,77.9993898&t=&z=16&ie=UTF8&iwloc=&output=embed',
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
    // 6. AI REVIEW TEMPLATE BANK (Multi-language)
    // ═══════════════════════════════════════════════════════════════
    reviewBank: {
        ENGLISH: {
            openings: [
                "Hands down one of the coziest cafes in town! ",
                "Visited Blue Door Café & Bakes today and was completely blown away. ",
                "If you have a sweet tooth or love good coffee, this place is heaven! ",
                "Such a charming aesthetic cafe with genuinely delicious food. ",
                "Tried this spot on a friend's recommendation and it exceeded all expectations! ",
                "Easily a 5-star experience from the ambience to the dessert counter. ",
                "Finally found my new favorite weekend brunch spot! "
            ],
            categories: {
                ALL: [
                    "Everything we ordered was crafted to perfection. Zero complaints, genuine 10/10 quality.",
                    "Loved every single item! The vibe is so relaxing and the bakes are top notch.",
                    "The perfect blend of warm hospitality, artisanal pastries, and rich brews."
                ],
                BISCOFF: [
                    "The Lotus Biscoff cheesecake is an absolute showstopper! Incredibly creamy and perfectly balanced.",
                    "If you visit, you MUST try the Lotus Biscoff cheesecake. Hands down the best in the city!"
                ],
                TIRAMISU: [
                    "The Tiramisu cup with ladyfinger biscuit was heavenly! Rich, velvety coffee flavor.",
                    "Authentic Italian style tiramisu done right. Soft, creamy and not overly sweet."
                ],
                PANCAKES: [
                    "The fluffy blueberry pancakes were pure bliss! Warm, pillowy, and generously topped.",
                    "Best pancakes I have had in a long time! Perfectly fluffy with real berries and maple drizzle."
                ],
                PASTA: [
                    "The Penne Arrabbiata was cooked perfectly al dente with rich spicy tomato pomodoro.",
                    "Savory menu is surprisingly great! Loved the tangy and spicy penne pasta."
                ],
                CAKES: [
                    "The cake vitrine is dangerous! The orange glaze cake and spiced carrot cake are mouthwatering.",
                    "Ordered their bento floral cake for a birthday and it was both gorgeous and delectable!"
                ],
                COFFEE: [
                    "The roasted coffee is smooth with zero bitterness. Best flat white and iced latte around.",
                    "Specialty coffee here pairs so well with their fresh baked goods. A must-visit for coffee lovers."
                ],
                AMBIENCE: [
                    "The interior aesthetics are so calming and European-inspired. Perfect for dates or remote work.",
                    "Cozy lighting, aesthetic corners, and soft background music make it a wonderful spot."
                ]
            },
            closings: [
                " Staff was incredibly warm and attentive throughout. Will definitely be returning soon!",
                " Highly recommend everyone to visit if you are near Clement Town. Truly a 10/10 gem!",
                " Can't wait to come back and try the rest of their bakery menu!",
                " Definitely worth multiple visits. Kudos to the baking team!"
            ]
        },
        HINDI: {
            openings: [
                "ब्लू डोर कैफे एंड बेक्स का अनुभव बहुत ही शानदार रहा! ",
                "देहरादून में सबसे बेहतरीन और खूबसूरत कैफे में से एक! ",
                "अगर आपको स्वादिष्ट डेसर्ट और बेहतरीन कॉफी पसंद है, तो यहाँ ज़रूर आएं। ",
                "शानदार माहौल और लाजवाब स्वाद, पूरी तरह से 5-स्टार अनुभव!"
            ],
            categories: {
                ALL: [
                    "यहाँ का खाना और बेकरी का हर आइटम बहुत ही ताज़ा और स्वादिष्ट था।",
                    "बहुत ही सुकून भरा माहौल और बेहतरीन सर्विस। सब कुछ बहुत बढ़िया लगा।"
                ],
                BISCOFF: [
                    "लोटस बिस्कॉफ चीज़केक का स्वाद वाकई लाजवाब है! एकदम क्रीमी और परफेक्ट।",
                    "बिस्कॉफ चीज़केक यहाँ की बेस्ट डिश है, इसका स्वाद हमेशा याद रहेगा।"
                ],
                TIRAMISU: [
                    "तिरामिसू कप बहुत ही स्वादिष्ट और फ्रेश था। कॉफी और मस्कार्पोन का बेहतरीन कॉम्बिनेशन!",
                    "असली इटैलियन तिरामिसू का स्वाद मिला, मीठा भी एकदम संतुलित था।"
                ],
                PANCAKES: [
                    "ब्लूबेरी पैनकेक्स बहुत ही सॉफ्ट और फ्लफी थे, ऊपर से मेपल सिरप बहुत बढ़िया लगा।",
                    "नाश्ते के लिए पैनकेक्स एकदम बेस्ट हैं। बहुत हल्का और टेस्टी।"
                ],
                PASTA: [
                    "पेने अराबियाटा पास्ता बहुत ही टेस्टी और स्पाइसी था, सॉस एकदम फ्रेश थी।",
                    "पास्ता बहुत ही बढ़िया बना था, इटैलियन फ्लेवर्स पूरी तरह से महसूस हुए।"
                ],
                CAKES: [
                    "बेंटो केक और कैरट केक का स्वाद बेहद उम्दा था। डिज़ाइन भी बहुत सुंदर था।",
                    "केक बहुत ही फ्रेश और सॉफ्ट थे, हर बाइट में बेहतरीन क्वालिटी का अहसास।"
                ],
                COFFEE: [
                    "यहाँ की कॉफी बहुत ही स्ट्रॉन्ग और रिच है। कॉफी लवर्स के लिए बेस्ट जगह।",
                    "कैपुचीनो और कोल्ड कॉफी दोनों का स्वाद बहुत ही लाजवाब रहा।"
                ],
                AMBIENCE: [
                    "कैफे का इंटीरियर बहुत ही खूबसूरत और सुकून देने वाला है। फोटो खिंचवाने के लिए बेस्ट स्पॉट!",
                    "शांतिपूर्ण माहौल और अच्छी सिटिंग अरेंजमेंट, दोस्तों और फैमिली के साथ बैठने के लिए शानदार।"
                ]
            },
            closings: [
                " स्टाफ का व्यवहार बहुत विनम्र और मददगार था। हम दोबारा ज़रूर आएंगे!",
                " क्लेमेंट टाउन आने वाले सभी लोगों को यहाँ ज़रूर आना चाहिए। शानदार अनुभव!",
                " ज़रूर विज़िट करें, आपको बहुत पसंद आएगा!"
            ]
        },
        KANNADA: {
            openings: [
                "ಬ್ಲೂ ಡೋರ್ ಕೆಫೆ ಮತ್ತು ಬೇಕ್ಸ್‌ನಲ್ಲಿ ಅದ್ಭುತ ಅನುಭವ! ",
                "ಅತ್ಯುತ್ತಮ ಪರಿಸರ ಮತ್ತು ರುಚಿಕರವಾದ ತಿಂಡಿಗಳು ಇಲ್ಲಿ ಲಭ್ಯವಿದೆ. ",
                "ಕಾಫಿ ಮತ್ತು ಡೆಸರ್ಟ್ ಪ್ರಿಯರಿಗೆ ಇದು ನಿಜಕ್ಕೂ ಸ್ವರ್ಗ!"
            ],
            categories: {
                ALL: [
                    "ನಾವು ಆರ್ಡರ್ ಮಾಡಿದ ಪ್ರತಿಯೊಂದು ಖಾದ್ಯವೂ ತುಂಬಾ ರುಚಿಯಾಗಿತ್ತು.",
                    "ಉತ್ತಮ ಗುಣಮಟ್ಟ ಮತ್ತು ಸುಂದರವಾದ ಕೆಫೆ ವಾತಾವರಣ."
                ],
                BISCOFF: [
                    "ಲೋಟಸ್ ಬಿಸ್ಕಾಫ್ ಚೀಸ್‌ಕೇಕ್ ನಿಜಕ್ಕೂ ಅದ್ಭುತವಾಗಿತ್ತು! ತುಂಬಾ ಕ್ರೀಮಿ ಮತ್ತು ಟೇಸ್ಟಿ.",
                    "ಇಲ್ಲಿನ ಬಿಸ್ಕಾಫ್ ಚೀಸ್‌ಕೇಕ್ ಪ್ರತಿಯೊಬ್ಬರೂ ಸವಿಯಲೇಬೇಕಾದ ತಿನಿಸು."
                ],
                TIRAMISU: [
                    "ಟಿಸಾಮಿಸು ಕಪ್ ತುಂಬಾ ತಾಜಾ ಮತ್ತು ರುಚಿಯಾಗಿತ್ತು.",
                    "ಅತ್ಯುತ್ತಮ ಇಟಾಲಿಯನ್ ಶೈಲಿಯ ಟಿಸಾಮಿಸು ರುಚಿ."
                ],
                PANCAKES: [
                    "ಮೃದುವಾದ ಬ್ಲೂಬೆರ್ರಿ ಪ್ಯಾನ್‌ಕೇಕ್‌ಗಳು ತುಂಬಾ ರುಚಿಯಾಗಿದ್ದವು.",
                    "ಉಪಹಾರಕ್ಕೆ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ."
                ],
                PASTA: [
                    "ಪೆನ್ನೆ ಪಾಸ್ತಾ ತುಂಬಾ ರುಚಿಕರವಾಗಿ ಮತ್ತು ಖಾರವಾಗಿತ್ತು.",
                    "ಉತ್ತಮವಾದ ಇಟಾಲಿಯನ್ ಸಾಸ್ ರುಚಿ."
                ],
                CAKES: [
                    "ಇಲ್ಲಿನ ವಿಶೇಷ ಕ್ಯಾರೆಟ್ ಕೇಕ್ ಮತ್ತು ಬೆಂಟೋ ಕೇಕ್‌ಗಳು ಅತ್ಯಂತ ರುಚಿಕರ.",
                    "ತಾಜಾ ಬೆಣ್ಣೆ ಮತ್ತು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಕೇಕ್‌ಗಳು."
                ],
                COFFEE: [
                    "ಕಾಫಿಯ ಪರಿಮಳ ಮತ್ತು ರುಚಿ ಅದ್ಭುತವಾಗಿತ್ತು.",
                    "ವಿಶೇಷ ಅರೇಬಿಕಾ ಕಾಫಿ ಬೀಜಗಳ ರಿಚ್ ರುಚಿ."
                ],
                AMBIENCE: [
                    "ಸುಂದರವಾದ ಕೆಫೆ ವಿನ್ಯಾಸ ಮತ್ತು ಶಾಂತಿಯುತ ಪರಿಸರ.",
                    "ಕುಟುಂಬ ಮತ್ತು ಸ್ನೇಹಿತರೊಂದಿಗೆ ಸಮಯ ಕಳೆಯಲು ಉತ್ತಮ ಜಾಗ."
                ]
            },
            closings: [
                " ಸಿಬ್ಬಂದಿ ತುಂಬಾ ಆತ್ಮೀಯವಾಗಿ ಸೇವೆ ನೀಡಿದರು. ಖಂಡಿತವಾಗಿಯೂ ಮತ್ತೆ ಭೇಟಿ ನೀಡುತ್ತೇವೆ!",
                " ಎಲ್ಲರೂ ಖಂಡಿತವಾಗಿ ಭೇಟಿ ನೀಡಬೇಕಾದ ಅದ್ಭುತ ಕೆಫೆ!"
            ]
        }
    },

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
