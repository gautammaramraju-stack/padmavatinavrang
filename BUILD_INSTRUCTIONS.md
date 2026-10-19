# Mobile App Build Instructions for ZaykaWrap

This guide will help you create Android (.apk) and iOS (.ipa) files from your website.

## 📱 Two Options Available

### Option 1: Progressive Web App (PWA) - Easiest, Works on Both Platforms
**No app store required!** Users can install directly from the browser.

### Option 2: Native Apps (APK/IPA) - Full Native Experience
Requires building with Capacitor (instructions below).

---

## 🚀 Option 1: PWA Setup (Recommended First Step)

### What You Get:
- ✅ Works on both Android and iOS
- ✅ Can be installed from browser
- ✅ No app store submission needed
- ✅ Offline functionality
- ✅ Already configured!

### How Users Install:

**On Android:**
1. Open Chrome browser
2. Visit your website
3. Tap the menu (3 dots) → "Add to Home screen" or "Install app"
4. App icon appears on home screen

**On iOS:**
1. Open Safari browser
2. Visit your website
3. Tap Share button → "Add to Home Screen"
4. App icon appears on home screen

### Testing PWA:
1. Deploy your website to a server (HTTPS required)
2. Visit the site on mobile device
3. Follow installation steps above

---

## 📦 Option 2: Native App Build (APK/IPA)

### Prerequisites:

**For Android APK:**
- ✅ Node.js (v16 or higher) - Download from [nodejs.org](https://nodejs.org/)
- ✅ Java JDK 11 or higher
- ✅ Android Studio - Download from [developer.android.com](https://developer.android.com/studio)
- ✅ Windows/Mac/Linux computer

**For iOS IPA:**
- ✅ Mac computer (required)
- ✅ Xcode (from App Store)
- ✅ Apple Developer Account ($99/year)
- ✅ Node.js

---

## 🔧 Step-by-Step: Building Android APK

### Step 1: Install Node.js and Dependencies

1. **Install Node.js** (if not installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Run installer and follow instructions
   - Verify: Open terminal/command prompt and type:
     ```bash
     node --version
     npm --version
     ```

2. **Navigate to your project folder**:
   ```bash
   cd C:\Users\gauta\Desktop\Navrangwrap
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Step 2: Install Capacitor CLI and Android Platform

```bash
npm install -g @capacitor/cli
npx cap add android
```

### Step 3: Sync Web Assets to Android

```bash
npx cap sync
```

This copies your website files to the Android project.

### Step 4: Open in Android Studio

```bash
npx cap open android
```

This opens Android Studio with your project.

### Step 5: Build APK in Android Studio

1. In Android Studio, wait for Gradle sync to complete
2. Go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. Wait for build to complete
4. Click **locate** when build finishes
5. APK file will be in: `android/app/build/outputs/apk/release/app-release.apk`

### Step 6: Sign APK (For Distribution)

**For testing:** You can install the unsigned APK directly on your device.

**For Google Play Store:**
1. Generate a keystore (one-time):
   ```bash
   keytool -genkey -v -keystore zaykawrap-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias zaykawrap
   ```
2. Update `capacitor.config.json` with keystore path and passwords
3. Build signed APK from Android Studio: **Build** → **Generate Signed Bundle / APK**

---

## 🍎 Step-by-Step: Building iOS IPA

### Step 1: Install Dependencies (on Mac)

```bash
cd /path/to/Navrangwrap
npm install
npx cap add ios
npx cap sync
```

### Step 2: Open in Xcode

```bash
npx cap open ios
```

### Step 3: Configure Signing in Xcode

1. Select your project in left sidebar
2. Go to **Signing & Capabilities** tab
3. Select your **Team** (Apple Developer Account)
4. Xcode will automatically manage signing

### Step 4: Build IPA

1. Select **Any iOS Device** or your connected device
2. Go to **Product** → **Archive**
3. Wait for archive to complete
4. Window opens → Click **Distribute App**
5. Choose distribution method:
   - **App Store Connect** (for App Store)
   - **Ad Hoc** (for testing on specific devices)
   - **Enterprise** (for enterprise distribution)
   - **Development** (for testing)

---

## 📝 Important Notes

### For Android:
- **APK file location:** `android/app/build/outputs/apk/release/app-release.apk`
- **Testing:** Enable "Install from Unknown Sources" on Android device
- **File size:** Usually 5-15 MB
- **Distribution:** Can share APK directly or upload to Google Play Store

### For iOS:
- **IPA file:** Created during Archive process in Xcode
- **Testing:** Requires Apple Developer Account ($99/year)
- **Distribution:** 
  - TestFlight (for beta testing)
  - App Store (for public release)
  - Ad Hoc (for limited devices)

### Website Requirements:
- ⚠️ **HTTPS Required:** Your website must be served over HTTPS for PWA and native apps to work properly
- Deploy to: GitHub Pages, Netlify, Vercel, or your own server

---

## 🛠️ Troubleshooting

### "Command not found" errors:
- Make sure Node.js is installed and added to PATH
- Restart terminal/command prompt after installing Node.js

### Android Studio issues:
- Make sure Android SDK is installed
- Install required SDK platforms (API 33+ recommended)

### Build errors:
- Run `npx cap sync` again
- Clean build: In Android Studio → **Build** → **Clean Project**
- Delete `node_modules` and run `npm install` again

### Service Worker not working:
- Make sure website is served over HTTPS
- Check browser console for errors

---

## 📞 Quick Commands Reference

```bash
# Install dependencies
npm install

# Sync web files to native projects
npx cap sync

# Open Android project
npx cap open android

# Open iOS project (Mac only)
npx cap open ios

# Update Capacitor
npm update @capacitor/core @capacitor/cli
```

---

## 🎯 Next Steps

1. **Test PWA first** - Deploy website and test installation
2. **Build Android APK** - Follow Android steps above
3. **Build iOS IPA** - Follow iOS steps (Mac required)
4. **Distribute** - Share APK or submit to app stores

---

## 📚 Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Developer Guide](https://developer.android.com/studio/build)
- [Apple Developer Documentation](https://developer.apple.com/documentation/)

---

**Need Help?** Check the Capacitor documentation or Android/iOS developer guides for detailed troubleshooting.
