# Static Website for GitHub Pages

This folder contains the static HTML version of the Django website, optimized for GitHub Pages hosting.

## Files Structure

- `index.html` - Home page
- `projects.html` - Projects page  
- `resume.html` - Resume/CV page
- `css/` - Stylesheets
- `js/` - JavaScript files
- `images/` - Images and assets
- `resume.pdf` - Resume PDF file
- `.nojekyll` - Tells GitHub Pages not to use Jekyll
- `CNAME` - Custom domain configuration (if needed)

## GitHub Pages Setup

1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select branch: `master` (or `main`)
5. Select folder: `/docs`
6. Save

Your site will be available at: `https://yourusername.github.io/yourrepository`

## Custom Domain (Optional)

If you have a custom domain:
1. Uncomment and edit the CNAME file with your domain
2. Configure your domain's DNS to point to GitHub Pages
