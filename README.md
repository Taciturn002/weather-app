# React + Vite

# 🌦️ Weather Forecast App

A sleek and responsive React-based Weather App that fetches real-time weather data using the WeatherAPI. Designed to showcase frontend skills using modern tools like React, Tailwind CSS, and React Context API.

---

## 📌 Features

- 🔍 Search weather by city name
- ☁️ Real-time weather info (temperature, condition, wind, humidity, etc.)
- 📱 Fully responsive design (mobile-friendly)
- 🎨 Styled with Tailwind CSS & weather icons
- ⚙️ Clean React structure with Context API for state management

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **WeatherAPI.com**
- **React Icons**
- **Context API**

---



---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Taciturn002/weather-app.git
cd weather-app

### 2. Install dependencies
bash
Copy
Edit
npm install
### 3. Run the app
bash
Copy
Edit
npm run dev
###4. API Key Setup
Sign up at WeatherAPI.com and get your free API key.
Replace in your WeatherApi.jsx:
js
Copy
Edit
const url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${searchCity}`;
```
📂 Folder Structure
css
Copy
Edit
├── public
├── src
│   ├── component
│   │   ├── Input.jsx
│   │   ├── SearchButton.jsx
│   │   ├── Data.jsx
│   │   └── WeatherApi.jsx
│   ├── context
│   │   └── ContextApi.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css

🙋‍♂️ Author
Sujit Pawar
Feel free to connect and explore more of my projects!



