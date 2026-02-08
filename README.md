# Welcome to Mini LMS Mobile App using React Native Expo 👋

This is a mini login management system [Expo](https://expo.dev) project created using **SOLID Principles**

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find a option to open the app in [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo


## Features

 - User Authentication
	 - Registration
	 - Login
	 - Auto-login on app restart
	 - Logout
 - Profile Screen
	 - Profile information
	 - Update profile picture
	 - User statistics (courses enrolled, progress)
 - Course Catalog
	 - Course card
		 - Course thumbnail
		 - Course title & description
		 - Instructor name
		 - Bookmark
	 - Pull to refresh
	 - Search
 - Course Details
	 - Complete course information
	 - "Enroll" button with visual feedback
	 - Bookmark toggle with local storage
 - Notifications

## Technology Stack

 - API Base: https://api.freeapi.app/
 - Framework: React Native Expo
 - Language: TypeScript (strict mode enabled)
 - DevOps: Expo Application Services
 - MVVM (Model-View-ViewModel) architectural pattern
 - SOLID Principles
 - WebView - Bidirectional communication
 - State Management - Redux Toolkit
 - API Integration
	 - Axios
	 - Interceptors
	 - Redux AsyncThunk
 - Performance optimization
 - Native Features
	 - Notifications
	 - Network monitoring
	 - Custom modules
	 - Biometric auth
	 - Background tasks
 - Error Handling
	 - Boundaries
	 - Offline mode
	 - Retry mechanisms
 - Data Persistence: 
	 - Expo SecureStore (for sensitive data)
	 - AsyncStorage (for app data)
 - Navigation: Expo router
 - Styling: NativeWind (Tailwind for React Native)
 - Testing: Jest + React Native Testing Library
 - Error Tracking: Sentry
 - Analytics: Expo Analytics
 - Forms: React Hook Form	
 - Validation: Zod
 - Image Handling: Expo Image with caching
 - AI Integration: OpenAI SDK for recommendations & smart search
 - Advanced UI
	 - Reanimated
	 - Gestures
	 - Dark Mode
	 - Accessibility
 - Security
	 - Certificate pinning
	 - Encryption
	 - Jailbreak detection
