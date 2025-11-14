# 📝 How to Add a New Letter

Quick guide to add a new company and their apology letter to the game.

---

## Step 1: Upload Logo 🖼️

Add the company logo to:
```
src/assets/images/logo/your-company.png
```

**Format:** PNG recommended, square aspect ratio works best

---

## Step 2: Upload Letter Image 📸

Add the screenshot of the X post to:
```
src/assets/images/letters/your-company.png
```

**Format:** PNG recommended, screenshot of the original tweet

---

## Step 3: Add Company to `companies.js` 🏢

**File:** `src/data/companies.js`

1. Import the logo at the top
2. Add a new entry to the `COMPANIES` object with:
   - Unique ID
   - Company name  
   - Logo reference

---

## Step 4: Add Letter to `letters.js` ✍️

**File:** `src/data/letters.js`

1. Import the letter image at the top
2. Add a new letter object to the `letters` array with:
   - Unique ID
   - Company reference (from `COMPANIES` object)
   - `quizText` array (censored letter text, each paragraph as a string)
   - `revealImage` (letter screenshot)
   - `tweetUrl` (link to X post)
   - `projectUrl` (company website)
   - `decoyCompanies` array (2 similar companies from `COMPANIES`)

**Important:** Replace company name with `???` in the quiz text!

---

## That's It! 🎉

The new letter will automatically appear in the game rotation.

Each game randomly picks 7 letters, so your new letter will show up in future playthroughs!

