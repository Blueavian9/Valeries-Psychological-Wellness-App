import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="container max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            React Migration Test
          </h1>
          <p className="text-xl text-muted-foreground">
            Testing Button, Card, and Badge components
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Button Component</CardTitle>
            <CardDescription>
              Testing all button variants from the original HTML/CSS
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primary Button</Button>
              <Button variant="primary">Primary Indigo</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badge Component</CardTitle>
            <CardDescription>
              Platform badges matching original design
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Best Overall Provider</Badge>
              <Badge variant="secondary">Most User-Friendly</Badge>
              <Badge variant="accent">Best for Holistic CBT</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          ✅ Button component migrated successfully!
          <br />
          Next: Migrate Header, Footer, and Hero sections
        </div>
      </div>
    </div>
  )
}

export default App
