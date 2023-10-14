# paralympics-report

## Developer Guide

### Setting up

We are using Quarto to generate the website. Please follow the instructions [here](https://quarto.org/docs/get-started/).

### Making changes to the report

To create a new page on the website,

1. Add a new Jupyter notebook to the root directory. 
   * Refer to the existing notebooks for the metadata to be included in the first cell.
   * Add any references used to `references.bib`, so that citations can be generated automatically when you use the cite keys. Refer to [this link](https://quarto.org/docs/authoring/footnotes-and-citations.html) for more info.
   * Add any images used to the `images` folder.
   * Add or save any datasets used to the `data` folder.
1. Update the navigation bar by editing `navbar` in `_quarto.yml`.
1. Update the contents in `index.qmd`, if applicable.
1. If using Visual Studio Code with the Quarto extension, preview the website using the `Quarto: Preview` command. Alternatively, you may use the `quarto preview` command in the terminal.

Whenever code is pushed to the `main` branch, GitHub Actions has been [configured](https://quarto.org/docs/publishing/github-pages.html) to automatically render and publish the contents to the `gh-pages` branch. 
The website can be viewed at https://data1-team11.github.io/paralympics-report/.
