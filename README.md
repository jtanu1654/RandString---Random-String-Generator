# RandString - Random String Generator

A modern, vibrant React application for generating secure random strings with a beautiful dark theme and indigo accents. Built with React, Tailwind CSS v4, and modern React hooks.

## ✨ Features

- **🎲 Random String Generation**: Creates secure random strings with customizable length
- **🎨 Vibrant Design**: Dark theme with indigo accents and yellow text highlights
- **📱 Responsive Layout**: Works perfectly on all devices and screen sizes
- **⚡ Real-time Updates**: Strings regenerate automatically when length changes
- **🎯 Modern UI**: Clean, professional interface with smooth animations
- **🔧 React Hooks**: Uses useState, useCallback, and useEffect for optimal performance

## ✨ Application Demo
See the application demo here [RandString](https://randstring.vercel.app/)


## 🛠️ React Hooks Implementation

### useState
- `randomString`: Stores the current generated random string
- `length`: Controls the length of the generated string (1-100)

### useCallback
- `generateRandomString`: Memoized function that generates random strings based on current length
- Prevents unnecessary re-renders and optimizes performance

### useEffect
- Automatically generates a new string when the component mounts
- Re-generates string when the length value changes

## 🎨 Design Features

### Color Scheme
- **Background**: Dark gray (#111827)
- **Card**: Medium gray (#1f2937)
- **Title**: Indigo (#818cf8)
- **Button**: Indigo (#4f46e5) with hover effects
- **Generated String**: Yellow (#fde047)
- **Input**: Dark gray (#374151)

### Interactive Elements
- **Hover Effects**: Button scales up and changes color on hover
- **Focus States**: Indigo ring effects on input and button
- **Smooth Transitions**: All elements have proper animations
- **Custom Scrollbar**: Indigo-themed scrollbar

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## 📖 Usage

1. **Set Length**: Use the number input to set the desired string length (1-100 characters)
2. **Generate**: Click "Generate New String" to create a new random string
3. **View Result**: The generated string appears in the yellow text area below

## 🛠️ Technologies Used

- **React 19**: Latest React with modern hooks
- **Tailwind CSS v4**: Utility-first CSS framework with PostCSS
- **Vite**: Fast build tool and development server
- **PostCSS**: CSS processing with autoprefixer

## 📁 Project Structure

```
random-string-generator/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Performance Optimizations
- **Memoized Functions**: useCallback prevents unnecessary re-renders
- **Efficient State Management**: useState for minimal re-renders
- **Automatic Generation**: useEffect handles string generation

### User Experience
- **Instant Feedback**: Immediate string generation
- **Visual Feedback**: Hover and focus states
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Proper focus states and keyboard navigation

### Security
- **Random Generation**: Uses Math.random() for string generation
- **Character Set**: Includes uppercase, lowercase, numbers, and symbols
- **Customizable Length**: 1-100 character range

## 📝 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React and Tailwind CSS**
