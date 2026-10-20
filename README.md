# MusicStream

MusicStream is a music streaming website, like a small Spotify. You can sign up, play songs, make playlists, like songs, search, and even download songs to listen without internet. It also works on your phone as an app.

I made this project to practice full stack web development with the MERN stack (MongoDB, Express, React and Node.js).

**Live link:** https://musicstream-jet.vercel.app/



## Screenshots

![Home](docs/screenshots/Home.png)
![Player](docs/screenshots/Admin.png)
![Search](docs/screenshots/Login.png)


## Features

**For users**
- Sign up with an email code (OTP), log in and log out
- Forgot password with a code sent to your email
- Music player that stays at the bottom while you move between pages
- Play, pause, next, previous, seek, volume, shuffle and repeat
- Queue, where you can change the order of songs
- Create playlists and add or remove songs
- Like songs and see them in Liked Songs
- Recently played songs on the home page
- Search for songs, artists and albums
- Download songs in two ways:
  - Download in the app, so you can play them without internet
  - Save to your phone or computer as a file
- Change your name and profile photo
- Install the website as an app on your phone or computer
- Works on mobile and desktop

**For the admin**
- Upload songs with audio and cover image
- Add, edit and delete artists, albums and songs
- Turn downloads on or off for each song

## Technologies Used

| Part | What I used |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS, React Router, Zustand |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| File storage | Cloudinary (songs and images) |
| Login | JWT in a cookie, bcryptjs for passwords |
| Checking input | Zod |
| Email | Brevo |

## How to Run It on Your Computer

You need Node.js (version 18 or newer), a free MongoDB Atlas account and a free Cloudinary account.

**1. Download the project and install**

```bash
git clone https://github.com/YOUR-USERNAME/musicstream.git
cd musicstream
npm install
npm run install:all
```

**2. Make the .env file**

```bash
cp server/.env.example server/.env
```

On Windows use `copy server\.env.example server\.env`.

Open `server/.env` and fill these values:

- `MONGODB_URI`: the connection link from MongoDB Atlas
- `JWT_SECRET`: any long random text (at least 32 characters)
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: from your Cloudinary dashboard

Keep `EMAIL_PROVIDER=console`. With this setting the email codes show in the server terminal, so you do not need a real email service while testing.

**3. Start the project**

```bash
npm run dev
```

- Website: http://localhost:5173
- Server: http://localhost:5000

## How to Use It

1. Open the website and sign up.
2. Look at the terminal where the server is running. Copy the 6-digit code and type it on the website.
3. To make your account an admin, open a new terminal and run:

```bash
cd server
npm run make-admin -- your-email@example.com
```

4. Log in again and open the Admin panel to upload songs.
5. Now you can play songs, make playlists, search and download.

You can also add sample songs with `npm run seed` inside the `server` folder. See `server/seed/tracks.example.json` for the format.

## Folder Structure

```
musicstream/
├── client/        React website
│   └── src/
│       ├── components/   small parts of the page (player, cards, menus)
│       ├── pages/        full pages (Home, Search, Library, Admin)
│       ├── store/        shared data (player, login, downloads)
│       ├── hooks/        reusable React hooks
│       └── lib/          helper code
├── server/        Express API
│   └── src/
│       ├── models/       MongoDB models (User, Song, Album, Artist, Playlist)
│       ├── controllers/  the main logic for each route
│       ├── routes/       API URLs
│       ├── middleware/   login check, uploads, rate limits
│       └── utils/        helper code (emails, codes, errors)
└── docs/          extra notes
```

## Security Things I Added

- Passwords are saved as hashes, never as plain text
- Login uses a cookie that JavaScript cannot read
- The server checks all input before using it
- Limits on how many times someone can try to log in or ask for a code
- Email codes expire after 10 minutes and stop working after 5 wrong tries



## What I Learned

- How login works with cookies and tokens
- How to upload files to Cloudinary from a Node server
- How to keep music playing while the user moves between pages
- How to use MongoDB with Mongoose
- How to read error messages and fix them step by step

## Things I Want to Add Later

- Tests for the code
- Make the Recently played list update right after a song plays
- Show cover images when offline
- Mobile apps for Play Store and App Store

## How I Built This

I used an AI assistant (Claude) to help write a lot of the code. I decided which features to build and how the website should look, set up MongoDB, Cloudinary and the email service, tested everything, fixed the errors, and put the project online. I wrote the Recently played feature myself.

## Author

**Dipak Hore**

[GitHub]https://github.com/dipakhore979 · [LinkedIn]https://www.linkedin.com/in/dipak-hore

## License

MIT License. This is a learning project and it is not connected to Spotify.
