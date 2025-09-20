# Deploying Your Website to GitHub Pages

## Step 1: Prepare Your Repository

Your static website is now ready in the `docs/` folder! Here's what you need to do:

### Option A: Create a New Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `personal-website` or `portfolio`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (you already have files)

### Option B: Use Your Current Repository

If you want to use your existing repository, that's fine too!

## Step 2: Push Your Code

```bash
# If this is a new repo, add the remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Add all files
git add .

# Commit the changes
git commit -m "Add static website for GitHub Pages"

# Push to GitHub
git push -u origin master
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (tab at the top)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select "Deploy from a branch"
5. Choose branch: `master` (or `main` if that's your default)
6. Choose folder: `/docs`
7. Click **Save**

## Step 4: Access Your Website

After a few minutes, your website will be available at:
`https://yourusername.github.io/your-repo-name`

GitHub will show you the exact URL in the Pages settings.

## Notes

- The `.nojekyll` file tells GitHub not to process your files with Jekyll
- Your website will update automatically when you push changes to the `docs/` folder
- It may take a few minutes for changes to appear online

## Custom Domain (Optional)

If you have your own domain:
1. Edit `docs/CNAME` and add your domain (like `yourname.com`)
2. Configure your domain's DNS to point to GitHub Pages
3. GitHub will provide instructions in the Pages settings

## Troubleshooting

- Make sure your repository is public (required for free GitHub Pages)
- Check that you selected the `/docs` folder, not the root
- Wait a few minutes after setup - it's not instant
- Check the Actions tab for any build errors
