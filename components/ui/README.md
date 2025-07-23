# Counter Components Documentation

## Overview

Two reusable components for displaying animated statistics and counters:

- `Counter`: Individual animated counter
- `StatsSection`: Organized collection of counters with styling

## Counter Component

### Props

- `end` (number): Target number to count to
- `duration` (number, optional): Animation duration in milliseconds (default: 2000)
- `suffix` (string, optional): Text to append after the number (e.g., "+", "%")
- `prefix` (string, optional): Text to prepend before the number (e.g., "₦", "$")
- `className` (string, optional): CSS classes for the number
- `label` (string): Label text below the counter
- `labelClassName` (string, optional): CSS classes for the label

### Features

- ✅ Intersection Observer for scroll-triggered animation
- ✅ Smooth easing animation
- ✅ One-time animation (won't re-trigger)
- ✅ Number formatting with commas
- ✅ Customizable styling

### Usage

```tsx
import Counter from "@/components/ui/Counter";

<Counter
  end={500}
  suffix="+"
  label="Students"
  className="text-blue-600"
  labelClassName="text-gray-700"
  duration={2500}
/>;
```

## StatsSection Component

### Props

- `stats` (StatItem[]): Array of stat objects
- `title` (string, optional): Section title
- `description` (string, optional): Section description
- `backgroundColor` (string, optional): Background color classes (default: blue)
- `textColor` (string, optional): Text color classes (default: white)
- `className` (string, optional): Additional CSS classes

### StatItem Interface

```tsx
interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}
```

### Features

- ✅ Responsive grid layout
- ✅ Staggered animation timing
- ✅ Customizable theming
- ✅ Optional title and description
- ✅ Automatic grid columns (up to 4)

### Usage

```tsx
import StatsSection from "@/components/ui/StatsSection";

const stats = [
  { value: 500, label: "Students", suffix: "+" },
  { value: 95, label: "Success Rate", suffix: "%" },
  { value: 15, label: "Courses", suffix: "+" },
];

<StatsSection
  stats={stats}
  title="Our Impact"
  description="Numbers that speak for excellence"
  backgroundColor="bg-blue-600 dark:bg-blue-800"
  textColor="text-white"
/>;
```

## Examples

### Basic Counter

```tsx
<Counter end={1000} suffix="+" label="Happy Customers" />
```

### Currency Counter

```tsx
<Counter end={50000} prefix="₦" label="Average Salary" duration={3000} />
```

### Percentage Counter

```tsx
<Counter end={95} suffix="%" label="Success Rate" className="text-green-600" />
```

### Stats Section with Custom Theme

```tsx
const stats = [
  { value: 500, label: "Graduates", suffix: "+" },
  { value: 15, label: "Courses", suffix: "+" },
  { value: 95, label: "Job Placement", suffix: "%" },
];

<StatsSection
  stats={stats}
  backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
  textColor="text-white"
  className="shadow-xl"
/>;
```

## Styling Tips

### Color Themes

- **Blue**: `bg-blue-600 dark:bg-blue-800`
- **Green**: `bg-green-600 dark:bg-green-800`
- **Red**: `bg-red-600 dark:bg-red-800`
- **Purple**: `bg-purple-600 dark:bg-purple-800`
- **Gradient**: `bg-gradient-to-r from-blue-600 to-purple-600`

### Text Colors

- **Light theme**: `text-gray-900`
- **Dark theme**: `text-white`
- **Colored**: `text-blue-600 dark:text-blue-400`

## Performance Notes

- Uses `IntersectionObserver` for efficient scroll detection
- Animation only triggers once per component
- Uses `requestAnimationFrame` for smooth animation
- Numbers are formatted with `toLocaleString()` for readability
