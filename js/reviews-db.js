/**
 * ===========================================================================
 * BLUE DOOR CAFE & BAKES — CENTRAL REVIEWS DATABASE (REVIEWS_DB)
 * ===========================================================================
 * 
 * Manage all AI review prompt engineering templates from this SINGLE file.
 * To add, edit, or customize review phrases, edit the sections below:
 *   - openings:   Introductory sentences
 *   - categories: Sentences triggered by selected food/dish chips
 *   - closings:   Polite concluding recommendations
 * ===========================================================================
 */

const REVIEWS_DB = {
    // =======================================================================
    // 1. ENGLISH REVIEWS
    // =======================================================================
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
                "The blueberry and banana pancakes were so fluffy and warm! Best breakfast ever.",
                "Pancakes were golden perfection, light as a cloud and generous with fresh toppings."
            ],
            PASTA: [
                "The Penne Arrabbiata pasta had the perfect spicy kick and fresh herbs! Full of flavor.",
                "Loved their savory pasta options — rich, savory sauce cooked al dente."
            ],
            CAKES: [
                "The cake vitrine is dangerous! The orange glaze cake and spiced carrot cake are mouthwatering.",
                "Ordered their bento floral cake for a birthday and it was both gorgeous and delectable!"
            ],
            COFFEE: [
                "The coffee is roasted to perfection! Smooth, aromatic and gave the best morning boost.",
                "Specialty coffee lovers will appreciate the quality of their beans and barista skill."
            ],
            AMBIANCE: [
                "The aesthetic interior and soothing music make this the ultimate chill spot.",
                "Very cozy, aesthetic corners, ideal for work sessions or catchups with friends."
            ],
            AMBIENCE: [
                "The aesthetic interior and soothing music make this the ultimate chill spot.",
                "Very cozy, aesthetic corners, ideal for work sessions or catchups with friends."
            ],
            SERVICE: [
                "The staff is exceptionally sweet, polite and fast with their recommendations.",
                "Super warm hospitality and prompt service even during busy hours."
            ],
            CLEANLINESS: [
                "Spotlessly clean dining area, sparkling cutlery and great hygiene standards.",
                "Very clean, sanitized and well-kept space with aesthetic seating."
            ]
        },
        closings: [
            " Can't wait to visit again!",
            " 10/10 would highly recommend to everyone.",
            " Definitely ordering their cakes for my next celebration.",
            " A must-visit for every food lover!",
            " Will definitely be coming back every weekend!"
        ]
    },

    // =======================================================================
    // 2. HINGLISH REVIEWS (Conversational Hindi + English)
    // =======================================================================
    HINGLISH: {
        openings: [
            "bhai sach batau toh Blue Door Cafe literally slaps! ",
            "dosto ke sath aana yahan ka best decision tha. ",
            "ngl this place is a total aesthetic W. ",
            "dehradun me itna mast cafe aur bakery pehli baar dekha. ",
            "sweet craving ho rahi thi toh idhar aagaye aur dil khush ho gaya. "
        ],
        categories: {
            ALL: [
                "khana, coffee aur bakes sab kuch ek number the.",
                "quality aur taste dono top tier the, zero complaints fr.",
                "vibe ekdum cozy thi aur sab kuch freshly baked mila."
            ],
            BISCOFF: [
                "inka Lotus Biscoff cheesecake must try hai guys, muh me pighal jata hai!",
                "biscoff cheesecake ka texture aur crunch literally out of this world tha."
            ],
            TIRAMISU: [
                "tiramisu cup ka coffee flavor aur creaminess ekdum authentic laga.",
                "tiramisu lovers ke liye ye place heaven hai, 10/10 swaad!"
            ],
            PANCAKES: [
                "pancakes super fluffy aur tasty the, blueberry combo was so good.",
                "subah ke breakfast ke liye inke pancakes best option hain."
            ],
            PASTA: [
                "penne pasta ka spicy arrabbiata sauce ekdum restaurant-style hit karta hai.",
                "pasta ki seasoning aur fresh herbs ka flavor bohot badhiya tha."
            ],
            CAKES: [
                "bento cakes aur pastry counter dekh ke muh me paani aa gaya. Bohot fresh the!",
                "birthday cake order kiya tha, look aur taste dono 10/10 the."
            ],
            COFFEE: [
                "coffee lovers ko inki specialty brew bohot pasand aayegi.",
                "proper artisanal coffee vibes mili yahan aake."
            ],
            AMBIANCE: [
                "interior aur aesthetic vibes photos ke liye ekdum perfect hain.",
                "peaceful mahool aur soft music, baith ke relax karne ke liye best jagah."
            ],
            AMBIENCE: [
                "interior aur aesthetic vibes photos ke liye ekdum perfect hain.",
                "peaceful mahool aur soft music, baith ke relax karne ke liye best jagah."
            ],
            SERVICE: [
                "staff ka behavior bohot polite aur welcoming tha.",
                "order bohot jaldi serve hua aur hospitality lajawab thi."
            ],
            CLEANLINESS: [
                "cleanliness 10/10 thi, kitchen aur tables ekdum neat and clean.",
                "proper hygiene standards maintain kiye hue hain."
            ]
        },
        closings: [
            " pakka wapas aayenge!",
            " highly recommended from my side.",
            " 10/10 experience raha.",
            " paisa vasool ekdum, must visit!"
        ]
    },

    // =======================================================================
    // 3. HINDI REVIEWS (Devanagari Script)
    // =======================================================================
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
            AMBIANCE: [
                "कैफे का इंटीरियर बहुत ही खूबसूरत और सुकून देने वाला है। फोटो खिंचवाने के लिए बेस्ट स्पॉट!",
                "शांतिपूर्ण माहौल और अच्छी सिटिंग अरेंजमेंट, दोस्तों और फैमिली के साथ बैठने के लिए शानदार।"
            ],
            AMBIENCE: [
                "कैफे का इंटीरियर बहुत ही खूबसूरत और सुकून देने वाला है। फोटो खिंचवाने के लिए बेस्ट स्पॉट!",
                "शांतिपूर्ण माहौल और अच्छी सिटिंग अरेंजमेंट, दोस्तों और फैमिली के साथ बैठने के लिए शानदार।"
            ],
            SERVICE: [
                "स्टाफ का व्यवहार बहुत विनम्र और मददगार था।",
                "सर्विस बहुत तेज़ और शानदार थी।"
            ],
            CLEANLINESS: [
                "कैफे बहुत ही साफ़-सुथरा और स्वच्छ है।",
                "हाइजीन का पूरा ध्यान रखा गया है।"
            ]
        },
        closings: [
            " स्टाफ का व्यवहार बहुत विनम्र और मददगार था। हम दोबारा ज़रूर आएंगे!",
            " क्लेमेंट टाउन आने वाले सभी लोगों को यहाँ ज़रूर आना चाहिए। शानदार अनुभव!",
            " ज़रूर विज़िट करें, आपको बहुत पसंद आएगा!"
        ]
    },

    // =======================================================================
    // 4. KANNADA REVIEWS
    // =======================================================================
    KANNADA: {
        openings: [
            "Blue Door Café & Bakes ge bandu thumba santhosha aayithu! ",
            "ಇಲ್ಲಿನ ವಾತಾವರಣ ಮತ್ತು ತಿಂಡಿಗಳು ನಿಜಕ್ಕೂ ಅದ್ಭುತವಾಗಿವೆ. ",
            "Nanna snehithara jothege illi bandidde, thumba chennagidhe! "
        ],
        categories: {
            ALL: [
                "Illina ellavu thindi galu fresh matthu thumba ruchi aagidhe.",
                "Coffee matthu cakes quality 10/10, thumba ishta aayithu.",
                "Shanta vaathavarana matthu utthama aahaara."
            ],
            BISCOFF: [
                "Lotus Biscoff cheesecake thumba creamy matthu delicious aagidhe!",
                "Biscoff cheesecake illi kanditha try maadi, thumba ruchi!"
            ],
            TIRAMISU: [
                "Tiramisu cup thumba authentic matthu ruchi aagidhe.",
                "Coffee flavor matthu cream combo thumba chennagidhe."
            ],
            PANCAKES: [
                "Pancakes thumba soft matthu fluffy aagidhe.",
                "Fresh blueberry pancakes thumba ishta aayithu."
            ],
            PASTA: [
                "Penne pasta ruchi adbhutha aagidhe, spicy & delicious.",
                "Pasta preparation thumba utthama aagidhe."
            ],
            CAKES: [
                "Cakes thumba fresh matthu soft aagidhe.",
                "Bento cake design matthu taste eradoo super!"
            ],
            COFFEE: [
                "Illina specialty coffee thumba fresh matthu aromatic aagidhe.",
                "Coffee lovers ge idhu ondu utthama spot."
            ],
            AMBIANCE: [
                "Cafe interior matthu ambience thumba shanta matthu sundara aagidhe.",
                "Photo thegeyalu thumba aesthetic place."
            ],
            AMBIENCE: [
                "Cafe interior matthu ambience thumba shanta matthu sundara aagidhe.",
                "Photo thegeyalu thumba aesthetic place."
            ],
            SERVICE: [
                "Staff thumba vinamravagi matthu sahayaka aagi iddare.",
                "Seve thumba bega matthu utthama aagithu."
            ],
            CLEANLINESS: [
                "Cafe thumba swachhavagi matthu hygienic aagi idhe.",
                "Hygiene standards thumba chennagidhe."
            ]
        },
        closings: [
            " Matthe kanditha baruttene!",
            " Ellarigoo highly recommend maaduttene.",
            " Thumba utthama anubhava!"
        ]
    }
};

// ===========================================================================
// EXPORTS FOR BROWSER & MODULE SCOPES
// ===========================================================================
if (typeof window !== 'undefined') {
    window.REVIEWS_DB = REVIEWS_DB;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REVIEWS_DB };
}
