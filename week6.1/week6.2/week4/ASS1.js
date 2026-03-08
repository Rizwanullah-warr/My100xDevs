const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    try {
      const data = fs.readFileSync(file, 'utf8');
      // Most accurate method: count newlines, adjust for trailing newline
      const lines = (data.match(/\n/g) || []).length;
      // If file has content but no newline at all, it's still 1 line
      const finalCount = data.length > 0 && lines === 0 && !data.includes('\n') 
        ? 1 
        : data.endsWith('\n') 
          ? lines 
          : lines + 1;
      
      console.log(`There are ${finalCount} lines in ${file}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
  });

program.parse();