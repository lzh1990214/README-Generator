// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) { 
  return `## License
  ${response.license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ## Description
  ${response.description}
  ## Installation
  ${response.installation}
  ## Usage
  ${response.usage}
  ## Credits
  ${response.credit}
  ${renderLicenseSection(response)} 
`;

}

module.exports = generateMarkdown;
