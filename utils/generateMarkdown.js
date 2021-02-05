// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // ![Badge for GitHub repo top language](`https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor`)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({userName, userEmail, userRepo, title, description, projectImgSRC, projectInstall, projectRun, projectTest, projectInfo, projectLicense, avatarURL}) {
  projectTitleDashed = title.replace(/\s+/g, '-');
  return `[contributors-shield]: https://img.shields.io/github/contributors/${userName}/${projectTitleDashed}.svg?style=flat-square
  [contributors-url]: https://github.com/${userName}/${projectTitleDashed}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${userName}/${projectTitleDashed}.svg?style=flat-square
  [forks-url]: https://github.com/${userName}/${projectTitleDashed}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${userName}/${projectTitleDashed}.svg?style=flat-square
  [stars-url]: https://github.com/${userName}/${projectTitleDashed}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${userName}/${projectTitleDashed}.svg?style=flat-square
  [issues-url]: https://github.com/${userName}/${projectTitleDashed}/issues
  [license-shield]: https://img.shields.io/github/license/${userName}/${projectTitleDashed}.svg?style=flat-square
  [license-url]: https://github.com/${userName}/${projectTitleDashed}/blob/master/LICENSE.txt
  [![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![License.txt][license-shield]][license-url]
  # Title 
  ${title}
  ## Description
  ${description}
  ## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Additional Information](#additional-information)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions and Feedback](#questions-and-feedback)
  ## Screenshots
  <img src="${projectImgSRC}" alt="${title}"/>
  ## Installation
  Download (and unpack) or clone the repo, then using a CLI run the ${projectInstall} command.
  ## Usage
  Run the application with the CLI command ${projectRun} and follow the prompts.
  ## Testing
  Run the tests with the CLI command ${projectTest}.
  ## Additional Information
  ${projectInfo}
  ## License
  This project is licensed under the ${projectLicense} License - see the [LICENSE.txt](https://github.com/${userName}/${projectTitleDashed}/blob/master/LICENSE.txt) file for details
  ## Contributing
  Please read [CONTRIBUTING.md](https://github.com/${userName}/${projectTitleDashed}/blob/master/CONTRIBUTING.md) for details on the code of conduct, and the process for submitting pull requests.
  ## Questions and Feedback
  Please contact me using one of the following:
  |---|---|
  - | Github: [${userName}](https://gist.github.com/${userName}) | [<img src="${avatarURL}" height="30" width="30" alt="${userName}"/>](https://gist.github.com/${userName}) |
  |---|---|
  - Email: ${userEmail}`
}

// Parse the markdown README
module.exports = generateMarkdown;


