# Trestle Security Consulting — Website

**Slogan:** The structure behind better security.

A responsive, static one-page website for Trestle Security Consulting. The site uses plain HTML, CSS, and JavaScript. There is no build system, hosting subscription, or backend required.

## Files

- `index.html` — site markup and content, including current business/contact information
- `styles.css` — desktop and mobile styling; hero/about imagery is referenced here
- `script.js` — mobile menu, footer year, and scroll reveals
- `assets/trestle-logo.png` — brand logo
- `assets/favicon.png` — browser tab icon
- `assets/structural-study.webp` — **temporary hero image** (replace later)
- `assets/structural-study.svg` — editable source for the temporary hero image
- `assets/architecture-wide.webp` — **temporary About image** (replace later)
- `BRAND-MESSAGING.md` — approved messaging and design rationale

## Upload to GitHub

1. Create a GitHub repository, for example `trestle-website`.
2. Download and unzip the website package.
3. In the repository, select **Add file → Upload files**. Drag the **contents** of the unzipped folder (including the `assets` folder), not the ZIP file itself, and commit the files.
4. Make sure `index.html` is at the **repository root**, next to `styles.css` and `script.js`, and not nested inside another folder.

Alternatively, use Git on your computer to push the entire directory.

## Publish with GitHub Pages

1. Go to the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/(root)` folder, then save.
4. Once the Pages deployment completes, open the URL GitHub provides in the Pages settings. For a project repository, it typically has the shape `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

To use `www.trestlescg.com` later, configure **Custom domain** in GitHub Pages and set the DNS records at the domain registrar per GitHub's current instructions. Then enable HTTPS after the domain is verified. **This package does not change DNS settings or publish the website for you.**

## Preview locally

Open `index.html` in a browser. All core functionality and image assets work without an internet connection.

## Before going live

- Review the telephone number, email address, bio, and descriptions in `index.html`.
- Replace the two temporary architectural images once the final imagery is approved; make sure the chosen images are properly licensed.
- Social-sharing metadata and the canonical URL currently reference `www.trestlescg.com`; review those when choosing your final domain.
- Contact links open your visitor's email client (`mailto:`); **there is no web contact form or backend**.
- Consider adding a privacy policy if you later use analytics, a hosted contact form, or other tracking.

The website is a working static draft, not an already-published site.
