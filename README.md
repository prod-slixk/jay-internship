# Ultraverse — NFT Marketplace

A responsive NFT marketplace UI built with React. Browse hot collections, discover new listings, explore items by price or popularity, and view individual NFT details — all backed by live API data.

**[Live Demo](https://jay-internship.vercel.app) · [GitHub](https://github.com/prod-slixk/jay-internship)**

---

## Features

- **Home page** — Hot Collections carousel, New Items grid, Top Sellers leaderboard, and Browse by Category section
- **Explore page** — Filter and sort NFTs by price (low → high, high → low) or most liked; 8-item responsive grid
- **Author profile page** — Individual creator pages with their listed works
- **Item Details page** — Full NFT detail view with metadata
- **Countdown timers** — Live auction countdowns on active listings
- **Buy Now** — Purchase flow UI on individual listings
- **Social sharing** — Share items via Facebook, Twitter, and email
- **Verified author badges** — Visual trust indicators on collection cards
- **Fully responsive** — Mobile-first layout across all screen sizes

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
| Build Tool | Create React App |

---

## Pages

```
/              → Home (Hot Collections, New Items, Top Sellers, Browse by Category)
/explore       → Explore (filter grid with sort controls)
/author        → Author profile
/item-details  → NFT detail view
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/prod-slixk/jay-internship.git
cd jay-internship

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Outputs an optimized production bundle to the `build/` folder.

---

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── explore/
│   │   └── ExploreItems.jsx     # Filter select + NFT grid + countdown timers
│   └── home/
│       ├── HotCollections.jsx   # 4-item collection grid with author badges
│       ├── NewItems.jsx
│       ├── TopSellers.jsx
│       └── BrowseByCategory.jsx
├── pages/
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Author.jsx
│   └── ItemDetails.jsx
└── App.jsx                      # Router setup
```

---

## License

MIT
