const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/rgba\(6, 182, 212/g, 'rgba(249, 115, 22');
  content = content.replace(/rgba\(16, 185, 129/g, 'rgba(245, 158, 11');
  content = content.replace(/rgba\(59, 130, 246/g, 'rgba(239, 68, 68');
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Replaced successfully');
