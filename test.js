import { exec } from 'child_process';

exec('op item list --format=json', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  const items = JSON.parse(stdout);
  console.log(items);
});
