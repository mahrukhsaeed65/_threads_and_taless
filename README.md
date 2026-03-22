# 🧶 Threads & Tales — Final Website Specification

## 🌸 Overview

Create a **modern, aesthetic, and minimal crochet business website** named **Threads & Tales**.

The design should feel:

* Soft
* Cozy
* Feminine
* Handmade / artisanal
* Inspired by Instagram/Pinterest brands

---

## 🎯 Core Requirements

* Fully static frontend (NO backend)
* Easy deployment on Vercel
* Mobile responsive
* Clean UI with soft animations
* Use real product images from `/assets/images/`
* Elegant typography and spacing

---

## 🛠 Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript (minimal, optional)
* Google Fonts

Deployment:

* Vercel (free)

Version control:

* GitHub

---

## 📁 Project Structure

```
threads-and-tales/
│
├── index.html
├── style.css
├── script.js (optional)
├── assets/
│   ├── images/
│   │   ├── product1.jpg
│   │   ├── product2.jpg
│   │   ├── product3.jpg
│   │
│   └── logo.png
│
└── README.md
```

---

## 🎨 Design System

### Color Palette

Use soft, warm tones:

* Background: #f8f5f2
* Primary: #6b4f4f (brown)
* Accent: #e8b4b8 (soft pink)
* Text: #333333
* Secondary text: #777777

### Typography

* Headings: Playfair Display (serif)
* Body: Poppins (sans-serif)

### Style Guidelines

* Rounded corners (15–25px)
* Soft shadows
* Generous spacing
* Smooth hover animations
* Minimalist layout

---

## 🧱 Website Sections

### 1. Header / Navbar

* Centered brand name: “Threads & Tales”
* Transparent or minimal style
* Sticky on scroll (optional)

---

### 2. Hero Section

**Full screen section with background image**

Contents:

* Brand name (large elegant font)
* Tagline:
  *“Handmade crochet pieces crafted with love 🧶”*
* CTA button: “Shop Now”

Design:

* Background image from assets
* Dark overlay for readability
* Centered content

---

### 3. Products Section

Title: “Our Collection”

Layout:

* Responsive grid (auto-fit columns)
* Card-based design

Each product card must include:

* Product image
* Product name
* Price (PKR)
* “Order Now” button (scrolls to form)

### Example Products

* Rose Crochet Bag
* Mini Bear Pin
* Crochet Flowers

---

### 4. About Section

Title: “Our Story”

Content:
Short paragraph describing handmade crochet brand:

> Threads & Tales is a handmade crochet brand where every piece is crafted with care, patience, and creativity. Each product tells a soft, cozy story.

Centered layout with limited width.

---

### 5. Order Section (IMPORTANT)

Title: “Place Your Order 💌”

## ✅ Order System (NO BACKEND)

### Option 1: Embedded Form (Primary)

Use iframe to embed a form created via Google Forms.

Form fields should include:

* Name
* Phone Number
* Product Name
* Quantity
* Address

### Implementation:

* Embed using iframe
* Rounded corners + shadow styling

---

### Option 2: WhatsApp (Fallback)

Add button:

* “Order via WhatsApp”

Link format:

```
https://wa.me/92XXXXXXXXXX?text=I want to order [Product Name]
```

---

### Option 3: Email (Optional)

```
mailto:your@email.com
```

---

## ✨ UI/UX Enhancements

* Hover lift effect on product cards
* Smooth scrolling for anchor links
* Button hover transitions
* Clean spacing between sections
* Mobile-first responsiveness

---

## 📱 Responsiveness

Must work on:

* Mobile phones (priority)
* Tablets
* Desktop

Use:

* Flexbox / Grid
* Auto-fit columns

---

## ⚙️ Functional Behavior

* “Shop Now” scrolls to product section
* “Order Now” scrolls to order form
* WhatsApp button opens chat
* Form is embedded and functional

---

## 🚀 Deployment Instructions

1. Push code to GitHub
2. Import repo into Vercel
3. Deploy with default settings
4. Website goes live

---

## 🔮 Future Enhancements (Optional)

* Category filters (bags, pins, etc.)
* Add-to-cart system
* Instagram feed integration
* Custom domain

---

## 💖 Brand Identity

**Threads & Tales**
Handmade crochet products crafted with love, warmth, and creativity.

---

## 👩‍💻 Author

Mahrukh 🌸
