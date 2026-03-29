# Cricket IPL 2026 - Full Stack Application

A web application about cricket featuring the full IPL 2026 schedule, built with **Java Spring Boot** (backend) and **React** (frontend).

## Features

- **About Cricket** - Overview of cricket history, formats, and the IPL
- **IPL 2026 Full Schedule** - All 74 matches with team filter, venues, and stage info
- **Tomorrow's Match** - Click "Submit" to fetch the next day's IPL schedule from the backend API

## Tech Stack

| Layer    | Technology                  |
|----------|-----------------------------|
| Backend  | Java 17, Spring Boot 3.2.3  |
| Frontend | React 18, Axios             |
| API      | REST (JSON)                 |

## Running the Application

### Prerequisites
- Java 17+ (`brew install openjdk@17`)
- Maven (`brew install maven`)
- Node.js 18+ and npm

### Backend (port 8080)

```bash
cd backend
export JAVA_HOME=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home
mvn clean package -DskipTests
java -jar target/ipl-schedule-1.0.0.jar
```

### Frontend (port 3000)

```bash
cd frontend
npm install
npm start
```

Then open http://localhost:3000 in your browser.

## API Endpoints

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/api/schedule`           | Full IPL 2026 schedule          |
| GET    | `/api/schedule/tomorrow`  | Matches scheduled for tomorrow  |
| GET    | `/api/schedule/date/{date}` | Matches for a specific date (YYYY-MM-DD) |
