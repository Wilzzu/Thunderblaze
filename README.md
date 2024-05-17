![Banner](https://i.imgur.com/fwfJ0KU.png)

<h1 align="center">Thunderblaze</h1>
<p align="center">React website built for a private Discord server, featuring Discord authentication, access to private YouTube videos, member statistics, feedback submission, and more.</p>

## Demo Site

This is a demo version of the website, where users can override their user session to experience the site as different roles without logging in or being a member of the Discord server. Use the "Demo menu" button at the bottom of the page to switch roles:

[Thunderblaze.wilzzu.dev](https://thunderblaze.wilzzu.dev/)

## Features

- **Home Page**: General information about the Discord server and mentions of the website's features.
- **Videos Page**: Shows server's YouTube videos. Logged-in members of the Discord server can watch private videos.
- **Statistics Page**: Provides group members statistics. Displays the top 3 members in a podium format.
- **Feedback Page**: Allows members to send feedback to the moderation team. Only moderators can view the feedback messages.
- **Profile Page**: Shows logged-in user's information and allows them to link their social accounts.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, Redux, Framer Motion
- **Backend**: Node.js, Express, Discord.js
- **Database**: MongoDB
- **Authentication**: Supabase

## Setup and Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/Wilzzu/Thunderblaze.git
   cd Thunderblaze
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Configure environment variables:**
   Rename the `.env.example` file to `.env` and fill in the values:

| Variable              | Description                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| `PORT`                | The port where the backend server will run, e.g., `3000`.                                             |
| `MONGOUSER`           | MongoDB database username found in `Database Access` section of your project.                         |
| `MONGOPASS`           | MongoDB database password found in `Database Access` section of your project.                         |
| `DISCORD_TOKEN`       | Bot token found in `Bot` > `Token` in your Discord Developer Portal application.                      |
| `DISCORD_GUILD_ID`    | The ID of your Discord server.                                                                        |
| `YTAPI`               | Youtube API key found in `APIs & Services` > `Credentials` in Google Cloud Console.                   |
| `YTCHANNELID`         | The ID of your YouTube channel playlist. (Channel ID with `UC` replaced with `UU`)                    |
| `YTPRIVATEID`         | The ID of your private YouTube playlist.                                                              |
| `STEAM_API_KEY`       | Steam API key found in [https://steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey) |
| `VITE_SUPAAPI`        | Anon key found in `Project Settings` > `API` > `Project API keys` in your Supabase project.           |
| `VITE_SUPAURL`        | URL found in `Project Settings` > `API` > `Project URL` in your Supabase project.                     |
| `VITE_WEBSITEADDRESS` | The URL where your frontend is hosted, e.g., `https://thunderblaze.wilzzu.dev/`.                      |
| `SESSION_SECRET`      | A random string used to sign sessions.                                                                |

4.  **Run the application:**

    ```
    # Start the backend server and Discord bot
    npm run server

    # Start the frontend development server
    npm run dev
    ```

5.  **(Optional): Integrate with [botBob](https://github.com/Wilzzu/botBob)**

      To enable timeout tracking, you can integrate the website with [botBob](https://github.com/Wilzzu/botBob), a public Discord bot I've developed. This bot allows users to be timed out via a voting system and then record these timeouts in a database. Make sure [botBob](https://github.com/Wilzzu/botBob) is set up and connected to the same MongoDB database used for this project. Follow the setup instructions provided in the [repository for botBob](https://github.com/Wilzzu/botBob).

## Discord Bot Commands

- `!website`, `!homepage`, `!www` - Provides link to the website's homepage.
- `!stats`, `!statistics` - Provides link to the statistics page.
- `!video`, `!videos` - Provides link to the videos page.
- `!feedback` - Provides link to the feedback page.

## API Endpoints

- `GET /api/feedback` - Retrieve all feedback.
- `POST /api/feedback` - Submit feedback.
- `DELETE /api/feedback/:id` - Delete feedback by ID.
- `GET /api/stats/discord/timeouts` - Retrieve Discord timeout amounts for all members.
- `GET /api/stats/discord/messages` - Retrieve Discord message amounts for all members.
- `POST /api/stats/discord/messages` - Add Discord message amounts for members.
- `GET /api/discord/members` - Retrieve Discord members from cache.
- `GET /api/discord/members/:refresh` - Force refresh Discord members.
- `GET /api/discord/voicemembers` - Retrieve members in voice channels.
- `GET /api/discord/validateimg` - Validate a Discord profile picture.
- `GET /api/steam/:id` - Initiate Steam login.
- `GET /api/steam/authenticate/:id` - Callback for Steam login.
- `GET /api/lichess/:id` - Initiate Lichess login.
- `GET /api/lichess/callback/:id` - Callback for Lichess login.
- `GET /api/videos/public` - Retrieve public YouTube videos.
- `GET /api/videos/private` - Retrieve private YouTube videos.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
