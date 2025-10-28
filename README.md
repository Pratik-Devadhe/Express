# 🏡 AIRBNB Module 

This folder contains the **Airbnb Clone Project**, 
It is built using **Node.js**, **Express**, **EJS**, and **MongoDB** to simulate core Airbnb-like functionalities such as creating, editing, and displaying property listings.

---

## 📁 Folder Structure

```
Backend/
│
├── AIRBNB/
│   │
│   ├── init/
│   │
│   ├── module/
│   │   └── schema.js            # MongoDB schema for property data
│   │
│   ├── new/
│   │
│   ├── public/
│   │   └── css/
│   │       └── style.css        # Styling for the project
│   │
│   ├── views/
│   │   ├── layouts/
│   │   │   └── boilerplate.ejs  # Base layout template
│   │   ├── add.ejs              # Add new listing page
│   │   ├── edit.ejs             # Edit existing listing page
│   │   ├── index.ejs            # Main listings page
│   │   ├── show.ejs             # Display individual listing
│   │
│   ├── images/                  # Project screenshots (for documentation)
│   │   ├── listings.png
│   │   ├── edit.png
│   │   ├── new.png
│   │   └── delete.png
│   │
│   ├── ExpressError.js
│   ├── index.js                 # Entry point for the Airbnb server
│   ├── package.json
│   ├── package-lock.json
│   └── README.md

```

---

## ⚙️ Setup Instructions

### 1️⃣ Navigate into the folder
```bash
cd Backend/AIRBNB
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the project
```bash
node index.js
```

Server will run at **http://localhost:8000**

---

## 🧩 Features
- 🏠 View all property listings  
- ➕ Add new listings  
- ✏️ Edit and update existing properties  
- ❌ Delete listings  
- 💾 Uses MongoDB for data storage  
- 🎨 Styled using custom CSS  
- 🧱 EJS templates for dynamic views

---

## 🖼️ Project Screenshots

| View | Preview |
|------|----------|
| 🏠 **Listings Page** | ![Listings Page](./images/listings.png) |
| ➕ **Add New Listing** | ![Add New Listing](./images/new.png) |
| ✏️ **Edit Listing** | ![Edit Listing](./images/edit.png) |
| 📋 **Listing Information** | ![Delete Listing](./images/info.png) |

*(Ensure your image files are located in `Backend/AIRBNB/images/` folder.)*

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **EJS**
- **CSS**

---

## 📄 License
This project is open-source under the **MIT License**.

---

## 💡 Author
**Your Name**  
[GitHub Profile](https://github.com/<your-username>)
