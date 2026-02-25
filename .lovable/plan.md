

## Plan: Full Mobile Optimization & Bug Fixes

### Issues Found

**Critical Bugs:**

1. **React Rules of Hooks Violation in WhyAutonix.tsx (lines 191, 225)**: `useReveal()` is called inside a `.map()` loop, which violates React's rules of hooks. Hooks cannot be called conditionally or inside loops. This can cause crashes or unpredictable behavior.

2. **React Rules of Hooks Violation in CaseStudies.tsx (line 334)**: `useCounter()` is called inside a `.map()` loop inside the component body.

3. **Solution.tsx CTA button scrolls to `#cta` on homepage but won't work on the Solution section itself if viewed from another page** — the `#cta` element only exists on the Index page. However since Solution is only rendered on Index, this is acceptable.

4. **Footer contact links**: The `mailto:` link doesn't have `external: true` but renders as `<a>` — this works because it's in the contact section which always renders `<a>` tags. No bug.

5. **WhyAutonix "Become the Next Case Study" CTA** links to `/contact` as a plain `<a>` tag instead of React Router `<Link>`, causing full page reload.

**Mobile Responsiveness Issues:**

6. **Navbar mobile menu**: The menu starts at `top-[60px]` which is hardcoded and may not match actual navbar height on all devices.

7. **WhyAutonix Transformation Grid**: On mobile (single column), the grid header is hidden (`hidden sm:grid`) but the rows don't have labels, so users see data without context of what "Before/After/Impact" columns mean.

8. **WhyAutonix AnimatedStat**: The `text-5xl sm:text-6xl lg:text-7xl` numbers may overflow on very small screens (320px).

9. **Solution section workflow panels**: The `translateX` approach with `ScrollArea` may cause horizontal overflow issues on some mobile browsers.

10. **CaseStudies hero metrics**: The hero grid on mobile stacks but the large `text-4xl sm:text-5xl` numbers may overflow on small screens.

11. **OperatingPrinciples (Growth Pillars)**: Mobile accordion looks good, but the CTA button at bottom doesn't have full-width styling on mobile.

12. **CTA section**: The submitted state container has `p-12` which may be too much padding on mobile.

13. **Footer**: The email address with `break-all` is correct but the 2-column grid on small mobile may still be tight.

---

### Implementation Plan

#### Task 1: Fix React Hooks Violations in WhyAutonix.tsx
- Extract the transformation row rendering into a separate `TransformationRow` component that calls `useReveal` at component level
- Extract case study card into a separate `CaseStudyCard` component that calls `useReveal` at component level
- This fixes the rules-of-hooks violation that can cause React crashes

#### Task 2: Fix React Hooks Violation in CaseStudies.tsx
- Extract hero metric rendering into a separate `HeroMetricCard` component that calls `useCounter` at component level

#### Task 3: Mobile Optimization — WhyAutonix.tsx
- Add mobile labels (Before/After/Impact) to each row in the transformation grid since the header is hidden on mobile
- Scale down AnimatedStat numbers for smallest screens: `text-4xl sm:text-5xl lg:text-7xl`
- Change CTA `<a>` to React Router `<Link>` to prevent full page reload

#### Task 4: Mobile Optimization — Hero.tsx
- Minor: ensure scroll indicator is hidden on very short viewports to avoid overlap

#### Task 5: Mobile Optimization — CTA.tsx
- Change submitted state padding from `p-12` to `p-6 sm:p-12`
- Ensure all form elements have proper touch targets

#### Task 6: Mobile Optimization — OperatingPrinciples.tsx
- Make CTA button full-width on mobile: add `w-full sm:w-auto` and `inline-flex` adjustments

#### Task 7: Mobile Optimization — CaseStudies.tsx
- Ensure hero stat cards don't overflow on 320px screens by adjusting font sizes
- Make timeline chevrons work properly on tablet (they're hidden except on lg)

#### Task 8: Mobile Optimization — Navbar.tsx
- Adjust mobile menu top offset to use a CSS-safe approach
- Ensure mobile menu items have proper tap target sizing

#### Task 9: Mobile Optimization — Solution.tsx
- Ensure the workflow swipe area has sufficient touch area
- Verify dialog close buttons are accessible on mobile

#### Task 10: General Mobile Polish
- Verify all external links (Calendly) open correctly with `target="_blank"` and `rel="noopener noreferrer"` — these are already correct across all components
- Verify all interactive elements meet 44px minimum touch target

### Technical Details

The most critical fix is the hooks violation. In `WhyAutonix.tsx` lines 191 and 225, `useReveal()` is called inside `.map()`:
```
transformationRows.map((row, i) => {
  const rowReveal = useReveal(0.1); // VIOLATION
```
This must be refactored into separate components. Similarly in `CaseStudies.tsx` line 334:
```
heroMetrics.map((m, i) => {
  const { count, ref } = useCounter(m.value, 1800); // VIOLATION
```

All files will be modified to ensure proper responsive breakpoints using Tailwind's `sm:`, `md:`, `lg:` prefixes, with mobile-first sizing.

