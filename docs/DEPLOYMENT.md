# Deployment checklist (Netlify + Squarespace DNS)

## Content operations

Before editors publish in production, apply `supabase/migrations/20260531000006_content_governance.sql` and share [`docs/content-operations/README.md`](./content-operations/README.md) with the team.

## Pre-launch

- [ ] All Supabase migrations applied on **production** project
- [ ] Production env vars set in Netlify (mirror `.env.local.example`)
- [ ] `NEXT_PUBLIC_SITE_URL=https://www.beena-e.com`
- [ ] Export current Squarespace DNS records (screenshot + copy)
- [ ] Confirm MX records for Google Workspace — **do not change**
- [ ] Add 301 redirects in `src/lib/seo/redirects.ts` from old Duda URLs
- [ ] GA4, Resend, Calendly env vars configured
- [ ] Smoke test: forms, admin login, insights pages

## Netlify

1. Connect GitHub repo → Netlify
2. Build command: `npm run build`
3. Install `@netlify/plugin-nextjs` (see `netlify.toml`)
4. Deploy preview → verify
5. Assign custom domain `www.beena-e.com`

## Squarespace DNS (typical)

| Type | Host | Value |
|------|------|--------|
| CNAME | www | your-site.netlify.app |
| A / ALIAS | @ | Netlify load balancer IPs (per Netlify docs) |

**Keep existing MX, SPF, DKIM, DMARC records unchanged.**

## Post-launch

- [ ] Submit sitemap: `https://www.beena-e.com/sitemap.xml`
- [ ] Google Search Console: change of address / monitor 404s
- [ ] Test email delivery (contact form → Resend → inbox)
- [ ] Verify Google Workspace mail still works

## Rollback

Point DNS back to previous hosting if needed; MX records should never have been touched.
