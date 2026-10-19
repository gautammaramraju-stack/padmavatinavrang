# ZaykaWrap Mobile App

Mobile application for Padmavati Navrang ZaykaWrap - Premium Food Grade Aluminium Foil Products.

## 📱 App Features

- ✅ Progressive Web App (PWA) - Install directly from browser
- ✅ Native Android APK support
- ✅ Native iOS IPA support (Mac required)
- ✅ Offline functionality
- ✅ App-like experience
- ✅ Works on both Android and iOS

## 🚀 Getting Started

### Quick Start (PWA - No Building Required)

1. Deploy your website to a server with HTTPS
2. Users can install directly from browser
3. See `QUICK_START.md` for user instructions

### Building Native Apps

See `BUILD_INSTRUCTIONS.md` for complete guide.

**Quick Commands:**
```bash
npm install          # Install dependencies
npx cap sync         # Sync web files to native projects
npx cap open android # Open Android Studio
npx cap open ios     # Open Xcode (Mac only)
```

## 📁 Project Structure

```
Navrangwrap/
├── public_html/          # Website files (web app)
│   ├── index.html
│   ├── manifest.json     # PWA manifest
│   ├── sw.js            # Service Worker
│   ├── css/
│   ├── js/
│   └── assets/
├── package.json          # Node.js dependencies
├── capacitor.config.json # Capacitor configuration
├── BUILD_INSTRUCTIONS.md # Detailed build guide
└── QUICK_START.md       # Quick start guide
```

## 🔧 Requirements

### For PWA:
- Website served over HTTPS
- Modern browser (Chrome, Safari, Edge)

### For Android APK:
- Node.js 16+
- Java JDK 11+
- Android Studio

### For iOS IPA:
- Mac computer
- Xcode
- Apple Developer Account ($99/year)

## 📝 Configuration

### App Details (capacitor.config.json):
- **App ID:** `com.padmavathinavrang.zaykawrap`
- **App Name:** `ZaykaWrap`
- **Web Directory:** `public_html`

### PWA Details (manifest.json):
- **Name:** Padmavati Navrang ZaykaWrap
- **Short Name:** ZaykaWrap
- **Theme Color:** #FFD700 (Gold)

## 📦 Distribution

### Android:
- **APK:** Share directly or upload to Google Play Store
- **Location:** `android/app/build/outputs/apk/release/app-release.apk`

### iOS:
- **TestFlight:** Beta testing
- **App Store:** Public release
- Requires Apple Developer Account

## 🛠️ Development

### Update Website:
1. Edit files in `public_html/`
2. Run `npx cap sync` to update native projects

### Update App Config:
1. Edit `capacitor.config.json`
2. Run `npx cap sync`

## 📚 Documentation

- `BUILD_INSTRUCTIONS.md` - Complete build guide
- `QUICK_START.md` - Quick reference
- [Capacitor Docs](https://capacitorjs.com/docs)

## 📄 License

MIT

## 👤 Author

Padmavati Navrang Manufacturing

---

**Need Help?** Check `BUILD_INSTRUCTIONS.md` or Capacitor documentation.
