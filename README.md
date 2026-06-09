<div align="center">

# Ultraverse — NFT Marketplace

**A fully responsive NFT marketplace built with React, featuring live API data, real-time auction countdowns, and multi-page browsing.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://jay-internship.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github)](https://github.com/prod-slixk/jay-internship)
[![React](https://img.shields.io/badge/React-17-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

</div>

---

## Overview

Ultraverse is a multi-page NFT marketplace UI where users can browse curated collections, discover new listings, explore items with sort and filter controls, and view individual NFT details. Built with live API data, the app reflects real-time market content across all pages.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hot Collections, New Items, Top Sellers, Browse by Category |
| `/explore` | Explore — filterable NFT grid with price and popularity sorting |
| `/author` | Author profile with their listed works |
| `/item-details` | Full NFT detail view with metadata and purchase UI |

---

## Features

- Browse **Hot Collections** with verified author badges and live API data
- **Explore page** with sort controls — price low→high, high→low, most liked
- **Live countdown timers** on active auction listings
- **Buy Now** purchase flow UI on individual listings
- **Social sharing** via Facebook, Twitter, and email
- Persistent **Nav + Footer** across all pages
- Fully **responsive** — mobile-first layout at every breakpoint

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 17 |
| Language | JavaScript (ES6+) |
| Routing | React Router DOM v6 |
| Icons | React Icons v4 |
| Backend / Auth | Firebase 9 |
| Styling | CSS3 |
| Deployment | Vercel |

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/prod-slixk/jay-internship.git
cd jay-internship

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) — the app hot-reloads on save.

```bash
# Production build
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx                      # Global navigation bar
│   ├── Footer.jsx                   # Global footer
│   ├── explore/
│   │   └── ExploreItems.jsx         # Sort controls + NFT grid + countdown timers
│   └── home/
│       ├── HotCollections.jsx       # 4-item collection grid with author badges
│       ├── NewItems.jsx             # Newest listings grid
│       ├── TopSellers.jsx           # Leaderboard of top sellers
│       └── BrowseByCategory.jsx     # Category filter UI
├── pages/
│   ├── Home.jsx                     # Composes all home sections
│   ├── Explore.jsx                  # Explore page with filter wrapper
│   ├── Author.jsx                   # Author profile page
│   └── ItemDetails.jsx              # Individual NFT detail page
└── App.jsx                          # Router + layout shell
```

---

## License

MIT
