# 📱 Complete Android Studio Guide for Beginners

## 🎯 Step-by-Step: Building Your First APK

### ⚠️ IMPORTANT: Don't Create a New Project!

If you see the "New Project" dialog in Android Studio:
1. **Click "Cancel"** to close it
2. We'll use Capacitor to create the Android project for you

---

## 📋 Step 1: Close Android Studio (For Now)

1. Close Android Studio completely
2. We'll open it again after setting up the project

---

## 📋 Step 2: Open Command Prompt (Windows)

1. Press `Windows Key + R`
2. Type `cmd` and press Enter
3. Or search for "Command Prompt" in Start menu

---

## 📋 Step 3: Navigate to Your Project

In Command Prompt, type:
```bash
cd C:\Users\gauta\Desktop\Navrangwrap
```

Press Enter. You should see your project path.

---

## 📋 Step 4: Check if Node.js is Installed

Type this command:
```bash
node --version
```

**If you see a version number (like v18.17.0):**
✅ Node.js is installed! Continue to Step 5.

**If you see "node is not recognized":**
❌ You need to install Node.js first:
1. Go to https://nodejs.org/
2. Download the LTS version (recommended)
3. Run the installer
4. Restart Command Prompt
5. Try `node --version` again

---

## 📋 Step 5: Install Project Dependencies

Type this command:
```bash
npm install
```

**What this does:** Downloads all required packages
**Wait time:** 2-5 minutes (first time only)
**You'll see:** Lots of text scrolling, then "added X packages"

---

## 📋 Step 6: Install Capacitor CLI (If Needed)

Type:
```bash
npm install -g @capacitor/cli
```

**Wait for it to finish** (may take 1-2 minutes)

---

## 📋 Step 7: Add Android Platform

Type:
```bash
npx cap add android
```

**What this does:** Creates the Android project folder
**Wait time:** 1-2 minutes
**You'll see:** "✔ Adding native android project"

---

## 📋 Step 8: Sync Your Website to Android

Type:
```bash
npx cap sync
```

**What this does:** Copies your website files into the Android app
**Wait time:** 30 seconds
**You'll see:** "✔ Copying web assets" and "✔ Syncing Capacitor"

---

## 📋 Step 9: Open Project in Android Studio

Type:
```bash
npx cap open android
```

**What happens:**
- Android Studio will open automatically
- It will load your project
- Wait for "Gradle Sync" to complete (bottom right corner)
- This may take 5-10 minutes the first time

---

## 📋 Step 10: Wait for Gradle Sync

**What you'll see in Android Studio:**

1. **Bottom right corner:** "Gradle Sync" or "Indexing"
2. **Progress bar** at the bottom
3. **Status:** "Gradle sync in progress..."

**DO NOT CLOSE ANDROID STUDIO** while this is happening!

**Wait until you see:**
- ✅ "Gradle sync finished"
- ✅ No error messages
- ✅ Project files visible in left sidebar

**If you see errors:**
- Don't panic! This is normal for first-time setup
- Scroll down to "Troubleshooting" section below

---

## 📋 Step 11: Build Your APK

Once Gradle sync is complete:

### Method 1: Using Menu (Easiest)

1. Click **"Build"** in the top menu bar
2. Click **"Build Bundle(s) / APK(s)"**
3. Click **"Build APK(s)"**
4. Wait for build to complete (2-5 minutes)

### Method 2: Using Terminal in Android Studio

1. Click **"Terminal"** tab at the bottom
2. Type: `./gradlew assembleRelease`
3. Press Enter
4. Wait for build to complete

---

## 📋 Step 12: Find Your APK File

After build completes:

1. Look for a **notification** at bottom right: "APK(s) generated successfully"
2. Click **"locate"** in the notification
3. Or navigate manually to:
   ```
   android\app\build\outputs\apk\release\app-release.apk
   ```

**This is your APK file!** 🎉

---

## 📋 Step 13: Install APK on Your Phone

### Option A: Transfer via USB

1. Connect phone to computer via USB
2. Copy `app-release.apk` to your phone
3. On phone: Open file manager → Tap APK → Install

### Option B: Transfer via Email/Cloud

1. Email the APK to yourself
2. Or upload to Google Drive/Dropbox
3. Download on phone → Install

### Option C: Direct Install (If Phone Connected)

In Android Studio:
1. Click **"Run"** button (green play icon) at top
2. Select your connected phone
3. App installs automatically

---

## 🎨 Understanding Android Studio Interface

### Left Sidebar (Project Files)
- Shows all your project files
- `app` folder contains your app code
- `res` folder contains images, icons

### Top Menu Bar
- **File** - Open, save projects
- **Build** - Build APK, clean project
- **Run** - Install and run on device
- **Tools** - Various tools

### Bottom Tabs
- **Terminal** - Run commands
- **Build** - See build progress
- **Logcat** - See app logs

### Top Toolbar
- **Green Play Button** - Run app
- **Hammer Icon** - Build project
- **Stop Button** - Stop running app

---

## 🛠️ Troubleshooting Common Issues

### Issue 1: "Gradle Sync Failed"

**Solution:**
1. Click **"File"** → **"Invalidate Caches / Restart"**
2. Select **"Invalidate and Restart"**
3. Wait for Android Studio to restart
4. Let Gradle sync again

### Issue 2: "SDK Not Found"

**Solution:**
1. Click **"File"** → **"Settings"** (or **"Preferences"** on Mac)
2. Go to **"Appearance & Behavior"** → **"System Settings"** → **"Android SDK"**
3. Check **"Android SDK Platform-Tools"** and **"Android SDK Build-Tools"**
4. Click **"Apply"** → **"OK"**
5. Let it download and install

### Issue 3: "Build Failed" or Errors

**Solution:**
1. Click **"Build"** → **"Clean Project"**
2. Wait for it to finish
3. Click **"Build"** → **"Rebuild Project"**
4. Try building APK again

### Issue 4: "Command Not Found" in Terminal

**Solution:**
- Make sure you're in the project folder: `cd C:\Users\gauta\Desktop\Navrangwrap`
- Check Node.js is installed: `node --version`

### Issue 5: Android Studio Opens Empty/No Project

**Solution:**
1. Close Android Studio
2. In Command Prompt, run: `npx cap open android`
3. This should open the correct project

### Issue 6: "Gradle Sync Taking Forever"

**Solution:**
- This is normal for first-time setup (can take 10-15 minutes)
- Make sure you have internet connection
- Don't close Android Studio
- Be patient!

---

## ✅ Quick Checklist

Before building APK, make sure:
- [ ] Node.js is installed (`node --version` works)
- [ ] Ran `npm install` successfully
- [ ] Ran `npx cap add android` successfully
- [ ] Ran `npx cap sync` successfully
- [ ] Android Studio opened with your project
- [ ] Gradle sync completed without errors
- [ ] Project files visible in left sidebar

---

## 🎯 Quick Command Reference

```bash
# Navigate to project
cd C:\Users\gauta\Desktop\Navrangwrap

# Check Node.js
node --version

# Install dependencies
npm install

# Add Android platform
npx cap add android

# Sync website to Android
npx cap sync

# Open in Android Studio
npx cap open android
```

---

## 📞 Need More Help?

1. Check `BUILD_INSTRUCTIONS.md` for detailed info
2. Check Android Studio's built-in help: **Help** → **Help Topics**
3. Capacitor docs: https://capacitorjs.com/docs

---

## 🎉 Success!

Once you have your APK file:
- ✅ You can install it on any Android phone
- ✅ Share it with others
- ✅ Upload to Google Play Store (if desired)

**Congratulations!** You've built your first mobile app! 🚀
