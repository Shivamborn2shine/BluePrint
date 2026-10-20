# 🚪 Blue Door Café & Bakes — Review & Experience Landing Page

A 100% standalone, zero-dependency, mobile-optimized AI Review & Experience Web App designed specifically for **Blue Door Café & Bakes**, Clement Town, Dehradun.

---

## 🌟 Highlights & Features

- **📱 Exact 3-Screen Mobile Experience**:
  - **Screen 1**: Brand hero collage, verified badge, quick contact buttons (Call, WhatsApp, Directions, Menu, Share), specialties carousel, and operating hours.
  - **Screen 2**: Interactive 3D Mascot review studio with multi-category chips (*Lotus Biscoff, Tiramisu, Pancakes, Pasta, Coffee, Ambience, Service, Cleanliness*), optional feedback box, live typewriter review generator, in-place editing, and 1-tap **"Copy & Open Google Review Page"**.
  - **Screen 3**: Curated food gallery with lightbox modal, interactive Dehradun map embed, origin story, verified customer testimonials, and social links.
- **⚡ Zero Build Step / Zero External Node Dependencies**:
  - Native HTML5, modern vanilla JavaScript, Tailwind CSS via CDN, and Google Fonts.
  - Can be hosted anywhere simply by serving the folder statically.
- **🛰️ Live ONESCAN Telemetry Bridge**:
  - Automatically syncs QR scans and review copy conversions back to your central ONESCAN Studio Dashboard via `BroadcastChannel`, `localStorage`, and `postMessage`.

---

## 📂 Repository File Structure

```text
Bluedoor/
├── index.html                   # Primary entrypoint for deployment (zero configuration needed)
├── package.json                 # Optional NPM scripts for local development / hosting
├── vercel.json                  # Clean URL & rewrite rules for Vercel
├── netlify.toml                 # Redirect & security headers for Netlify
├── .gitignore                   # Standard Git ignore rules
├── README.md                    # Documentation & setup instructions
├── js/
│   ├── config.js                # Standalone business configuration & coordinates
│   └── telemetry.js             # Client telemetry & live dashboard sync bridge
└── assets/
    └── images/
        └── blue-door/           # 11 optimized food, logo, and signage photos
            ├── hero-food-collage.jpg
            ├── blue-door-sign.jpg
            ├── blue-door-logo.jpg
            ├── biscoff-cheesecake.jpg
            ├── tiramisu-cup.jpg
            ├── fluffy-pancakes.jpg
            ├── penne-pasta.jpg
            ├── bento-cake.jpg
            ├── orange-cake.jpg
            ├── carrot-cake.jpg
            └── cheesecake-cafe.jpg
```

---

## 🚀 How to Create a Separate Git Repository & Deploy

### Step 1: Initialize Git in this Folder

Open your terminal, navigate into this `Bluedoor` directory, and run:

```bash
cd "d:\Business 2027\AI Reviews\Bluedoor"
git init
git add .
git commit -m "Initial commit: Standalone Blue Door Cafe & Bakes Review Landing Page"
```

### Step 2: Push to GitHub / GitLab

1. Create a new empty repository on [GitHub](https://github.com/new) (e.g. `bluedoor-cafe-reviews`).
2. Link your local repo and push:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/bluedoor-cafe-reviews.git
git push -u origin main
```

---

## 🌐 Instant Free Deployment Options

### Option A: Vercel (Recommended — 30 seconds)
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Import your GitHub repository `bluedoor-cafe-reviews`.
3. Framework Preset: Choose **"Other"**.
4. Root Directory: `./` (leave default).
5. Click **"Deploy"**. Your live URL (e.g. `https://bluedoor-cafe.vercel.app`) is instantly ready.

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
2. Select your GitHub repository.
3. Build command: *(leave empty)*.
4. Publish directory: `.` or `./`.
5. Click **"Deploy site"**.

### Option C: GitHub Pages
1. On GitHub, navigate to your repo's **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select `Deploy from a branch`.
3. Choose branch `main` and folder `/ (root)`.
4. Click **Save**. Within 1 minute, your page will be live at `https://<your-username>.github.io/bluedoor-cafe-reviews/`.

### Option D: Hostinger / cPanel / Shared Hosting
1. Zip the contents of the `Bluedoor` folder.
2. Upload and extract directly into `public_html/` or a subdomain folder (e.g. `reviews.bluedoorcafe.com`).

---

## 💻 Local Testing

You can run the page locally with any local server:

```bash
# Using Node / npx serve:
npx serve . -l 3000

# Or using Python:
python -m http.server 3000
```

Open your browser at `http://localhost:3000`.

---

## 📍 Business Details Configured

- **Business Name**: Blue Door Café & Bakes
- **Phone**: `+91 74558 66408` (`07455866408`)
- **WhatsApp**: `+91 74558 66408`
- **Location**: Clement Town, Dehradun, Uttarakhand 248002, India
- **Direct Google Maps Reviews URL**:
  `https://www.google.com/maps/place/Blue+Door+Cafe+and+Bakes/@30.2629266,77.9993898,17z/data=!4m8!3m7!1s0x39092b746f09dd97:0xc8815e220ba52a93!8m2!3d30.2629266!4d77.9993898!9m1!1b1!16s%2Fg%2F11vcwgp634`
- **Google Maps CID**: `14447932579898534547` (`0xc8815e220ba52a93`)
