# paralympics-report

## Developer Guide

### Setting up

1. Install `npm`.
  * Option 1: Install Ubuntu on Windows using Windows Subsystem for Linux, then install `nvm`, then use `nvm` to install `npm`.
  * Option 2: Install a [Windows alternative](https://github.com/nvm-sh/nvm#important-notes) to `nvm`, then follow its instructions to install `npm`.
1. Install MarkBind.
   1. Go to `report` folder: `cd report`
   1. Run `npm install`. This installs the packages specified in `package.json`, so MarkBind will be installed. You should see a `node_modules` folder within the `report` folder after running this command.
1. Check if MarkBind is installed correctly: run `npm run serve`. You should be able to preview the website at `http://127.0.0.1:8080/` in your browser.

### Making changes to the report

We use [MarkBind](https://markbind.org/), a static site generator, to generate the report website.
This allows us to write our content using MarkDown instead of having to write everything in HTML.

Whenever a commit is pushed to the `main` branch, GitHub Actions is configured to generate the static site from the markdown files and deploy it to the `gh-pages` branch.
(Refer to [report.yml](.github/workflows/report.yml) for the GitHub Actions configuration file.)
The repository has been configured to use the files in `gh-pages` branch for our website.

All files used for generating the website are in the `report` folder. 
Inside this folder, we have the following key files/folders:

* `contents`: contains markdown files for the report
* `layouts/default.md`: contains the template/layout for the report. If adding a new tab for the report, remember to update this file so users can access the page from the navigation bars.
* `images`: all image files used in the report
