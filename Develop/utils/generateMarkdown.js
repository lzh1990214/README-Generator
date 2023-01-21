// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  if (response.license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (response.license === 'ISC License') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (response.license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ``
  };
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  if (response.license === 'MIT License') {
    return `https://opensource.org/licenses/MIT`
  } else if (response.license === 'ISC License') {
    return `https://opensource.org/licenses/ISC`
  } else if (response.license === 'Apache License 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else {
    return ``
  };
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
  return `## License <a id="License"></a>
  ### ${response.license}`;
}

// A function to generate markdown for README
function generateMarkdown(response) {
  return `
  ${renderLicenseBadge(response)} 
  # ${response.title}
  ## Description
  ${response.description}
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributing](#Contributing)
  4. [License](#License)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  ## Installation <a id="Installation"></a>
  ${response.installation}
  ## Usage <a id="Usage"></a>
  ${response.usage}
  ## Contributing <a id="Contributing"></a>
  ${response.contributing}
  ${renderLicenseSection(response)}
  ${renderLicenseLink(response)}
  ## Tests <a id="Tests"></a>
  ${response.tests}
  ## Questions <a id="Questions"></a>
  ### Github
  https://github.com/${response.githubName}
  ### Email
  ${response.email}
`;
}

module.exports = generateMarkdown;
