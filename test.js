import { exec } from 'child_process';

const token = process.env.OP_SERVICE_ACCOUNT_TOKEN;

if (!token) {
  console.error('Error: OP_SERVICE_ACCOUNT_TOKEN is not set.');
  process.exit(1);
}

const installCmd = `
curl -sS https://downloads.1password.com/linux/keys/1password.asc | sudo gpg --dearmor --output /usr/share/keyrings/1password-archive-keyring.gpg &&
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/1password-archive-keyring.gpg] https://downloads.1password.com/linux/debian/$(dpkg --print-architecture) stable main" | sudo tee /etc/apt/sources.list.d/1password.list &&
sudo mkdir -p /etc/debsig/policies/AC2D62742012EA22/ &&
curl -sS https://downloads.1password.com/linux/debian/debsig/1password.pol | sudo tee /etc/debsig/policies/AC2D62742012EA22/1password.pol &&
sudo mkdir -p /usr/share/debsig/keyrings/AC2D62742012EA22 &&
curl -sS https://downloads.1password.com/linux/keys/1password.asc | sudo gpg --dearmor --output /usr/share/debsig/keyrings/AC2D62742012EA22/debsig.gpg &&
sudo apt update &&
sudo apt install -y 1password-cli
`;

console.log('Installing 1Password CLI...');
exec(installCmd, (err, stdout, stderr) => {
  if (err) {
    console.error('Installation failed:', err.message);
    console.error(stderr);
    return;
  }

  console.log('1Password CLI installed successfully.');
  console.log('Listing vaults using op CLI...');

  const listVaultsCmd = `OP_SERVICE_ACCOUNT_TOKEN=${token} op item ls --vault mfsqhaf3zntu2mgjzaqpdedkba`;
  exec(listVaultsCmd, (err, stdout, stderr) => {
    if (err) {
      console.error('Failed to list vaults:', err.message);
      console.error(stderr);
      return;
    }

    if (stderr) console.error('Warnings:', stderr);
    console.log('Vaults:\n', stdout);
  });
});
