# Therapy Platform React Migration

React + Vite migration of Valerie's Psychological Wellness website.

## 🚀 Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app.

## ✅ What's Done

- ✅ React + Vite project setup
- ✅ Tailwind CSS configured
- ✅ shadcn/ui-style components (Button, Card, Badge)
- ✅ Path aliases (@/ for src/)
- ✅ Project structure

## 📦 Components Available

### UI Components
- `Button` - Primary, secondary, outline variants
- `Card` - With Header, Title, Description, Content, Footer
- `Badge` - Platform badges

### Usage Example

```jsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Click me</Button>
        <Badge variant="default">Badge</Badge>
      </CardContent>
    </Card>
  )
}
```

## 🎯 Next Steps

1. Migrate Header/Navigation component
2. Migrate Footer component
3. Migrate Hero section with slideshow
4. Migrate remaining sections

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── layout/      # Header, Footer, Layout
│   ├── sections/    # Page sections
│   └── features/    # Feature components
├── hooks/           # Custom hooks
├── store/           # Zustand stores
├── data/            # Static data
└── lib/             # Utilities
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **lucide-react** - Icons
- **zustand** - State management
- **react-router-dom** - Routing

## 📝 Migration Progress

See `../migration/MIGRATION_STATUS.md` for detailed progress.

---

**Status:** Foundation complete ✅ | Ready for component migration 🚀
