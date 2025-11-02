# Rock, Paper, Scissors Game

A classic Rock, Paper, Scissors game built as a solution to the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). This is an interactive web-based game with a modern UI and smooth animations.

![Rock Paper Scissors](design/original/desktop-step-1.jpg)

## 🎮 Features

- **Interactive Gameplay**: Play against the house (computer) in real-time
- **Score Tracking**: Your score persists during the session
- **Timer Animation**: Countdown timer while the house makes its selection
- **Game States**: Clear win/lose/draw states with visual feedback
- **Rules Modal**: Easily accessible game rules
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Enhanced user experience with CSS transitions

## 🚀 Getting Started

### Prerequisites

No special requirements needed! This is a vanilla JavaScript project that runs directly in the browser.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Umarcss/rock-paper-scissors.git
```

2. Navigate to the project directory:
```bash
cd rock-paper-scissors
```

3. Open `index.html` in your web browser:
   - Simply double-click the `index.html` file, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. Open your browser and navigate to `http://localhost:8000`

## 🎯 How to Play

1. Click on your choice: **Rock**, **Paper**, or **Scissors**
2. Wait for the house to make its selection (countdown timer will show)
3. See the result: **You win**, **You lose**, or **Draw**
4. Your score will update automatically
5. Click **Play again** to start a new round
6. Click **Rules** button to view the game rules anytime

### Game Rules

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**

If both players choose the same option, it's a **Draw**.

## 📁 Project Structure

```
rock-paper-scissors-master/
├── design/
│   ├── original/          # Original design mockups
│   │   ├── desktop-*.jpg  # Desktop views
│   │   └── mobile-*.jpg   # Mobile views
│   └── bonus/             # Bonus design mockups
├── images/                 # Game assets
│   ├── icon-*.svg        # Game icons
│   ├── logo.svg          # Game logo
│   ├── image-rules.svg   # Rules diagram
│   └── bg-*.svg          # Background patterns
├── index.html            # Main HTML file
├── style.css             # Stylesheet
├── script.js             # Game logic
└── README.md             # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox, animations, and responsive design
- **JavaScript (ES6+)**: Game logic and interactivity
- **Google Fonts**: Barlow Semi Condensed font family

## 🎨 Design

The design follows the Frontend Mentor challenge specifications:
- **Desktop**: Optimized for larger screens with proper spacing
- **Mobile**: Fully responsive with touch-friendly buttons
- **Color Scheme**: Uses the provided gradient background and color palette
- **Typography**: Barlow Semi Condensed font family

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔮 Future Enhancements

- [ ] Add bonus mode with Lizard and Spock
- [ ] Local storage for persistent score
- [ ] Sound effects
- [ ] Animation improvements
- [ ] Best of 3/5 game mode

## 📝 Notes

- Score resets when the page is refreshed
- Game uses random selection for the house's choice
- All designs are located in the `design/` folder for reference

## 🙏 Acknowledgments

- Challenge provided by [Frontend Mentor](https://www.frontendmentor.io)
- Design assets and specifications from Frontend Mentor

## 📄 License

This project is open source and available for learning purposes. The design is provided by Frontend Mentor.

---

**Have fun playing! 🎮**

