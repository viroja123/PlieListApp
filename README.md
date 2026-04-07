# 📱 PlieListApp

A React Native application built using **React Native CLI** with clean architecture, Redux state management, and API integration.

---

# 🚀 Getting Started

## 📦 Install Dependencies

```bash
npm install
```

---

## ▶️ Run the App

### Start Metro Bundler

```bash
npm run start
```

### Run on Android

```bash
npm run android
```

### Run on iOS

```bash
npm run ios
```

---

## 🧪 Other Scripts

```bash
npm run lint    # Run ESLint
npm run test    # Run tests using Jest
```

---

# 📱 App Flow

## 🔐 Login Screen

* User enters email and password
* API call is made using Axios
* On success:

  * User data stored in Redux
  * Navigates to Bottom Tabs

---

## 🧭 Bottom Tab Navigation

After login, the user is redirected to a Bottom Tab Navigator with the following screens:

### 🏠 Events Screen

* Fetch event list from API
* Display using FlatList
* Each event card shows:

  * Image
  * Title
  * Date
  * Location
* Users can mark events as favorites ❤️

### 🔍 Search Screen

* Search events by name
* Real-time filtering
* Supports favorite toggle

### ❤️ Favorites Screen

* Displays selected favorite events
* Managed using Redux
* Users can remove items from favorites

### 👤 Profile Screen

* Displays logged-in user name
* User icon (avatar style)
* Logout functionality

---

# 🧠 State Management

* Implemented using **Redux Toolkit**
* Handles:

  * Authentication (login/logout)
  * Event data
  * Favorites list

---

# 💾 Storage

* Uses **react-native-mmkv**
* Provides:

  * Fast storage
  * Encrypted data handling
* Used for secure and persistent storage

---

# 🌐 API Integration

* Implemented using **Axios**
* Separate API layer for scalability

### APIs Used:

* Login API
* Event List API

---

# 🎯 Key Features

* Clean and scalable architecture
* Reusable components (Event Card)
* Favorites management using Redux
* Secure storage using MMKV
* API integration using Axios
* Responsive UI

---

# 🛠 Tech Stack

* React Native CLI
* Redux Toolkit
* Axios
* MMKV Storage
* React Navigation

---

# 📌 Notes

* Built based on provided Figma design
* Focus on clean code and scalability
* Modular structure for easy maintenance

---

# 🙌 Author

**Ankit Viroja**
