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
│   └── index.js        # Main server file
└── frontend/           # Frontend-related code
```

---

## 📍 Milestone 4: User Model and File Uploads

### 👤 User Model
- Designed a **schema** for storing **user data**.

### 🛠️ User Controller
- Managed **user data interactions** with the database.

### 📂 File Uploads
- Configured **Multer** for handling **file uploads**.

### 📌 GitHub Updates
- Committed changes for **user model** and **file uploads**.

---

## 📍 Milestone 5: Sign-Up Page and Form Validation

### 📝 Sign-Up Page
- Developed a **user-friendly registration page** for new users.

### ✅ Form Validation
- Implemented **input validation** to ensure **data accuracy**.

### 📌 GitHub Updates
- Updated the repository with the **sign-up page** implementation.

---

## 📍 Milestone 6: Password Encryption and User Data Storage

### 🔐 Password Encryption
- Used **bcrypt** to securely **hash user passwords**.

### 💾 User Data Storage
- Stored **encrypted user data** securely in the database.

### 📌 GitHub Updates
- Committed changes related to **password encryption**.

---

## 📍 Milestone 7: User Login Endpoint and Credential Validation

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

## 📍 Milestone 8: Card Component Creation and Homepage Layout

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

## 📍 Milestone 9: Product Form Creation and Image Uploads

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

## 📍 Milestone 10: Product Schema and API Endpoint Creation

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

## 📍 Milestone 11: Fetching and Displaying Products

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
    └── ...
```

---

## 📍 Milestone 12: My Products Page with User-Specific Product Display

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

## 📍 Milestone 13: Product Update Endpoint and Form Auto-fill

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

---

## 📍 Milestone 14: Product Delete Endpoint

### 🗑️ DELETE Endpoint
- Created an API route to remove a product from **MongoDB** by its ID.

### 🖥️ Frontend Integration
- Added a **"Delete" button** to product cards, triggering product removal.

### ⚠️ Confirmation Prompt
- Implemented a **confirmation dialog** to prevent accidental deletions.

### 🗄️ Data Removal
- Ensured product deletion updates both **frontend and database**.

### 🛠️ Testing
- Verified API response in **Postman** and tested the frontend delete flow.

### 📌 GitHub Updates
- Committed changes for **backend deletion logic and UI updates**.

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
    └── ...
```

---

## 📍 Milestone 15: Navigation Component

### 🧭 Navigation Component
- Created a reusable Nav component with links to "Home," "My Products," "Add Product," and "Cart" pages.

### 📱 Responsive Design
- Made the Nav component responsive to different screen sizes using Tailwind CSS.

### 🔗 Page Integration
- Integrated the Nav component into all pages of the application, providing consistent navigation.

### 🚀 Smooth Navigation
- Ensured smooth transitions between pages using React Router.

### 🛠️ Testing
- Verified the navigation functionality and responsiveness across different devices.

### 📌 GitHub Updates
- Committed all changes related to the Nav component and its integration to the repository.

---

## 📍 Milestone 16: Product Details Page

### 📄 Product Details Page
- Created a new page to display detailed information about individual products.

### 🔄 Dynamic Data
- Implemented dynamic rendering of product details based on the selected product.

### 🛒 Quantity and Add to Cart
- Added quantity selection and "Add to Cart" functionality to the product details page.

### 🛠️ Testing
- Verified the product details page functionality and data display.

### 📌 GitHub Updates
- Committed all changes related to the product details page to the repository.

```

project-root/
├── frontend/ (vite-project)
│   ├── node_modules/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Signup.jsx
│   │   │   │   └── GoogleAuth.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Navigation.jsx
│   │   │   ├── products/
│   │   │   │   ├── ProductCard.jsx
│   │   │   │   ├── ProductDetails.jsx
│   │   │   │   ├── AddProduct.jsx
│   │   │   │   └── UpdateProduct.jsx
│   │   │   ├── cart/
│   │   │   │   └── Cart.jsx
│   │   │   ├── user/
│   │   │   │   └── ProfilePage.jsx
│   │   │   ├── common/
│   │   │   │   └── HeroSection.jsx
│   │   │   └── pages/
│   │   │       ├── HomePage.jsx
│   │   │       └── MyProducts.jsx
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/
│   ├── node_modules/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   └── user.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── upload.middleware.js
│   ├── models/
│   │   ├── product.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   └── user.routes.js
│   ├── uploads/
│   │   └── products/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── .gitignore
└── README.md

```

# 🛒 Milestone 17: Cart Functionality Implementation  

## 🔹 Cart Schema Design  
- Modified user schema to store cart products with necessary product details and quantities.  

## 🔹 Cart Storage Endpoint  
- **Created:** POST endpoint to handle product details reception and persistent cart storage in the database.  

## 🔹 Data Validation  
- Implemented checks for **product availability** and **valid quantities** before cart updates.  

## 🔹 🧪 Testing  
- Verified **cart item persistence** and **user-specific cart isolation**.  

## 🔹 📂 GitHub Updates  
- **Committed** schema modifications and endpoint implementation to the repository.  

---

# 🛍️ Milestone 18: Cart Data Retrieval System  

## 🔹 Cart Data Endpoint  
- **Developed:** GET endpoint to fetch all cart products using the authenticated user's email.  

## 🔹 Product Population  
- Implemented **product data population** from a separate collection for complete cart information.  

## 🔹 🔒 Security Checks  
- Added **authentication middleware** to ensure **user-specific cart access**.  

## 🔹 🧪 Testing  
- Validated **endpoint response structure** and **data accuracy**.  

## 🔹 📂 GitHub Updates  
- **Pushed** cart retrieval endpoint implementation.  

---


# 🛒 Milestone 19: Cart Management Interface

## ✅ Cart Page Implementation
- 📌 **Created frontend cart page** with dynamic product display using fetched cart data.

## 🔢 Quantity Controls
- ➕➖ **Added interactive +/- buttons** for real-time quantity adjustment per product.

## 🔄 Quantity Update Endpoints
- 🏗️ **Built PUT endpoints** for increment/decrement operations with inventory checks.

## 💰 Live Price Calculation
- 💵 **Implemented frontend total calculation** based on quantity changes.

## 🚀 Sync Optimization
- ⏳ **Added debouncing** to quantity update API calls for efficiency.

## 🛠️ Testing
- ✅ **Verified quantity synchronization** between frontend and database.

## 🔄 GitHub Updates
- 📂 **Committed cart page components** and quantity management endpoints.

---

# 🚀 Milestone 20: User Profile and Data Management  

## 🖥️ Backend Endpoint for User Data  
- ✅ Created a backend endpoint to **send all user data via email**.  

## 🎨 Frontend Profile Page  
- ✅ Developed a **frontend profile page** to display user data.  

## 👤 Profile Information Display  
- 📸 Displayed **profile photo, name, and email** in one section.  
- 🏡 Displayed **address information** in another section with an **"Add address"** button.  

## 📍 Address Handling  
- 🚫 Displayed **"No address found"** if no addresses are available.  

## 🔗 Navigation  
- 🔄 Implemented navigation to the **address form page** when "Add address" is clicked.  

## 🛠️ Testing  
- ✅ Verified **the display of user data** and **navigation functionality**.  

## 📌 GitHub Updates  
- ✅ Committed **backend endpoint** and **frontend profile page components**. 🎉  

---

# 🚀 Milestone 21: Address Form Integration

## 🏗️ Address Form Frontend Page  
- ✅ **Created** a frontend form to input address details.  

## 📋 Address Fields  
- 🏳️ **Country**  
- 🏙️ **City**  
- 🏡 **Address1**  
- 🏠 **Address2**  
- 🔢 **Zip Code**  
- 🏷️ **Address Type**  

## 🛠️ State Management  
- 🗂️ Implemented state to **store input address data**.  

## 🔄 Navigation Integration  
- 🔗 Enabled navigation from the **Profile Page** to the **Address Form Page** upon clicking **"Add Address"**.  

## ✅ Testing  
- 🧪 Verified **form functionality** and **state management**.  

## 🔗 GitHub Updates  
- 📌 Committed **address form components** and **state management logic**.  

---

# 🚀 Milestone 22: Address Storage Endpoint  

## 🔧 Backend Endpoint for Address Storage  
- 📡 Developed a **backend endpoint** to store address data in the user profile.  

## 🗄️ Database Integration  
- 💾 Added **address data** to the `address` array within the **user collection** in the database.  

## ✅ Testing  
- 🧪 Verified **address storage functionality** and **database updates**.  

## 🔗 GitHub Updates  
- 📌 Committed **backend endpoint for address storage**.  

---

# 🎯 Milestone 23: Place Order and Select Address  

## 🛍️ Place Order Button  
* 🏁 **Added a "Place Order" button** inside the cart page.  
* 🔀 **Navigates to the select address page** when clicked.  

## 📍 Select Address Page  
* 🏠 **Created a select address page** displaying all available addresses.  
* ✅ **Provided an option to select one address** for delivery.  

## 🔗 Backend Endpoint for Addresses  
* 🌐 **Developed a backend endpoint** to retrieve all addresses associated with the user.  
* 🔒 **Ensured the endpoint is secure** and only accessible by authenticated users.  

## 🛠️ Testing  
* ✅ Verified **navigation and address selection functionality**.  

## 🚀 GitHub Updates  
* 📌 Committed the **place order button, select address page, and backend endpoint**.  

----

# 🚀 Milestone 24: Order Confirmation  

## 📦 Order Confirmation Page  
* 🛍️ Displayed all products being ordered.  
* 🏠 Showed the selected delivery address.  
* 💰 Displayed the total value of the cart.  

## 🔘 Place Order Button  
* ✅ Included a **"Place Order"** button at the bottom of the confirmation page.  

## 🛠️ Testing  
* 🔍 Verified the order confirmation page functionality.  

## 📂 GitHub Updates  
* 📌 Committed the order confirmation page and related components.  

---

# 🚀 Milestone 25: Place Order Endpoint Implementation  

## 🛒 Backend Endpoint  
* Created a **POST** endpoint to receive product details, user information, and the selected delivery address.  

## 👤 User Identification  
* Retrieved the user's **_id** from the database using their email address.  

## 📝 Order Creation  
* For each product in the cart, a separate order is created and stored in the **MongoDB orders collection**, associated with the user and delivery address.  

## 💾 Data Persistence  
* Ensured that all order details are correctly saved to the **MongoDB database** using the order schema.  

## 🛠️ Testing  
* Verified the endpoint functionality using **Postman** to simulate order placement.  

## 🔄 GitHub Updates  
* ✅ Committed the **place order** endpoint implementation to the repository.  

---

# 📦 Milestone 26: Retrieve User Orders Endpoint  

## 🛒 Backend Endpoint  
* Created a **GET** endpoint to retrieve all orders associated with a specific user.  

## 👤 User Identification  
* Received the user's **email** and retrieved their **_id** from the database.  

## 📂 Order Retrieval  
* Fetched all orders from the **MongoDB orders collection** that match the user's **_id**.  

## 📤 Data Delivery  
* Sent all the **user's orders** in the response.  

## 🛠️ Testing  
* Verified the endpoint functionality using **Postman** to retrieve orders for a specific user.  

## 🔄 GitHub Updates  
* ✅ Committed the **retrieve user orders** endpoint implementation to the repository.  

---

# 📦 Milestone 27: My Orders Page

## 🚀 Frontend Page
* Created a **"My Orders"** page to display all orders placed by the user.

## 🔄 Data Fetching
* Implemented a **GET request** to the `"my-orders"` endpoint.
* Sent the **user's email** to retrieve their orders.

## 🎨 Dynamic Display
* Displayed **all user orders** on the page dynamically.

## 🗺️ Navigation
* Added a **link** to the "My Orders" page in the **navigation bar** for easy access.

## ✅ Testing
* Verified the **display of user orders** on the "My Orders" page.

## 📝 GitHub Updates
* **Committed** the "My Orders" page and **navigation updates** to the repository.
 
---

# ❌ Milestone 28: Cancel Order Functionality

## 🎨 Frontend Integration
* Added a **"Cancel Order"** button to each order displayed on the **"My Orders"** page.
* **Excluded** the button for orders that are already canceled.

## 🖥️ Backend Endpoint
* Created an **endpoint** to receive the **order ID**.

## 🔄 Order Status Update
* Retrieved the **order using the provided ID**.
* Updated the **order status** to `"canceled"`.
* Saved the **changes to the database**.

## 🎭 Conditional Rendering
* Implemented **logic** to **hide the "Cancel Order" button** if the order is already canceled.

## ✅ Testing
* Verified the **cancel order functionality** by:
  * Testing the **button click event**.
  * Confirming the **status update in the database**.

## 📝 GitHub Updates
* **Committed** the **cancel order functionality** and **endpoint implementation** to the repository.

---

# 💳 Milestone 29: Payment Method Selection and Razorpay Integration

## 🛒 Payment Options
* Added **radio buttons** on the **order confirmation page** to allow users to select between:
  * 🏠 **Cash on Delivery (COD)**
  * 💻 **Online Payment**

## ⚡ Razorpay Integration
* When the **"Online Payment"** option is selected, **Razorpay payment buttons** are displayed.

## 🔧 Razorpay Setup
* **Created a Razorpay account** and obtained the **necessary API keys**.
* Saved the **Razorpay Client ID** for integration.

## ✅ Testing
* Verified that the **Razorpay payment buttons** are displayed correctly when the **"Online Payment"** option is selected.

## 📝 GitHub Updates
* **Committed** the **payment method selection** and **Razorpay button display logic** to the repository.


---

# 💰 Milestone 30: Razorpay Payment Integration

## ⚡ Razorpay Integration
* Implemented **online payment** using the **Razorpay API** with the **client key** created earlier.

## 📦 NPM Package
* Installed the **Razorpay NPM package** to provide a **component** displaying available **online payment methods**.

## 🔄 Payment Processing
* Handled the **payment processing logic** when a user chooses to pay via **Razorpay**.

## ✅ Testing
* Verified that the **Razorpay payment** is processing **correctly**.

## 📝 GitHub Updates
* **Committed** the **Razorpay payment integration** and related **components** to the repository.

---

# 🌍 Milestone 31: Global State Management with Redux

## 📦 NPM Package Installation
* Installed **react-redux** to manage global state.

## 🏗 Store Setup
* Created a **store folder** with:
  - **store.js** → Configured the Redux store.
  - **userActions.js** → Defined actions for managing user state.
* Configured a **Redux store** in `store.js` with a `userReducer` function to handle the **global email state**.

## 🔄 State Management
* Created a `setEmail` function inside `userActions.js` to **update the global email state**.

## 🔗 Provider Setup
* Wrapped the **App component** inside the `Provider` component in `index.js` and passed the **store** as a prop.

## ✅ Outcome
* Successfully implemented **global state management** using **Redux** in the application.
* Improved **state handling efficiency** across components.

## 📝 GitHub Updates
* **Committed** the Redux store setup, user actions, and `Provider` implementation to the repository.

---

# 🔐 Milestone 32: Using Redux for Authentication State

## 🚀 Dispatch in Login Page
* Implemented the **dispatch method** in the **login page** to store the **user's email** in the global state.

## 🌍 Accessing Global State
* Used `useSelector` to **access the stored email** across all relevant pages.

## ✅ Testing
* Verified that the **email is correctly stored and accessed** across different pages.

## 📝 GitHub Updates
* **Committed** the Redux authentication state management changes to the repository.
