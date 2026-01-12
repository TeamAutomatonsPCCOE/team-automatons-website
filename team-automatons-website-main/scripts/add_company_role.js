const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/team/page.js');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find "role: 'value'," and append "companyRole: '',"
// Handles single or double quotes
const updatedContent = content.replace(/(role:\s*['"][^'"]*['"]\s*,)/g, "$1\n                companyRole: '',");

fs.writeFileSync(filePath, updatedContent);
console.log('Successfully added companyRole to TEAM_DATA in src/app/team/page.js');
