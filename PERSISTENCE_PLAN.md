# StockFlow Persistence Plan

## Goal

StockFlow should not depend on a temporary Codex thread folder.
The app should have a stable source, a public URL, cloud data, and family sync.

## Best Practical Setup

### Code

Use GitHub.

Why:

- The code can be restored even if this Mac is replaced.
- Every update has history.
- Vercel can deploy from it automatically.

### App URL

Use Vercel.

Why:

- The iPhone can open the app from anywhere.
- Updates are published automatically from GitHub.
- It works well for web apps and PWAs.

### Data

Use Supabase.

Why:

- Inventory data is stored outside the phone.
- Husband and wife can share the same household.
- Realtime updates are possible.

## What "Permanent" Means

This setup means:

- The code survives local folder loss.
- The app has a stable URL.
- The inventory data is not tied to one browser.
- Husband and wife can share the same household data.
- Updates can be made safely over time.

It does not mean:

- No company can ever shut down.
- No account can ever be deleted.
- No backup is needed.

For the strongest version, export Supabase backups regularly.
