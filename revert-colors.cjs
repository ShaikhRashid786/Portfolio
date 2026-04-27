const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/rgba\(249, 115, 22/g, 'rgba(6, 182, 212');
  content = content.replace(/rgba\(245, 158, 11/g, 'rgba(16, 185, 129');
  content = content.replace(/rgba\(239, 68, 68/g, 'rgba(59, 130, 246');
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Reverted successfully');
