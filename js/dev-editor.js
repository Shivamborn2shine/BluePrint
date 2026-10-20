/**
 * dev-editor.js
 * LIVE VISUAL IN-BROWSER DEVELOPER & CMS EDITOR
 * Gives the developer 100% full access and control over every text, image, link, and configuration.
 */

import { DEFAULT_STORE_DATA, getStoreData, saveStoreData, resetStoreData } from './data.js';

class DeveloperEditor {
    constructor() {
        this.data = getStoreData();
        this.isDevMode = false;
        this.activeTab = 'business';
        this.init();
    }

    init() {
        // Check URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('dev') === 'true' || urlParams.get('edit') === 'true') {
            this.isDevMode = true;
        }

        // Ensure any cached store data in localStorage is updated to the correct Google Maps URL
        if (this.data && this.data.links) {
            if (!this.data.links.googleMapsUrl || this.data.links.googleMapsUrl.includes('Blue+Door+Cafe+and+Bakes')) {
                this.data.links.googleMapsUrl = 'https://www.google.com/maps?cid=8696452129855489419';
                saveStoreData(this.data);
            }
            if (!this.data.links.mapsEmbedUrl || !this.data.links.mapsEmbedUrl.includes('pb=')) {
                this.data.links.mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.704247068065!2d77.9985567!3d30.272292299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b003a555405%3A0x78b00122e639c58b!2sScoop%20n%20brew!5e1!3m2!1sen!2sin!4v1792495036661!5m2!1sen!2sin';
                saveStoreData(this.data);
            }
            if (!this.data.links.googlePlaceId || this.data.links.googlePlaceId === '14447932579898534547') {
                this.data.links.googlePlaceId = 'ChIJl90Jb3QrCTkRkyqlCyJegcg';
                this.data.links.googleWriteReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJl90Jb3QrCTkRkyqlCyJegcg';
                saveStoreData(this.data);
            }
        }

        // Hydrate the DOM with active data
        this.renderAll();

        // Inject Dev Floating Controls and CMS Modal
        this.injectEditorUI();

        // Register Keyboard Shortcut: Ctrl + Alt + E (or Cmd + Alt + E)
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'e' || e.key === 'E')) {
                e.preventDefault();
                this.toggleDevMode();
            }
        });

        // Sync with dev mode state
        if (this.isDevMode) {
            this.enableDevModeStyles();
        }
    }

    /**
     * Renders all dynamic content across the page using current store data
     */
    renderAll() {
        const d = this.data;

        // 1. Header & Brand
        this.setText('storeBrandInitials', d.brand.initials);
        this.setText('storeHeaderName', d.brand.name);
        this.setText('storeStatusBadge', d.brand.statusBadge);

        // 2. Hero & Identity
        this.setImg('heroBannerImg', d.brand.heroImg, d.brand.name);
        this.setImg('storeLogoImg', d.brand.logoImg, d.brand.name + ' Logo');
        this.setText('heroCategoryBadge', d.brand.categoryBadge);
        this.setText('storeMainName', d.brand.name);
        this.setText('storeTagline', d.brand.tagline);
        this.setText('storeShortAddress', d.contact.shortAddress);
        this.setText('ratingValue', d.brand.rating.toFixed(1));
        this.setText('ratingStars', d.brand.ratingStars);
        this.setText('ratingCountText', d.brand.ratingCountText);
        this.setText('ratingBadgeText', d.brand.badgeText);

        // Phone & WhatsApp CTAs
        const callBtn = document.getElementById('callStoreBtn');
        if (callBtn) {
            callBtn.href = `tel:${d.contact.phone}`;
            callBtn.title = `Call ${d.brand.name} (${d.contact.phoneDisplay})`;
        }
        const directionsBtn = document.getElementById('directionsBtn');
        if (directionsBtn) {
            directionsBtn.href = d.links.googleMapsUrl;
        }
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn) {
            menuBtn.href = d.links.menuUrl || '#';
            const menuLabelEl = document.getElementById('menuBtnLabel');
            if (menuLabelEl) menuLabelEl.textContent = d.links.menuLabel || 'Menu';
        }

        // 3. Specialities Carousel
        this.renderSpecialities();

        // 4. Review Chips
        this.renderReviewChips();

        // 5. Culinary Gallery
        this.renderGallery();

        // 6. Map & Find Us
        const mapIframe = document.getElementById('mapEmbedIframe');
        if (mapIframe && d.links.mapsEmbedUrl) {
            mapIframe.src = d.links.mapsEmbedUrl;
        }
        const mapHeaderLink = document.getElementById('mapHeaderLink');
        if (mapHeaderLink) mapHeaderLink.href = d.links.googleMapsUrl;
        const mapFloatingBtn = document.getElementById('mapFloatingBtn');
        if (mapFloatingBtn) mapFloatingBtn.href = d.links.googleMapsUrl;

        // 7. About Section
        this.setText('aboutTitle', d.about.title);
        this.setText('aboutDescription', d.about.description);
        this.renderAboutHighlights();

        // 8. Testimonials
        this.renderTestimonials();

        // 9. Footer
        this.setText('footerPoweredBy', d.footer.poweredBy);
        this.setText('footerPoweredBySub', d.footer.poweredBySubtitle);
        this.setText('footerCopyright', d.footer.copyright);

        // Update Global references
        window.CURRENT_STORE_DATA = d;
        if (window.BUSINESS_CONFIG) {
            window.BUSINESS_CONFIG.name = d.brand.name;
            window.BUSINESS_CONFIG.phone = d.contact.phone;
            window.BUSINESS_CONFIG.whatsapp = d.contact.whatsapp;
            window.BUSINESS_CONFIG.googleReviewUrl = d.links.googleReviewUrl;
            window.BUSINESS_CONFIG.googleWriteReviewUrl = d.links.googleWriteReviewUrl;
            window.BUSINESS_CONFIG.address = d.contact.address;
        }
    }

    setText(id, value) {
        const el = document.getElementById(id);
        if (el && value !== undefined) el.innerText = value;
    }

    setImg(id, src, alt) {
        const el = document.getElementById(id);
        if (el && src) {
            el.src = src;
            if (alt) el.alt = alt;
        }
    }

    renderSpecialities() {
        const container = document.getElementById('specialitiesRowContainer');
        if (!container || !this.data.specialities) return;

        container.innerHTML = this.data.specialities.map(item => `
            <div class="flex-shrink-0 flex flex-col items-center w-20 cursor-pointer group"
                onclick="quickSelectCategory('${item.categoryKey}')" title="Filter by ${item.name}">
                <div class="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr ${item.gradient || 'from-amber-400 to-orange-500'} shadow-md group-hover:scale-105 transition-all">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover rounded-full">
                </div>
                <span class="text-[10px] font-bold text-slate-700 text-center mt-1.5 leading-tight">${item.name}</span>
            </div>
        `).join('');
    }

    renderReviewChips() {
        const container = document.getElementById('reviewChipsContainer') || document.getElementById('chipsContainer');
        if (!container || !this.data.reviewChips) return;

        container.innerHTML = this.data.reviewChips.map(chip => `
            <button type="button" onclick="toggleChip(this, '${chip.key}')"
                class="chip ${chip.key === 'ALL' ? 'chip-active' : ''} px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 flex items-center gap-1.5 hover:border-indigo-400 hover:text-indigo-600 transition-all flex-shrink-0">
                <span>${chip.icon}</span>
                <span>${chip.label}</span>
            </button>
        `).join('');
    }

    renderGallery() {
        const grid = document.getElementById('galleryGrid');
        if (!grid || !this.data.gallery) return;

        grid.innerHTML = this.data.gallery.map((item, index) => `
            <div class="gallery-card group relative h-36 rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-slate-100"
                data-category="${item.category}" onclick="openGalleryModal(${index})">
                <img src="${item.src}" alt="${item.title}"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <span class="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 text-slate-800 text-[8px] font-extrabold backdrop-blur-sm shadow-sm">${item.categoryLabel}</span>
                <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded-full bg-black/60 text-white text-[9px] font-bold backdrop-blur-sm inline-block truncate max-w-full">${item.tag || item.title}</span>
                    <span class="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                </div>
            </div>
        `).join('');

        // Sync global GALLERY_ITEMS used by lightbox
        window.GALLERY_ITEMS = this.data.gallery;
        const countBadge = document.getElementById('galleryCountBadge');
        if (countBadge) {
            countBadge.textContent = `${this.data.gallery.length} Items`;
        }
    }

    renderAboutHighlights() {
        const container = document.getElementById('aboutHighlightsGrid');
        if (!container || !this.data.about?.highlights) return;

        container.innerHTML = this.data.about.highlights.map(item => `
            <div class="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100/60">
                <span>${item.icon}</span>
                <span>${item.text}</span>
            </div>
        `).join('');
    }

    renderTestimonials() {
        const container = document.getElementById('testimonialsContainer');
        if (!container || !this.data.testimonials) return;

        container.innerHTML = this.data.testimonials.map(t => `
            <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100/80">
                <div class="flex items-center justify-between mb-1">
                    <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-full ${t.avatarBg || 'bg-blue-600'} text-white text-[10px] font-bold flex items-center justify-center">
                            ${t.initial || t.name.charAt(0)}
                        </div>
                        <span class="text-xs font-bold text-slate-800">${t.name}</span>
                    </div>
                    <span class="text-[10px] text-slate-400">${t.timeAgo}</span>
                </div>
                <div class="text-amber-400 text-[10px] mb-1">${'★'.repeat(t.rating || 5)}</div>
                <p class="text-[11px] text-slate-600 leading-snug">"${t.quote}"</p>
            </div>
        `).join('');
    }

    /**
     * UI INJECTION: Floating Button & Full CMS Drawer/Modal
     */
    injectEditorUI() {
        // Floating Dev Toggle Button
        const floatBtn = document.createElement('div');
        floatBtn.id = 'devFloatingBar';
        floatBtn.className = 'fixed bottom-4 right-4 z-50 flex items-center gap-2 select-none';
        floatBtn.innerHTML = `
            <button type="button" id="devToggleBtn"
                class="px-3.5 py-2 rounded-2xl shadow-2xl font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border backdrop-blur-md ${
                    this.isDevMode 
                    ? 'bg-amber-400 text-slate-950 border-amber-300 ring-2 ring-amber-400/50' 
                    : 'bg-slate-900/90 text-white border-white/20 hover:bg-black'
                }">
                <span>🛠️</span>
                <span id="devToggleLabel">${this.isDevMode ? 'Dev Mode: ON' : 'Dev Mode'}</span>
            </button>
            <button type="button" id="devOpenPanelBtn"
                class="px-3.5 py-2 rounded-2xl shadow-2xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-400/30 flex items-center gap-1.5 transition-all active:scale-95 ${
                    this.isDevMode ? 'inline-flex' : 'hidden'
                }">
                <span>⚙️ Control Center</span>
            </button>
        `;
        document.body.appendChild(floatBtn);

        document.getElementById('devToggleBtn').addEventListener('click', () => this.toggleDevMode());
        document.getElementById('devOpenPanelBtn').addEventListener('click', () => this.openCMSPanel());

        // Full CMS Modal Panel
        const modal = document.createElement('div');
        modal.id = 'devCMSModal';
        modal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 hidden';
        modal.innerHTML = `
            <div class="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] overflow-hidden">
                <!-- Modal Header -->
                <div class="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-white/10">
                    <div class="flex items-center gap-2.5">
                        <span class="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm">🛠️</span>
                        <div>
                            <h3 class="font-extrabold text-sm sm:text-base leading-tight">Developer CMS & Master Control</h3>
                            <p class="text-[11px] text-slate-400">Edit, manipulate & export any text, image, link, or review template</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button" id="cmsCloseBtn" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm transition-all">✕</button>
                    </div>
                </div>

                <!-- Tabs Navigation -->
                <div class="flex items-center gap-1 px-4 py-2 bg-slate-50 border-b border-slate-200 overflow-x-auto hide-scrollbar text-xs font-bold text-slate-600">
                    <button type="button" class="cms-tab-btn px-3 py-1.5 rounded-xl bg-white text-indigo-600 shadow-sm border border-slate-200" data-tab="business">🏢 Business & Brand</button>
                    <button type="button" class="cms-tab-btn px-3 py-1.5 rounded-xl hover:bg-white/80" data-tab="links">🔗 Links & URLs</button>
                    <button type="button" class="cms-tab-btn px-3 py-1.5 rounded-xl hover:bg-white/80" data-tab="gallery">📸 Gallery (8 Items)</button>
                    <button type="button" class="cms-tab-btn px-3 py-1.5 rounded-xl hover:bg-white/80" data-tab="specialities">🍓 Specialities</button>
                    <button type="button" class="cms-tab-btn px-3 py-1.5 rounded-xl hover:bg-white/80" data-tab="reviews">💬 AI Reviews & Bank</button>
                    <button type="button" class="cms-tab-btn px-3 py-1.5 rounded-xl hover:bg-white/80" data-tab="about">🌟 About & Testimonials</button>
                    <button type="button" class="cms-tab-btn px-3 py-1.5 rounded-xl hover:bg-white/80" data-tab="json">📦 Raw JSON / Export</button>
                </div>

                <!-- Tab Content Body (Scrollable) -->
                <div id="cmsTabContent" class="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
                    <!-- Populated dynamically -->
                </div>

                <!-- Footer Actions -->
                <div class="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between">
                    <button type="button" id="cmsResetBtn" class="text-rose-600 hover:text-rose-700 font-bold text-xs flex items-center gap-1">
                        <span>🔄</span> Reset to Defaults
                    </button>
                    <div class="flex items-center gap-2">
                        <button type="button" id="cmsExportBtn" class="px-3.5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 font-bold text-slate-800 transition-all flex items-center gap-1.5">
                            <span>📥</span> Export data.js
                        </button>
                        <button type="button" id="cmsSaveBtn" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-bold text-white shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5 active:scale-95">
                            <span>💾</span> Save & Apply Changes
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Bind Modal Events
        document.getElementById('cmsCloseBtn').addEventListener('click', () => this.closeCMSPanel());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeCMSPanel();
        });

        // Tab Switchers
        modal.querySelectorAll('.cms-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                modal.querySelectorAll('.cms-tab-btn').forEach(b => {
                    b.classList.remove('bg-white', 'text-indigo-600', 'shadow-sm', 'border', 'border-slate-200');
                    b.classList.add('hover:bg-white/80');
                });
                btn.classList.add('bg-white', 'text-indigo-600', 'shadow-sm', 'border', 'border-slate-200');
                btn.classList.remove('hover:bg-white/80');
                this.activeTab = btn.getAttribute('data-tab');
                this.renderTabContent();
            });
        });

        // Save & Reset Buttons
        document.getElementById('cmsSaveBtn').addEventListener('click', () => this.saveFromPanel());
        document.getElementById('cmsResetBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all data back to original defaults? Any custom edits will be cleared.')) {
                resetStoreData();
                this.data = getStoreData();
                this.renderAll();
                this.renderTabContent();
                this.showDevToast('Reset to original default configuration.');
            }
        });
        document.getElementById('cmsExportBtn').addEventListener('click', () => this.exportConfigFile());
    }

    toggleDevMode() {
        this.isDevMode = !this.isDevMode;
        const btn = document.getElementById('devToggleBtn');
        const label = document.getElementById('devToggleLabel');
        const openPanelBtn = document.getElementById('devOpenPanelBtn');

        if (this.isDevMode) {
            btn.className = 'px-3.5 py-2 rounded-2xl shadow-2xl font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border backdrop-blur-md bg-amber-400 text-slate-950 border-amber-300 ring-2 ring-amber-400/50';
            label.textContent = 'Dev Mode: ON';
            openPanelBtn.classList.remove('hidden');
            openPanelBtn.classList.add('inline-flex');
            this.enableDevModeStyles();
            this.showDevToast('Dev Mode ON. Click "⚙️ Control Center" or edit elements directly!');
        } else {
            btn.className = 'px-3.5 py-2 rounded-2xl shadow-2xl font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border backdrop-blur-md bg-slate-900/90 text-white border-white/20 hover:bg-black';
            label.textContent = 'Dev Mode';
            openPanelBtn.classList.add('hidden');
            openPanelBtn.classList.remove('inline-flex');
            this.disableDevModeStyles();
            this.showDevToast('Dev Mode OFF.');
        }
    }

    enableDevModeStyles() {
        document.body.classList.add('dev-mode-active');
        this.attachInlineEditHandlers();
    }

    disableDevModeStyles() {
        document.body.classList.remove('dev-mode-active');
        document.querySelectorAll('[contenteditable="true"]').forEach(el => {
            if (el.id !== 'reviewOutputText') el.removeAttribute('contenteditable');
        });
    }

    attachInlineEditHandlers() {
        // Quick click on images in dev mode to swap URL
        const imageHooks = [
            { id: 'heroBannerImg', key: 'brand.heroImg', name: 'Hero Banner Image' },
            { id: 'storeLogoImg', key: 'brand.logoImg', name: 'Circular Store Logo' }
        ];

        imageHooks.forEach(hook => {
            const el = document.getElementById(hook.id);
            if (!el) return;
            el.style.cursor = 'pointer';
            el.title = `[Dev Mode] Click to change ${hook.name}`;
            el.onclick = (e) => {
                if (!this.isDevMode) return;
                e.stopPropagation();
                const newUrl = prompt(`Enter new image URL or path for ${hook.name}:`, el.src);
                if (newUrl && newUrl.trim()) {
                    if (hook.key === 'brand.heroImg') this.data.brand.heroImg = newUrl.trim();
                    if (hook.key === 'brand.logoImg') this.data.brand.logoImg = newUrl.trim();
                    saveStoreData(this.data);
                    this.renderAll();
                    this.showDevToast(`Updated ${hook.name}!`);
                }
            };
        });
    }

    openCMSPanel() {
        this.renderTabContent();
        document.getElementById('devCMSModal').classList.remove('hidden');
    }

    closeCMSPanel() {
        document.getElementById('devCMSModal').classList.add('hidden');
    }

    renderTabContent() {
        const container = document.getElementById('cmsTabContent');
        if (!container) return;

        const d = this.data;

        if (this.activeTab === 'business') {
            container.innerHTML = `
                <div class="space-y-4">
                    <h4 class="font-extrabold text-slate-800 text-sm border-b pb-2">Business & Brand Information</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Business Name</label>
                            <input type="text" id="inp_brand_name" value="${d.brand.name}" class="w-full p-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Initials / Short Badge</label>
                            <input type="text" id="inp_brand_initials" value="${d.brand.initials}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block font-bold text-slate-700 mb-1">Tagline</label>
                            <input type="text" id="inp_brand_tagline" value="${d.brand.tagline}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Phone Number (Call link)</label>
                            <input type="text" id="inp_contact_phone" value="${d.contact.phone}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Phone Display Text</label>
                            <input type="text" id="inp_contact_phoneDisplay" value="${d.contact.phoneDisplay}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">WhatsApp Number</label>
                            <input type="text" id="inp_contact_whatsapp" value="${d.contact.whatsapp}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Status / Hours Badge</label>
                            <input type="text" id="inp_brand_status" value="${d.brand.statusBadge}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block font-bold text-slate-700 mb-1">Full Physical Address</label>
                            <input type="text" id="inp_contact_address" value="${d.contact.address}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Short Address</label>
                            <input type="text" id="inp_contact_shortAddress" value="${d.contact.shortAddress}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Rating Value</label>
                            <input type="number" step="0.1" id="inp_brand_rating" value="${d.brand.rating}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Rating Count Text</label>
                            <input type="text" id="inp_brand_ratingCount" value="${d.brand.ratingCountText}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Badge Title</label>
                            <input type="text" id="inp_brand_badgeText" value="${d.brand.badgeText}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block font-bold text-slate-700 mb-1">Logo Image URL / Path</label>
                            <input type="text" id="inp_brand_logo" value="${d.brand.logoImg}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block font-bold text-slate-700 mb-1">Hero Banner Image URL / Path</label>
                            <input type="text" id="inp_brand_hero" value="${d.brand.heroImg}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                    </div>
                </div>
            `;
        } else if (this.activeTab === 'links') {
            container.innerHTML = `
                <div class="space-y-4">
                    <h4 class="font-extrabold text-slate-800 text-sm border-b pb-2">Actions, External Links & Maps</h4>
                    <div class="space-y-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Google Place ID</label>
                            <input type="text" id="inp_links_placeId" value="${d.links.googlePlaceId}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Google Review URL (Primary Redirect)</label>
                            <input type="text" id="inp_links_reviewUrl" value="${d.links.googleReviewUrl}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Google Maps Direct Listing URL</label>
                            <input type="text" id="inp_links_mapsUrl" value="${d.links.googleMapsUrl}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Google Maps Embed URL (Iframe)</label>
                            <input type="text" id="inp_links_embedUrl" value="${d.links.mapsEmbedUrl}" class="w-full p-2 border border-slate-300 rounded-xl">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">Menu Link (PDF or Web URL)</label>
                            <input type="text" id="inp_links_menuUrl" value="${d.links.menuUrl || ''}" class="w-full p-2 border border-slate-300 rounded-xl" placeholder="e.g. /menu.pdf or https://...">
                        </div>
                    </div>
                </div>
            `;
        } else if (this.activeTab === 'gallery') {
            container.innerHTML = `
                <div class="space-y-4">
                    <div class="flex items-center justify-between border-b pb-2">
                        <h4 class="font-extrabold text-slate-800 text-sm">Culinary Gallery Items (${d.gallery.length})</h4>
                        <button type="button" id="cmsAddGalleryItemBtn" class="px-2.5 py-1 rounded-xl bg-indigo-50 text-indigo-700 font-bold hover:bg-indigo-100">+ Add Item</button>
                    </div>
                    <div class="space-y-3" id="cmsGalleryItemList">
                        ${d.gallery.map((item, idx) => `
                            <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row gap-3 items-start" data-gidx="${idx}">
                                <img src="${item.src}" class="w-16 h-16 rounded-xl object-cover border flex-shrink-0">
                                <div class="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <input type="text" class="g-title p-1.5 border rounded-lg font-bold" value="${item.title}" placeholder="Dish Title">
                                    <input type="text" class="g-tag p-1.5 border rounded-lg" value="${item.tag || item.title}" placeholder="Badge Tag">
                                    <input type="text" class="g-src p-1.5 border rounded-lg sm:col-span-2 text-[10px]" value="${item.src}" placeholder="Image URL / Path">
                                    <input type="text" class="g-desc p-1.5 border rounded-lg sm:col-span-2" value="${item.desc}" placeholder="Description">
                                    <select class="g-cat p-1.5 border rounded-lg">
                                        <option value="bakes" ${item.category === 'bakes' ? 'selected' : ''}>Cakes & Bakes</option>
                                        <option value="brunch" ${item.category === 'brunch' ? 'selected' : ''}>Brunch & Savory</option>
                                    </select>
                                    <input type="text" class="g-ai p-1.5 border rounded-lg" value="${item.aiCategory || 'ALL'}" placeholder="AI Category Link (e.g. BISCOFF)">
                                </div>
                                <button type="button" class="g-delete text-rose-500 hover:text-rose-700 font-bold px-2 py-1 flex-shrink-0" title="Delete">🗑️</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            // Bind add/delete handlers
            document.getElementById('cmsAddGalleryItemBtn')?.addEventListener('click', () => {
                this.data.gallery.push({
                    id: 'new-dish-' + Date.now(),
                    src: './assets/images/blue-door/cheesecake-cafe.jpg',
                    title: 'New Specialty Item',
                    category: 'bakes',
                    categoryLabel: 'Specialty',
                    tag: 'New Dish',
                    desc: 'Freshly prepared artisanal specialty made daily in our cafe.',
                    aiCategory: 'ALL'
                });
                this.renderTabContent();
            });

            container.querySelectorAll('.g-delete').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const row = e.target.closest('[data-gidx]');
                    const idx = parseInt(row.getAttribute('data-gidx'), 10);
                    if (confirm('Delete this gallery item?')) {
                        this.data.gallery.splice(idx, 1);
                        this.renderTabContent();
                    }
                });
            });
        } else if (this.activeTab === 'specialities') {
            container.innerHTML = `
                <div class="space-y-4">
                    <h4 class="font-extrabold text-slate-800 text-sm border-b pb-2">Specialities Carousel (${d.specialities.length} Items)</h4>
                    <div class="space-y-3">
                        ${d.specialities.map((item, idx) => `
                            <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3" data-sidx="${idx}">
                                <img src="${item.image}" class="w-12 h-12 rounded-full object-cover border flex-shrink-0">
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
                                    <input type="text" class="s-name p-1.5 border rounded-lg font-bold" value="${item.name}" placeholder="Name">
                                    <input type="text" class="s-img p-1.5 border rounded-lg sm:col-span-2 text-[10px]" value="${item.image}" placeholder="Image URL">
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (this.activeTab === 'reviews') {
            container.innerHTML = `
                <div class="space-y-4">
                    <h4 class="font-extrabold text-slate-800 text-sm border-b pb-2">AI Review Generator Categories & Knowledge Base</h4>
                    <div class="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 leading-relaxed">
                        💡 <strong>Prompt Engineering Bank:</strong> The review generator combines customizable openings, category items, and closings to generate organic 5-star Google reviews.
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1.5">Review Chip Categories (Comma-separated)</label>
                        <input type="text" id="inp_chips_list" value="${d.reviewChips.map(c => c.label).join(', ')}" class="w-full p-2 border border-slate-300 rounded-xl">
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1.5">English Opening Sentences (One per line)</label>
                        <textarea id="inp_review_openings" rows="4" class="w-full p-2 border border-slate-300 rounded-xl font-mono text-xs">${(d.reviewBank.ENGLISH.openings || []).join('\n')}</textarea>
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1.5">English Closing Sentences (One per line)</label>
                        <textarea id="inp_review_closings" rows="3" class="w-full p-2 border border-slate-300 rounded-xl font-mono text-xs">${(d.reviewBank.ENGLISH.closings || []).join('\n')}</textarea>
                    </div>
                </div>
            `;
        } else if (this.activeTab === 'about') {
            container.innerHTML = `
                <div class="space-y-4">
                    <h4 class="font-extrabold text-slate-800 text-sm border-b pb-2">About Us & Testimonials</h4>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">About Us Title</label>
                        <input type="text" id="inp_about_title" value="${d.about.title}" class="w-full p-2 border border-slate-300 rounded-xl">
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">About Us Story / Description</label>
                        <textarea id="inp_about_desc" rows="4" class="w-full p-2 border border-slate-300 rounded-xl leading-relaxed">${d.about.description}</textarea>
                    </div>
                    <div class="pt-2">
                        <h5 class="font-bold text-slate-800 mb-2">Customer Testimonials</h5>
                        <div class="space-y-3">
                            ${d.testimonials.map((t, idx) => `
                                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-2" data-tidx="${idx}">
                                    <div class="grid grid-cols-2 gap-2">
                                        <input type="text" class="t-name p-1.5 border rounded-lg font-bold" value="${t.name}" placeholder="Customer Name">
                                        <input type="text" class="t-time p-1.5 border rounded-lg" value="${t.timeAgo}" placeholder="e.g. 2 days ago">
                                    </div>
                                    <textarea class="t-quote w-full p-2 border rounded-lg text-xs" rows="2">${t.quote}</textarea>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (this.activeTab === 'json') {
            container.innerHTML = `
                <div class="space-y-3">
                    <div class="flex items-center justify-between border-b pb-2">
                        <h4 class="font-extrabold text-slate-800 text-sm">Full Application JSON State</h4>
                        <button type="button" id="copyJsonBtn" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-xs">📋 Copy JSON</button>
                    </div>
                    <p class="text-slate-500 text-[11px]">You can edit this JSON directly and click "Save & Apply Changes" to update every aspect of the app at once.</p>
                    <textarea id="rawJsonEditor" rows="16" class="w-full p-3 font-mono text-[11px] bg-slate-950 text-emerald-400 rounded-2xl border border-slate-800 leading-relaxed outline-none focus:ring-2 focus:ring-emerald-500">${JSON.stringify(d, null, 2)}</textarea>
                </div>
            `;

            document.getElementById('copyJsonBtn')?.addEventListener('click', () => {
                navigator.clipboard.writeText(JSON.stringify(d, null, 2));
                this.showDevToast('JSON configuration copied to clipboard!');
            });
        }
    }

    saveFromPanel() {
        try {
            const d = this.data;

            if (this.activeTab === 'json') {
                const raw = document.getElementById('rawJsonEditor').value;
                this.data = JSON.parse(raw);
            } else {
                // Collect Business Tab
                if (document.getElementById('inp_brand_name')) {
                    d.brand.name = document.getElementById('inp_brand_name').value;
                    d.brand.initials = document.getElementById('inp_brand_initials').value;
                    d.brand.tagline = document.getElementById('inp_brand_tagline').value;
                    d.contact.phone = document.getElementById('inp_contact_phone').value;
                    d.contact.phoneDisplay = document.getElementById('inp_contact_phoneDisplay').value;
                    d.contact.whatsapp = document.getElementById('inp_contact_whatsapp').value;
                    d.brand.statusBadge = document.getElementById('inp_brand_status').value;
                    d.contact.address = document.getElementById('inp_contact_address').value;
                    d.contact.shortAddress = document.getElementById('inp_contact_shortAddress').value;
                    d.brand.rating = parseFloat(document.getElementById('inp_brand_rating').value) || 4.9;
                    d.brand.ratingCountText = document.getElementById('inp_brand_ratingCount').value;
                    d.brand.badgeText = document.getElementById('inp_brand_badgeText').value;
                    d.brand.logoImg = document.getElementById('inp_brand_logo').value;
                    d.brand.heroImg = document.getElementById('inp_brand_hero').value;
                }

                // Collect Links Tab
                if (document.getElementById('inp_links_placeId')) {
                    d.links.googlePlaceId = document.getElementById('inp_links_placeId').value;
                    d.links.googleReviewUrl = document.getElementById('inp_links_reviewUrl').value;
                    d.links.googleMapsUrl = document.getElementById('inp_links_mapsUrl').value;
                    d.links.mapsEmbedUrl = document.getElementById('inp_links_embedUrl').value;
                    d.links.menuUrl = document.getElementById('inp_links_menuUrl').value;
                }

                // Collect Gallery Tab
                const gRows = document.querySelectorAll('#cmsGalleryItemList [data-gidx]');
                if (gRows.length > 0) {
                    gRows.forEach((row, i) => {
                        if (d.gallery[i]) {
                            d.gallery[i].title = row.querySelector('.g-title').value;
                            d.gallery[i].tag = row.querySelector('.g-tag').value;
                            d.gallery[i].src = row.querySelector('.g-src').value;
                            d.gallery[i].desc = row.querySelector('.g-desc').value;
                            d.gallery[i].category = row.querySelector('.g-cat').value;
                            d.gallery[i].categoryLabel = d.gallery[i].category === 'bakes' ? 'Cheesecake' : 'Brunch';
                            d.gallery[i].aiCategory = row.querySelector('.g-ai').value;
                        }
                    });
                }

                // Collect Specialities
                const sRows = document.querySelectorAll('[data-sidx]');
                if (sRows.length > 0) {
                    sRows.forEach((row, i) => {
                        if (d.specialities[i]) {
                            d.specialities[i].name = row.querySelector('.s-name').value;
                            d.specialities[i].image = row.querySelector('.s-img').value;
                        }
                    });
                }

                // Collect Reviews Tab
                if (document.getElementById('inp_review_openings')) {
                    const openings = document.getElementById('inp_review_openings').value.split('\n').filter(s => s.trim());
                    const closings = document.getElementById('inp_review_closings').value.split('\n').filter(s => s.trim());
                    d.reviewBank.ENGLISH.openings = openings;
                    d.reviewBank.ENGLISH.closings = closings;
                }

                // Collect About Tab
                if (document.getElementById('inp_about_title')) {
                    d.about.title = document.getElementById('inp_about_title').value;
                    d.about.description = document.getElementById('inp_about_desc').value;
                    const tRows = document.querySelectorAll('[data-tidx]');
                    tRows.forEach((row, i) => {
                        if (d.testimonials[i]) {
                            d.testimonials[i].name = row.querySelector('.t-name').value;
                            d.testimonials[i].timeAgo = row.querySelector('.t-time').value;
                            d.testimonials[i].quote = row.querySelector('.t-quote').value;
                        }
                    });
                }
            }

            // Persist to localStorage
            saveStoreData(this.data);

            // Re-render the application live
            this.renderAll();
            this.showDevToast('Changes saved and applied live!');
            this.closeCMSPanel();
        } catch (e) {
            alert('Error parsing or saving data: ' + e.message);
        }
    }

    exportConfigFile() {
        const fileContent = `/**
 * data.js
 * MASTER APPLICATION DATA & CONFIGURATION STORE
 * Exported from ONESCAN Live Developer Mode
 * Generated at: ${new Date().toISOString()}
 */

export const DEFAULT_STORE_DATA = ${JSON.stringify(this.data, null, 4)};

export function getStoreData() {
    try {
        const stored = localStorage.getItem('bluedoor_store_data');
        if (stored) return JSON.parse(stored);
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_STORE_DATA));
}

export function saveStoreData(data) {
    try {
        localStorage.setItem('bluedoor_store_data', JSON.stringify(data));
        return true;
    } catch (e) {
        return false;
    }
}

export function resetStoreData() {
    try {
        localStorage.removeItem('bluedoor_store_data');
        return true;
    } catch (e) {
        return false;
    }
}
`;

        const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showDevToast('Downloaded updated data.js! Replace in your js/ directory.');
    }

    showDevToast(msg) {
        if (window.showToast) {
            window.showToast(msg, '🛠️');
        } else {
            alert(msg);
        }
    }
}

// Instantiate developer editor on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    window.devEditor = new DeveloperEditor();
});
