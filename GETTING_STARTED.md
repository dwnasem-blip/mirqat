# MIRQAT - Getting Started

## Project Setup Complete ✅

This is the foundation of the MIRQAT Islamic mobile platform. Phase 1 includes the complete project structure, design system, and UI framework.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
# Web development
npm run web

# iOS development (Mac only)
npm run ios

# Android development
npm run android
```

### 3. Run Tests
```bash
# Type checking
npx tsc --noEmit

# Run tests (when implemented)
npm test
```

## Project Structure

```
app/              - UI screens and layouts
src/              - Reusable components, hooks, constants
locales/          - Language files (Arabic, English)
assets/           - Images, fonts, icons
__tests__/        - Test files
```

## Available Scripts

- `npm run web` - Start web development server
- `npm run ios` - Build and run iOS app
- `npm run android` - Build and run Android app
- `npm test` - Run test suite
- `npx tsc --noEmit` - TypeScript type checking

## Key Features Implemented

✅ **Design System**
- Professional color palette (emerald green, gold, ivory)
- Complete typography system
- 8-point spacing grid
- Dark mode support

✅ **Internationalization**
- Arabic (RTL) and English support
- 160+ translated strings
- Automatic language detection

✅ **Navigation**
- 7-tab bottom navigation
- Expo Router setup
- Auth flow screens
- RTL support

✅ **Components**
- Reusable Button, Card, ThemedText
- Fully themed and customizable
- TypeScript support

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Available variables:
- `EXPO_PUBLIC_SUPABASE_URL` - Supabase project URL (Phase 2)
- `EXPO_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key (Phase 2)
- `EXPO_PUBLIC_APP_ENVIRONMENT` - development | staging | production

## Next Phase

Phase 2 will implement:
- Supabase database integration
- User authentication
- Quran data from trusted sources
- Backend services

## Support

For issues or questions about the project structure, refer to:
- Design System: `src/constants/`
- Components: `src/components/`
- Hooks: `src/hooks/`
- Screens: `app/(tabs)/`, `app/screens/`

---

**Status:** Phase 1 Complete - Ready for Phase 2 Database Integration
