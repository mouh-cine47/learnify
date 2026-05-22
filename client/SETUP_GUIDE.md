# Learnify - E-Learning Platform Frontend

A modern, fully responsive React.js front-end for an e-learning platform built with Vite, Tailwind CSS, React Router, and Lucide icons.

## Features

- ✅ **Home Page**: Hero section with featured courses carousel and categories grid
- ✅ **Courses Page**: Browse all courses with search and category filters
- ✅ **Course Detail Page**: Full course information with lesson list and enrollment
- ✅ **Dashboard**: Track enrolled courses, progress, and upcoming lessons
- ✅ **Profile Page**: User profile with learning statistics
- ✅ **Responsive Navigation**: Navbar with hamburger menu for mobile
- ✅ **Responsive Footer**: With links and contact information
- ✅ **Light/Dark Mode**: Theme toggle with localStorage persistence
- ✅ **Full Responsiveness**: Mobile, tablet, and desktop optimized
- ✅ **TailwindCSS Styling**: Modern, utility-first approach
- ✅ **Placeholder Data**: Pre-populated courses and user data

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with theme toggle
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── HeroSection.jsx       # Hero banner
│   │   ├── CourseCard.jsx        # Single course card component
│   │   ├── CategoryCard.jsx      # Category card component
│   │   ├── CoursesCarousel.jsx   # Swiper carousel for courses
│   │   ├── LessonItem.jsx        # Individual lesson with checkbox
│   │   └── ProgressBar.jsx       # Progress display component
│   ├── pages/
│   │   ├── HomePage.jsx          # Landing page
│   │   ├── CoursesPage.jsx       # All courses with filters
│   │   ├── CoursePage.jsx        # Single course detail
│   │   ├── DashboardPage.jsx     # User dashboard
│   │   └── ProfilePage.jsx       # User profile
│   ├── contexts/
│   │   └── ThemeContext.jsx      # Dark/Light mode context
│   ├── data/
│   │   └── placeholderData.js    # Mock data for courses/users
│   ├── App.jsx                   # Main app with routing
│   ├── App.css                   # Tailwind CSS imports
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies
└── index.html                    # HTML template
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

## Key Technologies

- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Swiper** - Touch carousel library
- **Lucide React** - Icon library
- **Axios** - HTTP client (pre-installed for future API calls)

## Pages & Components

### Home Page (`HomePage.jsx`)
- Hero section with CTA
- Featured courses carousel
- Categories grid with icons
- Call-to-action section

### Courses Page (`CoursesPage.jsx`)
- Search bar for course filtering
- Category filter buttons
- Responsive course grid
- Real-time filtering functionality

### Course Detail Page (`CoursePage.jsx`)
- Course image and information
- Instructor profile
- Course statistics (rating, price, students, lessons)
- Lesson list with completion tracking
- Enroll/unenroll functionality
- Progress bar

### Dashboard (`DashboardPage.jsx`)
- Learning statistics (courses enrolled, streak, hours)
- Enrolled courses with progress bars
- Upcoming lessons section
- Course progress tracking

### Profile Page (`ProfilePage.jsx`)
- User information display
- Learning statistics
- Settings and password change buttons
- Responsive layout

## Dark Mode Implementation

The theme system uses React Context API with localStorage persistence:
- Automatically saves theme preference
- Uses Tailwind's `dark:` prefix for dark mode styles
- Click the sun/moon icon in navbar to toggle

## Placeholder Data

The `placeholderData.js` file includes:
- 6 course categories
- 6 sample courses with full details
- 3 enrolled courses with progress
- 3 upcoming lessons

## Styling

- **Tailwind CSS** for all styling
- **Responsive breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Color scheme**: Blue primary, gray secondary
- **Reusable components** with consistent styling

## Features Details

### Search & Filter
- Real-time course search by title and description
- Category-based filtering
- Combined filter logic

### Progress Tracking
- Checkbox-based lesson completion
- Dynamic progress calculation
- Visual progress bar

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Optimized for all screen sizes
- Touch-friendly button sizes

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support

## Future Enhancements

- API integration with backend
- User authentication
- Real payment processing
- Comments and reviews system
- Video player integration
- Certificate generation
- Email notifications

## Customization

### Change Colors
Edit `tailwind.config.js` theme section

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

### Modify Placeholder Data
Edit `src/data/placeholderData.js`

## Performance Optimizations

- Code splitting with React Router
- Image optimization with Unsplash URLs
- Lazy loading with dynamic imports
- Efficient state management with Context API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this project for your learning platform
