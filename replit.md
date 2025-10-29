# Project Overview

This is a Next.js website migrated from Vercel to Replit. The application is a corporate website showcasing manufacturing equipment and projects.

## Recent Changes

### October 29, 2025 - Vercel to Replit Migration
- Configured Next.js to bind to port 5000 with host 0.0.0.0 for Replit compatibility
- Updated package.json scripts (dev and start commands)
- Added allowedDevOrigins configuration to next.config.js for cross-origin requests
- Configured workflow to run Next.js development server
- Configured deployment settings for autoscale deployment
- Installed all dependencies with npm

## Project Architecture

### Technology Stack
- **Framework**: Next.js (latest version)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm

### Project Structure
- `/pages` - Next.js pages directory with page routes
- `/components` - React components
- `/public` - Static assets including images and PDF files
- `/styles` - Global CSS and module styles
- `/constants` - Application constants

### Configuration Files
- `next.config.js` - Next.js configuration with remote image patterns for Unsplash and Pexels
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

## Running the Project

### Development
The project runs automatically via the configured workflow. The development server is accessible at port 5000.

### Production Deployment
Deployment is configured for autoscale mode:
- Build command: `npm run build`
- Start command: `npm run start`

## Environment Variables
No environment variables are currently required for this project.

## User Preferences
No specific user preferences documented yet.
