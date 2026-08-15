# Larry Gabriel — IT Support Portfolio

A one-page portfolio site (plain HTML/CSS/JS, no build step) with:
- Résumé download
- Skills, OJT experience, and education
- All 4 certificates as viewable/downloadable PDFs

## Folder structure
```
index.html
style.css
script.js
assets/
  resume/Larry_Gabriel_IT_Support_Resume.pdf
  certificates/
    Introduction_to_Cybersecurity_certificate_LarryGabriel.pdf
    IT_Customer_Support_Basics_certificate_LarryGabriel.pdf
    Network_Technician_Career_Path_certificate_LarryGabriel.pdf
    TESDA_CSS_NCII.pdf
```

## How to publish it on GitHub Pages (free hosting, no coding needed)

1. Go to [github.com](https://github.com) and log in (or create a free account).
2. Click the **+** icon top-right → **New repository**.
   - Name it something like `larry-gabriel-portfolio`.
   - Set it to **Public**.
   - Click **Create repository**.
3. On the new repo page, click **Add file → Upload files**.
4. Drag in **all the files and folders from this project** (`index.html`, `style.css`, `script.js`, `README.md`, and the whole `assets` folder), then click **Commit changes**.
5. Go to the repo's **Settings** tab → **Pages** (left sidebar).
6. Under "Build and deployment", set **Source** to **Deploy from a branch**, Branch = `main`, folder = `/ (root)`. Click **Save**.
7. Wait about a minute, then refresh — GitHub will show your live link, something like:
   `https://<your-username>.github.io/larry-gabriel-portfolio/`

That link is what you put on your résumé, LinkedIn, or job applications.

## Adding the two missing certificates

Two certificates from the résumé ("Networking Basics" and the PIO Certificate of
Completion) aren't uploaded yet, so their cards are grayed out on the site. Once you
have those PDFs:

1. Drop them into `assets/certificates/`.
2. In `index.html`, find the matching `<article class="cert cert--muted">` block and:
   - remove `cert--muted` from the class list,
   - replace the `<p class="cert__note">…</p>` line with a button like:
     `<a class="btn btn--outline btn--small" href="assets/certificates/YOUR_FILE.pdf" target="_blank" rel="noopener">View certificate</a>`

## Editing content later

Everything is plain text in `index.html` — open it in any text editor (or upload it
back to Claude) to change wording, add a project section, or update contact info.

