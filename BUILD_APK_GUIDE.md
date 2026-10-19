# 📦 How to Build APK in Android Studio

## ✅ Sync Successful!

Your Gradle sync completed successfully! Now let's build your APK file.

---

## 🎯 Step-by-Step: Build APK

### Method 1: Using Menu (Easiest - Recommended)

1. **Click "Build" in the top menu bar**
   - Look at the very top of Android Studio
   - Find "Build" between "Go" and "Run"

2. **Click "Build Bundle(s) / APK(s)"**
   - A dropdown menu will appear

3. **Click "Build APK(s)"**
   - This starts the build process
   - Wait 2-5 minutes

4. **Wait for Build to Complete**
   - You'll see progress at the bottom: "Building..."
   - Status bar shows: "Gradle build finished"

5. **Find Your APK**
   - Look for a **notification** at bottom right: "APK(s) generated successfully"
   - Click **"locate"** in the notification
   - OR manually navigate to: `android\app\build\outputs\apk\release\app-release.apk`

---

### Method 2: Using Terminal (Alternative)

1. **Click "Terminal" tab** at the bottom of Android Studio

2. **Type this command:**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```

3. **Press Enter**

4. **Wait for build** (2-5 minutes)

5. **Find APK** in: `android\app\build\outputs\apk\release\app-release.apk`

---

## 📍 Visual Guide: Where to Click

```
Top Menu Bar:
[File] [Edit] [View] [Navigate] [Code] [Refactor] [Build] [Run] [Tools] [VCS]
                                              ↓
                                    Click "Build"
                                              ↓
                            "Build Bundle(s) / APK(s)"
                                              ↓
                                  "Build APK(s)"
```

---

## ⏱️ What Happens During Build

1. **Gradle compiles your code** (1-2 minutes)
2. **Packages your website files** (30 seconds)
3. **Signs the APK** (30 seconds)
4. **Creates final APK file** (30 seconds)

**Total time:** 2-5 minutes

---

## ✅ After Build Completes

### Find Your APK File:

**Location:**
```
C:\Users\gauta\Desktop\Navrangwrap\android\app\build\outputs\apk\release\app-release.apk
```

**Ways to find it:**

1. **Notification Method:**
   - Look for notification: "APK(s) generated successfully"
   - Click **"locate"** button
   - File explorer opens to APK location

2. **Manual Method:**
   - Open File Explorer
   - Navigate to: `C:\Users\gauta\Desktop\Navrangwrap\android\app\build\outputs\apk\release\`
   - Find `app-release.apk`

---

## 📱 Install APK on Your Phone

### Option 1: Transfer via USB

1. Connect phone to computer via USB cable
2. Copy `app-release.apk` to your phone
3. On phone: Open file manager → Tap APK → Install
4. Enable "Install from Unknown Sources" if prompted

### Option 2: Transfer via Email/Cloud

1. Email the APK to yourself
2. Or upload to Google Drive/Dropbox
3. Download on phone → Install

### Option 3: Direct Install (If Phone Connected)

1. In Android Studio, click **"Run"** button (▶ green play icon)
2. Select your connected phone from dropdown
3. App installs automatically

---

## 🎉 Success!

Once you have the APK:
- ✅ You can install it on any Android phone
- ✅ Share it with others
- ✅ Upload to Google Play Store (if desired)

---

## 🆘 Troubleshooting

### "Build Failed" Error

1. **Clean Project:**
   - **Build** → **Clean Project**
   - Wait for completion
   - Then build again

2. **Rebuild:**
   - **Build** → **Rebuild Project**
   - Wait for completion
   - Then build APK again

### Can't Find APK

1. Check build output for errors
2. Make sure build completed successfully
3. Navigate manually to: `android\app\build\outputs\apk\release\`

### APK Too Large

- This is normal for first build (includes all dependencies)
- Can be optimized later if needed

---

## 📝 Quick Checklist

- [ ] Click **"Build"** → **"Build Bundle(s) / APK(s)"** → **"Build APK(s)"**
- [ ] Wait for build to complete (2-5 minutes)
- [ ] Find notification: "APK(s) generated successfully"
- [ ] Click **"locate"** to find APK
- [ ] Transfer APK to phone and install

---

**You're almost there! Just build the APK and you're done!** 🚀
