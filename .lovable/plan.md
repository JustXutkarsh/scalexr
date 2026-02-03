
# Mobile Fix Plan: Autonix Intelligent Architecture Section

## Overview
The "Intelligent Architecture" section's workflow carousel is not displaying correctly on mobile screens. The phone mockup and workflow images are being cut off or positioned incorrectly due to carousel overflow and layout issues.

## Problems Identified

1. **Carousel Overflow** - The horizontal scroll container uses `translateX(-${activeWorkflow * 100}%)` but the parent container doesn't properly clip overflow, causing content to extend beyond the viewport
2. **Missing Overflow Hidden** - The ScrollArea wrapper needs explicit overflow control
3. **Gap causing misalignment** - The `gap-8` between carousel slides is not accounted for in the 100% width calculation
4. **Mobile grid stacking needs adjustment** - On mobile, the two-column grid stacks vertically but elements inside have fixed widths that don't center properly

## Implementation Plan

### Step 1: Fix Carousel Container Overflow
Add `overflow-hidden` to the parent container of the workflow carousel to prevent horizontal overflow on mobile.

```text
File: src/components/sections/Solution.tsx

Location: The div wrapping the ScrollArea (around line 279)

Change: Add overflow-hidden class to the parent container
```

### Step 2: Adjust Slide Width Calculation  
Update the carousel slide container to use proper width calculations that account for the gap.

```text
Changes to the workflow container:
- Add w-full and overflow-hidden to ScrollArea
- Ensure each slide uses proper viewport width calculations
```

### Step 3: Stack Layout for Mobile
Modify the mobile layout so phone mockup and workflow image stack vertically and are properly centered.

```text
File: src/components/sections/Solution.tsx

The grid inside each workflow:
- Current: grid lg:grid-cols-2 
- Update: Ensure proper centering on mobile with explicit px padding
```

### Step 4: Phone Mockup Mobile Sizing
Reduce the phone mockup width on very small screens to ensure it fits within viewport.

```text
Current phone width: w-[260px] sm:w-[320px]
Consider: Adding max-w-full to prevent overflow
```

## Technical Details

### Primary Changes

**1. Add overflow containment to carousel wrapper:**
```jsx
<div className="mb-12 sm:mb-16 lg:mb-20 overflow-hidden ...">
```

**2. Fix ScrollArea to properly contain content:**
```jsx
<ScrollArea className="w-full overflow-hidden">
  <div 
    className="flex transition-transform duration-500 ease-out pb-4 touch-pan-y"
    style={{ transform: `translateX(calc(-${activeWorkflow * 100}%))` }}
  >
```

**3. Ensure workflow slide containers have proper sizing:**
```jsx
<div className="min-w-full w-full shrink-0 px-4">
```

**4. Ensure phone mockup is centered and contained:**
```jsx
<div className="flex justify-center transition-all duration-700">
  <div className="relative max-w-full">
    <div className="relative w-[260px] sm:w-[320px] max-w-[85vw] ...">
```

### Files to Modify
- `src/components/sections/Solution.tsx` - Main changes to carousel container, slide sizing, and phone mockup constraints

## Expected Outcome
- Phone mockup fully visible and centered on mobile
- Workflow images contained within viewport
- Swipe gestures work correctly between carousel items
- No horizontal scrolling/overflow issues on mobile screens
