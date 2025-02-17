# Ecommerce-Follow-Along

# 🛒 E-Commerce Application (MERN Stack)

## 📌 Project Description
This project is a **full-fledged E-Commerce Application** built using the **MERN stack** (**MongoDB, Express.js, React.js, and Node.js**). It provides hands-on experience with real-world development concepts, focusing on building a **scalable** and **feature-rich** online shopping platform.

## 🚀 Key Features
- **MERN Stack**: Built using **MongoDB, Express.js, React.js, and Node.js**.
- **REST API Development**: Created for scalable **backend services**.
- **User Authentication**: Implemented secure **login and registration**.
- **Database Schema Design**: Structured data storage using **MongoDB**.
- **Robust Backend Development**: Developed using **Node.js and Express**.

---

## 📍 Milestone 1: Project Overview

### 🔹 Introduction to MERN Stack
- Overview of **MongoDB, Express.js, React.js, and Node.js**.
- Benefits of using MERN for a **modern web application**.

### 🔹 REST API Structure
- Planned endpoints for **user authentication** and **product management**.

### 🔹 Database Schema Basics
- Explored **MongoDB schema design** for structured data storage.

### 🔹 Authentication Role
- Understood the importance of **secure login and user authentication**.

### 🔹 Project Vision
- Defined **key features**, **goals**, and **scalability aspects**.

### 🔹 Live Demo
- Showcased the **initial functionality** of the application.

---

## 📍 Milestone 2: Project Setup and Login Page

### 🗂️ Folder Structure
- Organized **frontend and backend directories** for modularity.

### ⚛️ React Setup
- Initialized the **React application** for the frontend.

### 🌐 Node.js Setup
- Configured a simple **Node.js server** for backend operations.

### 🎨 Tailwind CSS Integration
- Implemented **responsive styling** using **Tailwind CSS**.

### 🔑 Login Page
- Developed a **responsive login interface** with validation.

### 📌 GitHub Updates
- Committed all changes to the **repository**.

---

## 📍 Milestone 3: Project Setup for Backend

### 🏗️ Backend Structure
- Organized **routes, controllers, models, and middleware** for maintainability.

### 🌍 Server Setup
- Configured a **Node.js server** with **Express.js**.

### 🗄️ Database Connection
- Integrated **MongoDB** for **data storage**.

### ⚠️ Error Handling
- Implemented **basic error handling** for better debugging.

### 📌 GitHub Updates
- Committed **backend structure setup** to the repository.


### Project Structure:
```
project-root/
├── backend/
│   ├── controllers/    # Contains route handling logic
│   ├── database/       # Stores database configuration
│   ├── models/         # Defines MongoDB schemas using Mongoose
│   ├── routes/         # Defines API routes
│   └── index..js       # Main server file
└── frontend/           # Frontend-related code
```

---

## Milestone 4: User Model and File Uploads

### 👤 User Model
- Designed a **schema** for storing **user data**.

### 🛠️ User Controller
- Managed **user data interactions** with the database.

### 📂 File Uploads
- Configured **Multer** for handling **file uploads**.

### 📌 GitHub Updates
- Committed changes for **user model** and **file uploads**.

---

## Milestone 5: Sign-Up Page and Form Validation

### 📝 Sign-Up Page
- Developed a **user-friendly registration page** for new users.

### ✅ Form Validation
- Implemented **input validation** to ensure **data accuracy**.

### 📌 GitHub Updates
- Updated the repository with the **sign-up page** implementation.

---

## Milestone 6: Password Encryption and User Data Storage

### 🔐 Password Encryption
- Used **bcrypt** to securely **hash user passwords**.

### 💾 User Data Storage
- Stored **encrypted user data** securely in the database.

### 📌 GitHub Updates
- Committed changes related to **password encryption**.

---

## Milestone 7: User Login Endpoint and Credential Validation

### 🔑 Login Endpoint
- Created a **backend endpoint** for user authentication.

### 📂 User Data Retrieval
- Implemented logic to **fetch user records** based on credentials.

### 🔍 Password Validation
- Securely **compared hashed passwords** for authentication.

### ✅ Authentication Response
- Provided appropriate **feedback** based on login success or failure.

### 🔒 Security Measures
- Implemented **protections** against **common security threats**.

### 🛠️ Testing
- Verified **login functionality** using Postman and frontend testing.

### 📌 GitHub Updates
- Updated repository with **login endpoint and authentication logic**.

---

## Milestone 8: Card Component Creation and Homepage Layout

### 📦 Card Component
- Developed a **reusable** and **dynamic product card component**.

### 🔄 Dynamic Rendering
- Used **mapping functions** to display products dynamically.

### 🎨 Homepage Layout
- Designed a **responsive** and **structured grid layout**.

### 🚀 User Experience
- Improved **browsing and interaction** for a seamless experience.

### 🛠️ Testing
- Verified **card rendering** and **layout consistency**.

### 📌 GitHub Updates
- Committed changes for **card component and homepage layout**.

---

## Milestone 9: Product Form Creation and Image Uploads

### 📝 Product Form
- Designed a **detailed form** for adding product information.

### 🖼️ Multiple Image Uploads
- Enabled users to **upload multiple images** for a product.

### ✅ Form Validation
- Implemented **input validation** to prevent incorrect submissions.

### 🔐 Admin Access
- Discussed **role-based access control** for product uploads.

### 🛠️ Testing
- Verified **form functionality** and **image upload process**.

### 📌 GitHub Updates
- Updated repository with **product form and image upload feature**.


### Project Structure:
```
vite-project/
├── node_modules/           # Dependencies
├── public/                 # Public assets
│   ├── favicon.ico
│   └── index.html          # Main HTML file
├── src/                    # Main source code
│   ├── assets/             # Static assets like images, fonts, etc.
│   ├── components/         # Reusable UI components
│   │   ├── AddProduct.jsx
│   │   ├── Footer.jsx
│   │   ├── GoogleAuth.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HomePage.jsx
│   │   ├── Login.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── Signup.jsx
│   │   └── ...
│   ├── styles/             # CSS or Tailwind styles
│   │   └── ...
│   ├── App.jsx             # Root component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global CSS file
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration
├── package-lock.json       # Dependency lock file
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # TailwindCSS configuration
└── vite.config.js          # Vite configuration
```

---

## Milestone 10: Product Schema and API Endpoint Creation

### 🛠️ Product Schema
- Defined the **product data structure** using **Mongoose**.

### 🌐 API Endpoint
- Created a **POST** endpoint to handle product data submission.

### ✅ Data Validation
- Ensured that only **valid product data** is saved in the database.

### 🔍 Testing
- Verified the **endpoint functionality** using **Postman**.

### 🚀 Future Enhancements
- Discussed **admin restrictions** and **user roles** for product management.

### 📌 GitHub Updates
- Committed changes related to **product schema** and **endpoint creation**.

---

## Milestone 11: Fetching and Displaying Products

### 🌐 Backend API
- Developed a **GET** endpoint to retrieve all product data from **MongoDB**.

### 🔄 Frontend Data Fetching
- Implemented a function to **fetch product data** from the backend.

### 🎨 Dynamic Display
- Passed the **fetched data** to the `ProductCard` component for rendering.

### 🏗️ Component Reusability
- Utilized `ProductCard` to efficiently display **multiple products**.

### 🔗 Understanding Data Flow
- Ensured smooth **API integration** for seamless communication between **backend and frontend**.

### 📌 GitHub Updates
- Committed all changes related to **API integration** and **product display**.


### Project Structure:
````
vite-project/
├── node_modules/           # Dependencies
├── public/                 # Public assets
│   ├── favicon.ico
│   └── index.html          # Main HTML file
├── src/                    # Main source code
│   ├── assets/             # Static assets like images, fonts, etc.
│   ├── components/         # Reusable UI components
│   │   ├── AddProduct.jsx
│   │   ├── Footer.jsx
│   │   ├── GoogleAuth.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HomePage.jsx
│   │   ├── Login.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── Signup.jsx
│   │   └── ...
│   ├── styles/             # CSS or Tailwind styles
│   │   └── ...
│   ├── App.jsx             # Root component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global CSS file
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration
├── package-lock.json       # Dependency lock file
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # TailwindCSS configuration
└── vite.config.js          # Vite configuration

backend/
├── node_modules/           # Dependencies
├── controllers/            # Controller files
│   ├── product.controller.js
│   ├── user.controller.js
│   └── ...
├── models/                 # Mongoose models
│   ├── product.model.js
│   ├── user.model.js
│   └── ...
├── routes/                 # Route files
│   ├── product.routes.js
│   ├── user.routes.js
│   └── ...
├── .gitignore              # Git ignore file
├── package-lock.json       # Dependency lock file
├── package.json            # Project dependencies and scripts
├── server.js               # Entry point for the backend server
└── config/                 # Configuration files
    ├── db.js               # Database connection configuration
    └── ....
````

---

## Milestone 12: My Products Page with User-Specific Product Display

### 🌐 Endpoint Creation
- Developed a `GET` endpoint to fetch all products associated with the logged-in user.

### 🖥️ Frontend Integration
- Retrieved user-specific product data from the backend and displayed it dynamically.

### 📌 Dynamic Display
- Utilized **ProductCard** to present a personalized view of each user’s products.

### 🔍 Data Filtering
- Implemented backend filtering to ensure only user-specific products are displayed.

### ✅ Testing
- Verified the functionality using **browser tools** and **Postman**.

### 🚀 Future Enhancements
- Considering options for **editing** or **deleting** products directly from the "My Products" page.

### 📌 GitHub Updates
- Committed all changes related to **user-specific product display** to the repository.
- Updated the **README.md** with feature details and usage instructions.

---

## Milestone 13: Product Update Endpoint and Form Auto-fill

### 🔄 Update Endpoint
- Developed a `PUT` endpoint to receive updated product data and modify the corresponding document in MongoDB.

### 🖥️ Frontend Integration
- Added an **"Edit"** button to each product card.
- Clicking the button pre-fills the product form with existing data for seamless editing.

### 📝 Form Auto-fill
- Implemented functionality to populate the product form with the selected product's details.
- Enables easy modification without manually re-entering information.

### 💾 Data Persistence
- Ensured that updated product data is correctly saved to the MongoDB database.

### ✅ Testing
- Verified the update functionality using **Postman** and tested the edit flow in the application.

### 📌 GitHub Updates
- Committed all changes related to the update endpoint and form auto-fill to the repository.
- Updated the **README.md** to document the new feature and usage instructions.


-------------

## 📍 Milestone 14: Product Delete Endpoint  
- **DELETE Endpoint**: Created an API route to remove a product from **MongoDB** by its ID.  
- **Frontend Integration**: Added a **"Delete" button** to product cards, triggering product removal.  
- **Confirmation Prompt**: Implemented a **confirmation dialog** to prevent accidental deletions.  
- **Data Removal**: Ensured product deletion updates both **frontend and database**.  
- **Testing**: Verified API response in **Postman** and tested the frontend delete flow.  
- **GitHub Updates**: Committed changes for **backend deletion logic and UI updates**.  

### Project Structure:

```
vite-project/
├── node_modules/           # Dependencies
├── public/                 # Public assets
│   ├── favicon.ico
│   └── index.html          # Main HTML file
├── src/                    # Main source code
│   ├── assets/             # Static assets like images, fonts, etc.
│   ├── components/         # Reusable UI components
│   │   ├── AddProduct.jsx
│   │   ├── Footer.jsx
│   │   ├── GoogleAuth.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HomePage.jsx
│   │   ├── Login.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── Signup.jsx
│   │   └── …
│   ├── styles/             # CSS or Tailwind styles
│   │   └── …
│   ├── App.jsx             # Root component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global CSS file
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration
├── package-lock.json       # Dependency lock file
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # TailwindCSS configuration
└── vite.config.js          # Vite configuration

backend/
├── node_modules/           # Dependencies
├── controllers/            # Controller files
│   ├── product.controller.js
│   ├── user.controller.js
│   └── …
├── models/                 # Mongoose models
│   ├── product.model.js
│   ├── user.model.js
│   └── …
├── routes/                 # Route files
│   ├── product.routes.js
│   ├── user.routes.js
│   └── …
├── .gitignore              # Git ignore file
├── package-lock.json       # Dependency lock file
├── package.json            # Project dependencies and scripts
├── server.js               # Entry point for the backend server
└── config/                 # Configuration files
    ├── db.js               # Database connection configuration
    └── … 

```

### Milestone 15: Navigation Component :

**Navigation Component**: Created a reusable Nav component with links to "Home," "My Products," "Add Product," and "Cart" pages.

**Responsive Design**: Made the Nav component responsive to different screen sizes using Tailwind CSS.

**Page Integration**: Integrated the Nav component into all pages of the application, providing consistent navigation.

**Smooth Navigation**   : Ensured smooth transitions between pages using React Router.

**Testing**: Verified the navigation functionality and responsiveness across different devices.

**GitHub Updates**: Committed all changes related to the Nav component and its integration to the repository.