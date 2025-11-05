# Setup Guide for Windows Users

If you're getting a `pnpm is not recognized` error, follow these steps to set up your project.

## Option 1: Install pnpm (Recommended)

### Step 1: Install Node.js (if not already installed)
1. Go to https://nodejs.org/
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the prompts
4. Restart your computer after installation

### Step 2: Install pnpm
Open PowerShell as Administrator and run:

```powershell
npm install -g pnpm
```

### Step 3: Verify Installation
```powershell
pnpm --version
```

You should see a version number (e.g., `8.0.0`).

### Step 4: Install Dependencies
Navigate to your project folder in VS Code terminal and run:

```powershell
pnpm install
```

### Step 5: Start Development Server
```powershell
pnpm dev
```

---

## Option 2: Use npm Instead (Alternative)

If you don't want to install pnpm, you can use npm instead:

### Step 1: Delete node_modules (if it exists)
```powershell
rmdir /s node_modules
```

### Step 2: Delete pnpm-lock.yaml
```powershell
del pnpm-lock.yaml
```

### Step 3: Install Dependencies with npm
```powershell
npm install
```

### Step 4: Start Development Server
```powershell
npm run dev
```

---

## Option 3: Use Yarn (Alternative)

### Step 1: Install Yarn
```powershell
npm install -g yarn
```

### Step 2: Delete pnpm-lock.yaml
```powershell
del pnpm-lock.yaml
```

### Step 3: Install Dependencies with Yarn
```powershell
yarn install
```

### Step 4: Start Development Server
```powershell
yarn dev
```

---

## Troubleshooting

### Still getting "pnpm is not recognized"?

1. **Close and reopen VS Code** - Sometimes the terminal needs to be refreshed
2. **Restart your computer** - This ensures environment variables are updated
3. **Use Command Prompt instead of PowerShell** - Open `cmd.exe` and try again
4. **Check npm is installed**: Run `npm --version`

### Port 3000 already in use?

If you see "Port 3000 is already in use", run:

```powershell
pnpm dev -- --port 3001
```

This will start the server on port 3001 instead.

### Module not found errors?

Make sure you've run `pnpm install` (or `npm install`) first. This downloads all dependencies.

---

## Quick Reference

| Command | What it does |
|---------|------------|
| `pnpm install` | Install all dependencies |
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Check code quality |

---

## Still Having Issues?

1. Make sure Node.js is installed: `node --version`
2. Make sure npm is installed: `npm --version`
3. Try deleting `node_modules` folder and `pnpm-lock.yaml`, then run `pnpm install` again
4. Try using **Option 2 (npm)** or **Option 3 (Yarn)** instead

Good luck! 🚀
