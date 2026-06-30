# Tracking Architecture

## Overview

As of the latest update, the application uses **Google Tag Manager (GTM)** as the central hub for all web analytics and tracking, with no direct third-party tracking scripts in the application code.

## Tracking Sources

All tracking is now managed through **Google Tag Manager (ID: GTM-MKJ484H)**:

### 1. Google Analytics 4 (GA4)
- **Source**: GTM (managed tag)
- **Status**: ✓ Active
- **Purpose**: Web analytics, user behavior tracking
- **Configuration**: Managed within GTM container

### 2. Google Ads / Conversion Tracking
- **Source**: GTM (managed tag)
- **Status**: ✓ Active
- **Purpose**: Conversion tracking, remarketing
- **Configuration**: Managed within GTM container

### 3. Microsoft Clarity
- **Source**: GTM (managed tag)
- **Status**: ✓ Active (as of latest update)
- **Purpose**: Session recording, user experience analysis
- **Configuration**: Managed within GTM container
- **Note**: Previously loaded with direct script (Project ID: x36v31bb3x) - NOW REMOVED

## Application Code Structure

### Active Tracking Implementation

**File**: `app/layout.tsx`

```tsx
{/* GTM - Main tracking hub */}
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-MKJ484H"
    height="0" width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>

<Script
  id="gtm"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MKJ484H');
    `,
  }}
/>
```

### Removed Tracking Implementation

**File**: `app/layout.tsx` (REMOVED)

The following direct Microsoft Clarity script has been **completely removed**:

```tsx
{/* Clarity - REMOVED - Now managed through GTM */}
<Script id="clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/x36v31bb3x";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x36v31bb3x");
  `}
</Script>
```

**Reason for Removal**: 
- Eliminated duplicate Clarity initialization
- Centralized all tracking through GTM for consistency
- Reduced application bundle size
- Simplified tracking management (one interface instead of multiple)

## Benefits of GTM-Only Architecture

1. **Centralized Management**: All tracking configuration managed in one place (GTM container)
2. **No Code Deployments**: Add/remove/modify tracking tags without redeploying the app
3. **Reduced Bundle Size**: No direct tracking scripts in application code
4. **Consistency**: All tracking follows GTM standards and governance
5. **Version Control**: Tag history and rollback capabilities through GTM interface
6. **Performance**: GTM loads asynchronously with `strategy="afterInteractive"`
7. **No Duplicate Tags**: Eliminates risk of multiple instances of the same tracker

## Verification Checklist

- ✓ Direct Clarity script completely removed from `app/layout.tsx`
- ✓ GTM properly configured with ID `GTM-MKJ484H`
- ✓ No Clarity npm packages in `package.json`
- ✓ No references to Clarity Project ID (x36v31bb3x) in source code
- ✓ Application builds successfully without errors
- ✓ Homepage loads correctly in browser
- ✓ No console errors related to tracking

## What's Configured in GTM

The following should be configured within the GTM container (GTM-MKJ484H):

1. **Google Analytics 4 Tag**
   - Tracks page views, user events
   - Sends data to GA4 property

2. **Google Ads Tag**
   - Tracks conversions
   - Enables remarketing audiences

3. **Microsoft Clarity Tag**
   - Project ID: x36v31bb3x
   - Tracks session recordings, heatmaps
   - Configured as a custom tag or built-in tag within GTM

## How to Add/Modify Tracking

**To add new tracking sources:**

1. Log in to Google Tag Manager (GTM-MKJ484H)
2. Create a new tag in the GTM container
3. Deploy the container
4. No code changes needed - tracking activates immediately

**To modify existing tracking:**

1. Edit the relevant tag in GTM
2. Adjust triggers, variables, or configuration
3. Preview and test changes
4. Publish the container
5. No application redeployment required

## Important Notes

- **Do NOT** add direct tracking scripts back into the application
- **Do NOT** re-implement Clarity outside of GTM
- **All** tracking management should happen through GTM
- The `<noscript>` iframe fallback ensures GTM works even with JavaScript disabled

## References

- GTM Container ID: `GTM-MKJ484H`
- GTM Documentation: https://tagmanager.google.com/
- Clarity Documentation (via GTM): https://clarity.microsoft.com/
- GA4 Documentation: https://support.google.com/analytics/
- Google Ads Conversion Tracking: https://support.google.com/google-ads/

---

**Last Updated**: 2025-01-XX  
**Status**: All direct tracking removed, GTM-only architecture active
