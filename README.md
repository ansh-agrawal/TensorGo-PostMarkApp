---

# 📬 TensorGo PostMarkApp

A microservices-based platform for managing and sending communications using Postmark, with Google OAuth authentication.

---

## 🏗️ System Architecture

The platform is built using a microservices architecture with the following services:

- **Authentication Service**: Manages Google OAuth login.
- **Email Service**: Integrates with Postmark for email sending and analytics.
- **Frontend Service**: React-based user interface for managing communications.

---

## ⚙️ Installation

### 🔧 Prerequisites

- Node.js >= 16.x  
- npm or yarn  
- React >= 18.x  
- Docker (optional for deployment)  
- Postmark API key  

---

## 📥 Clone the Repository

```bash
git clone https://github.com/Deepak9011/TensorGo-PostMarkApp.git  
cd TensorGo-PostMarkApp
```

---

## 🛠️ Backend Setup

1. Navigate to the backend folder:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add the following:

    ```env
    GOOGLE_CLIENT_ID=<your_google_client_id>  
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>  
    POSTMARK_API_KEY=<your_postmark_api_key>  
    JWT_SECRET=<your_jwt_secret>
    SERVER_URL=http://localhost:5000
    ```

4. Start the backend:

    ```bash
    npm start
    ```

---

## 🎨 Frontend Setup

1. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add the following:

    ```env
    REACT_APP_GOOGLE_CLIENT_ID=<your_google_client_id>  
    REACT_APP_API_BASE_URL=http://localhost:5000
    SERVER_URL=http://localhost:5000
    ```

4. Start the frontend:

    ```bash
    npm start
    ```

---

## 🚀 Usage

1. Navigate to the frontend URL (e.g., `http://localhost:3000`)
2. Log in using Google OAuth.
3. View communication history and analytics.
4. Compose and send emails using Postmark templates.

---

## 🔌 API Endpoints

### Authentication

- `POST /auth/google`: Initiates Google OAuth login.
- `GET /auth/google/callback`: Handles the callback and issues JWT.

### Communication

- `GET /api/communication-history`: Fetches communication history.
- `POST /api/send-email`: Sends email using Postmark templates.

---

## ✅ Testing

### Backend

```bash
npm test
```

### Frontend

```bash
npm test
```

---
