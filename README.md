<<<<<<< HEAD
# 🚀 CampusLaunch

**Your Ultimate First-Year Student Success Platform**  
Built by **Shreya Sahi**, First-Year CS & AI Student at Newton School of Technology, Pune.

---

## 🌟 What Is CampusLaunch?

CampusLaunch is a complete student opportunity and skill-building platform designed for first-year college students. It helps you:

- **Discover hackathons** across India and online (with filters, bookmarks, and detailed views)
- **Follow a structured First-Year Roadmap** across 4 progressive stages with task tracking
- **Find verified free learning resources** from Harvard, MIT, Google, Mozilla, and more
- **Get a personalized weekly action plan** with a 5-question onboarding quiz
- **Prepare for hackathons** with guides, templates, checklists, and pitch frameworks
- **Connect with your campus community** and discover workshops, programs, and teammates

---

## 🗂️ Project Structure

```
Portfolio/
├── index.html          # Main HTML shell (all 8 pages, navigation, modals)
├── css/
│   └── style.css       # Complete design system (dark/light mode, animations)
├── js/
│   ├── data.js         # Curated data store (hackathons, roadmap, resources)
│   ├── app.js          # App controller (navigation, state, filters, bookmarks)
│   └── render.js       # Page rendering functions (home, hackathons, roadmap…)
└── README.md           # This file
```

---

## 🚀 Running the Project

### Option 1: Python (recommended, no install needed)
```bash
cd /Users/shreyasahi/Portfolio
python3 -m http.server 8080
```
Then open: **http://localhost:8080**

### Option 2: Node.js `http-server`
```bash
cd /Users/shreyasahi/Portfolio
npx http-server -p 8080 --cors
```

### Option 3: VS Code Live Server
Install the **Live Server** extension in VS Code, then right-click `index.html` → "Open with Live Server".

---

## ✨ Features Overview

| Feature | Status | Notes |
|---|---|---|
| Hackathon Discovery Hub | ✅ Fully working | 8 demo hackathons with filters, search, modals |
| Bookmarking / Save | ✅ Fully working | Persists in localStorage |
| Dark/Light Mode Toggle | ✅ Fully working | Persists across sessions |
| Global Search (⌘K) | ✅ Fully working | Searches hackathons, resources, tasks |
| First-Year Roadmap | ✅ Fully working | 4 stages, 20 tasks, progress tracking |
| Learning Resources Library | ✅ Fully working | 15 free resources, search + category filter |
| Weekly Plan Onboarding | ✅ Fully working | 5-question quiz → personalized 7-day plan |
| Hackathon Toolkit | ✅ Fully working | 5 guides + 3 worksheets/templates |
| Community & Events | ✅ Fully working | 5 verified opportunities |
| Submit Opportunity Form | ✅ Fully working | Client-side validation, no server needed |
| Add to Google Calendar | ✅ Fully working | Opens Google Calendar with event pre-filled |
| Responsive Design | ✅ Fully working | Mobile, tablet, and desktop |

---

## 📋 Data Transparency

> **All hackathon listings are sample demo data** structured to represent the format used by real platforms (Devfolio, Unstop, MLH, SIH).

- Every card shows a **"📋 Demo Data"** badge
- A prominent notice is shown on all hackathon pages
- Links point to real official organizer websites (Devfolio, Unstop, SIH.gov.in, etc.)
- **Always verify dates, prizes, and deadlines on official portals before registering**

---

## 🔌 How to Add Real Hackathons

### Method 1: Edit `js/data.js` manually
Open `js/data.js` and add a new object to the `hackathons` array:
```javascript
{
  id: "hack-your-unique-id",
  name: "Hackathon Name",
  organizer: "Organizer",
  format: "Online",           // "Online" | "In-Person" | "Hybrid"
  location: "Global / City",
  startDate: "2027-01-15",    // YYYY-MM-DD
  endDate: "2027-01-17",
  deadline: "2026-12-30",     // Registration deadline
  prizePool: "₹50,000",
  eligibility: "...",
  beginnerFriendly: true,
  domains: ["AI/ML", "Web Development"],
  skills: ["Python", "JavaScript"],
  teamSize: "2-4 members",
  cost: "Free",
  officialLink: "https://...",
  lastVerified: "2026-10-27",
  isVerified: true,
  isDemo: false,              // Set to false for real data
  description: "...",
  schedule: [],
  submissionChecklist: []
}
```

### Method 2: Future API Integration
The `data.js` file is structured to be a drop-in replacement for a real API response. To connect a live API:
1. Replace the `CAMPUS_LAUNCH_DATA` object with an `async fetchData()` function
2. Fetch from Devfolio GraphQL API, Unstop API, or your own Supabase table
3. Call `renderPage()` after data loads

---

## 🗄️ Adding a Backend (Supabase)

To add user accounts, persistent data, and real-time updates:

1. Create a free project at [supabase.com](https://supabase.com)
2. Create tables: `hackathons`, `resources`, `user_saves`, `user_progress`
3. Add the Supabase JS client:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```
4. Initialize with your project URL and anon key (safe to expose in frontend):
```javascript
const supabase = window.supabase.createClient('YOUR_PROJECT_URL', 'YOUR_ANON_KEY');
```
5. **Never commit service role keys to Git**

---

## 🚢 Deploying to Vercel

1. Push your portfolio folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Framework preset: **Other** (static site)
4. Click Deploy — Vercel handles the rest

Your site will be live at `your-project.vercel.app` within 60 seconds.

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Structure | HTML5 (Semantic) | SEO-friendly, accessible |
| Styling | Vanilla CSS | Zero dependencies, full control |
| Logic | Vanilla JavaScript | No build step, runs anywhere |
| Storage | localStorage | No backend needed for MVP |
| Fonts | Google Fonts (Inter + JetBrains Mono) | Premium typography |

---

## 🔮 Future Roadmap

- [ ] Supabase auth (Google / GitHub OAuth)
- [ ] Devfolio API integration for live hackathon feed
- [ ] Admin dashboard for verifying submissions
- [ ] Push notifications for registration deadlines
- [ ] AI-powered resource recommendations
- [ ] Peer teammate matching for hackathon squads

---

## 📄 License

MIT License — Free to use, fork, and build upon. Created by Shreya Sahi.
=======
# campuslaunch
>>>>>>> b608484504580c50b11b4f3c75597cbf2ef3bc88
