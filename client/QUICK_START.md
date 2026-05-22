# Learnify Frontend - Quick Start Guide

## 📦 Installation (One Command)

```bash
cd client && npm install
```

## 🚀 Start Development Server

```bash
npm run dev
```

Open browser → `http://localhost:5173`

## 📁 Project Structure Created

```
src/
├── components/          (7 reusable components)
│   ├── Navbar.jsx       - Navigation with theme toggle
│   ├── Footer.jsx       - Footer with links
│   ├── HeroSection.jsx  - Hero banner
│   ├── CourseCard.jsx   - Course display
│   ├── CategoryCard.jsx - Category display
│   ├── CoursesCarousel.jsx - Scrollable carousel
│   ├── LessonItem.jsx   - Lesson with checkbox
│   └── ProgressBar.jsx  - Progress visualization
├── pages/               (5 full pages)
│   ├── HomePage.jsx     - Landing page
│   ├── CoursesPage.jsx  - Course browser
│   ├── CoursePage.jsx   - Course details
│   ├── DashboardPage.jsx - User dashboard
│   └── ProfilePage.jsx  - User profile
├── contexts/
│   └── ThemeContext.jsx - Dark/Light mode
├── data/
│   └── placeholderData.js - Mock data
├── App.jsx              - Main router setup
└── Tailwind CSS files   - (CSS, config, PostCSS)
```

## ✨ Features Implemented

- ✅ Hero section with featured courses
- ✅ Responsive navbar with hamburger menu
- ✅ Course search & filtering
- ✅ Interactive course carousel
- ✅ Lesson tracking with checkboxes
- ✅ Progress bars
- ✅ Dark/Light mode toggle
- ✅ Fully responsive design
- ✅ Placeholder data included
- ✅ React Router v7 setup
- ✅ Tailwind CSS styling
- ✅ Lucide React icons

## 🔗 Navigation Routes

| Route | Page |
|-------|------|
| `/` | Home Page |
| `/courses` | All Courses |
| `/course/:id` | Course Details |
| `/dashboard` | Dashboard |
| `/profile` | Profile |

## 🎨 Theme Toggle

Click the sun/moon icon in the navbar to switch between light and dark modes. Preference is saved automatically.

## 📊 Placeholder Data

The project includes pre-populated data:
- 6 course categories
- 6 sample courses
- 3 enrolled courses with progress
- 3 upcoming lessons
- User profile information

## 🛠️ Build for Production

```bash
npm run build
npm run preview
```

## 📝 Next Steps

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Explore the platform
4. Customize placeholder data in `src/data/placeholderData.js`
5. Connect backend API by replacing data fetching logic
6. Add authentication
7. Deploy to your hosting platform

## 🎯 Ready to Use

All components are:
- ✅ Copy-paste ready
- ✅ Fully functional
- ✅ Responsive
- ✅ Dark mode compatible
- ✅ No additional setup needed

Start learning! 🚀
