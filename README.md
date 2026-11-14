# MusicStream 🎵

### Full-Stack Music Streaming Web Application

MusicStream is a responsive, full-stack music streaming application built with the MERN stack. It brings together music discovery, personalized libraries, playlist management, and a persistent audio player in a single web experience. An administration interface supports music catalog management.

**[Live Demo](https://musicstream-jet.vercel.app/)** · **[GitHub Profile](https://github.com/dipakhore-dev)**

## Project Preview

| Home | Admin Dashboard | Authentication |
| --- | --- | --- |
| ![MusicStream home screen](docs/screenshots/Home.png) | ![MusicStream admin dashboard](docs/screenshots/Admin.png) | ![MusicStream login screen](docs/screenshots/Login.png) |

## Key Features

**Music experience**
- Persistent audio player with play/pause, seeking, volume, shuffle, and repeat controls
- Track queue management, including reordering
- Search across songs, artists, and albums
- Recently played tracks and liked songs
- Custom playlists with track management
- In-app offline listening and optional audio file downloads, subject to track settings
- Responsive interface with Progressive Web App (PWA) support

**Accounts and personalization**
- Email OTP registration and password recovery
- JWT-based authentication using HTTP-only cookies
- Profile name and photo updates
- Personal music library and listening history

**Administration**
- Dedicated admin interface for music catalog management
- Upload audio tracks and cover artwork
- Create, update, and remove songs, albums, and artists
- Control download availability for individual tracks

## Technology Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS, React Router |
| State management | Zustand |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Media storage | Cloudinary |
| Authentication | JWT, bcryptjs, HTTP-only cookies |
| Validation | Zod |
| Email | Brevo |

## Architecture Overview

MusicStream separates its React client from an Express REST API. The frontend handles navigation, playback, and interactive user experiences. The backend manages authentication, application rules, music metadata, and administrative operations.

- **Client:** Component-based React interface, shared application state, and playback controls
- **API:** Express routes, controllers, middleware, and input validation
- **Persistence:** MongoDB collections managed through Mongoose models
- **Media:** Cloudinary-backed audio and image storage
- **Access control:** Authenticated sessions and role-based administrative operations

## Security Considerations

The application incorporates password hashing, HTTP-only authentication cookies, server-side input validation, request rate limiting, and expiring email verification codes with retry limits. Administrative actions are protected by authorization checks.

## Engineering Highlights

- Coordinated persistent audio playback across multiple application views
- Designed user and administrator workflows within one full-stack application
- Integrated third-party services for media management and email verification
- Implemented playlist, library, and listening-history features using React state and backend APIs
- Deployed a client-server application with a hosted database and media service

## Project Scope

MusicStream is an independently developed student portfolio project demonstrating full-stack web development, API integration, authentication, database design, and deployment. AI-assisted coding tools were used during development, alongside project planning, integration, testing, and debugging.

MusicStream is an independent project and is not affiliated with Spotify or any other music streaming service.

## Developer

**Dipak Hore**  
B.Tech Computer Science & Engineering (AI & ML) · Full-Stack Developer

[GitHub](https://github.com/dipakhore-dev) · [LinkedIn](https://www.linkedin.com/in/dipak-hore)

## License

This project is licensed under the [MIT License](LICENSE).
