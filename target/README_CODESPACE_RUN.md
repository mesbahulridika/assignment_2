# Codespace Run Guide

## 🚀 Getting Started with Codespaces

### Opening Your Codespace

1. **If you already have a Codespace instance:**
   - Click **Code** → **Codespaces** tab
   - Click on your existing Codespace to open it
   
   <img src="docs/images/open-codespace.png" width="350">

2. **Creating a new Codespace:**
   - Click **Code** button
   
   <img src="docs/images/create-codespace.png" width="350">
   
   - Then click **Codespaces** → **+ (New with options...)**
   
   <img src="docs/images/create-codespace-with-options.png" width="350">
   
   - Select **4-core** machine type (recommended for better performance)
   
   <img src="docs/images/create-codespace-with-options-4-core.png" width="350">
   
   - Click **Create codespace** button to start
   
   <img src="docs/images/create-codespace-with-options-4-core-create-codespace-button.png" width="350">

> ⏳ **Wait 2-3 minutes** for the Codespace to initialize. The devcontainer will automatically install all dependencies.

---

## Start Both Servers

### 🔵 **Terminal 1 - Backend**

**🔹 Step 1:** Navigate to backend directory (from root folder)

```bash
cd backend
```

> **Note**: This command changes your current directory to the `backend` folder where the Spring Boot application is located.

![Navigate to Backend Directory](docs/images/cd-backend.png)

> ⚠️ **Disclaimer**: If you are already in the `backend` folder, skip Step 1 and proceed directly to Step 2.

**🔹 Step 2:** Run Spring Boot application

```bash
mvn spring-boot:run
```

> **Note**: This command uses Maven to compile and start the Spring Boot server. The backend will run on port 8080.

![Run Backend Command](docs/images/run-backend.png)

**🔹 Step 3:** Expected Output:

![Backend Terminal Running](docs/images/run-backend-output.png)

> Wait until you see "Started DemoApplication" in the terminal.

**🔹 Step 4:** Opening Backend in Browser:

![Open Backend Browser Button](docs/images/run-backend-open-browser-button.png)

> Click the open in browser button to open the backend application in a new tab.

---

### 🔵 **Terminal 2 - Frontend**

**🔹 Step 1:** Navigate to frontend directory (from root folder)

```bash
cd frontend
```

> **Note**: This command changes your current directory to the `frontend` folder where the React application is located.

![Navigate to Frontend Directory](docs/images/cd-frontend.png)

> ⚠️ **Disclaimer**: If you are already in the `frontend` folder, skip Step 1 and proceed directly to Step 2.

**🔹 Step 2:** Run Vite development server

```bash
npm run dev
```

> **Note**: This command starts the Vite development server with hot module replacement (HMR). The frontend will run on port 3000.

![Run Frontend Command](docs/images/run-frontend.png)

**🔹 Step 3:** Expected Output:

![Frontend Terminal Running](docs/images/run-frontend-output.png)

> Wait until you see "Local: http://localhost:3000" in the terminal.
> The frontend should display: "Backend says: Hello Advance OOP Lab Students"

**🔹 Step 4:** Opening Frontend in Browser:

![Open Frontend Browser Button](docs/images/run-frontend-open-browser-button.png)

> Click the open in browser button to open the frontend application in a new tab.

---

## Access Application

### In GitHub Codespaces:

**🔹 Ports Tab:**

![Ports Tab in Codespaces](docs/images/ports-tab.png)

1. Go to the **PORTS** tab in VS Code
2. Frontend (React) (3000) - Access the frontend react application locally
3. Backend (Spring Boot) (8080) - Access the backend react application locally

### In Local Environment:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080

> **Note**: In Codespaces, the URLs will be auto-generated forwarded URLs (e.g., `https://xyz-3000.app.github.dev`) instead of `localhost`.

**Examples in the screenshots:**

- Frontend (React) (3000): `https://refactored-rotary-phone-qjv446g69gxh9rgq-3000.app.github.dev/`
- Backend (Spring Boot) (8080): `https://refactored-rotary-phone-qjv446g69gxh9rgq-8080.app.github.dev/`

