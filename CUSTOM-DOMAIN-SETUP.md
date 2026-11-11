# Connect www.trestlescg.com to GitHub Pages

These instructions are for the repository `wrcain/TrestleSCG` and the preferred public website address **https://www.trestlescg.com/**.

## 1. Tell GitHub which custom domain to use

1. Open https://github.com/wrcain/TrestleSCG and go to **Settings → Pages**.
2. Under **Custom domain**, enter `www.trestlescg.com` and click **Save**.
3. The `CNAME` file in this package contains that same hostname. With branch publishing, GitHub also writes/maintains this file when you save a custom domain in Settings.

**Do this before pointing the domain's DNS at GitHub Pages.** GitHub recommends verifying your domain in your GitHub account for additional protection.

## 2. Set records in the domain's DNS management dashboard

Look for **DNS / DNS Records / Manage DNS** where the domain's nameservers are managed. Create or update:

| Type | Host/Name | Value / Points to | Purpose |
| --- | --- | --- | --- |
| CNAME | `www` | `wrcain.github.io` | www.trestlescg.com points to GitHub Pages |
| A | `@` | `185.199.108.153` | Bare domain redirect/support |
| A | `@` | `185.199.109.153` | Bare domain redirect/support |
| A | `@` | `185.199.110.153` | Bare domain redirect/support |
| A | `@` | `185.199.111.153` | Bare domain redirect/support |

The CNAME target is **wrcain.github.io**, with **no** `https://` and **no** `/TrestleSCG` suffix. Some DNS dashboards use an empty name instead of `@` for the root domain.

Remove or replace **conflicting** A/AAAA/ALIAS records for `@` and conflicting `www` CNAME/A records; do not delete MX, SPF, DKIM, or other TXT records needed for business email. Do not alter nameservers unless you intend to migrate your DNS hosting.

## 3. Confirm Pages status and HTTPS

1. Return to **Settings → Pages** to check the custom domain and DNS check status.
2. Once certificate provisioning is ready, turn on **Enforce HTTPS**.
3. Open https://www.trestlescg.com/ and https://trestlescg.com/ (the latter should redirect to www when both are configured correctly).

DNS propagation can take up to **24 hours**. HTTPS may take additional time after DNS resolves.

If the site shows a 404 error, verify that the repository's publishing branch/folder is `main` / `/(root)`, the `index.html` file is at the repository root, and `CNAME` contains only `www.trestlescg.com`. If a TLS/certificate error occurs, check for conflicting DNS records and confirm GitHub Pages has passed its DNS check.

## Useful reference

- GitHub Docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GitHub's HTTPS guide: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

This package does not automatically update your registrar or publish to your GitHub repository.
