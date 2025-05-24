import { exec, execSync } from 'child_process';

const token = process.env.OP_SERVICE_ACCOUNT_TOKEN;
const exportToken= `export OP_SERVICE_ACCOUNT_TOKEN=${token}`
const installCLI = `
curl -sS https://downloads.1password.com/linux/keys/1password.asc | sudo gpg --dearmor --output /usr/share/keyrings/1password-archive-keyring.gpg &&
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/1password-archive-keyring.gpg] https://downloads.1password.com/linux/debian/$(dpkg --print-architecture) stable main" | sudo tee /etc/apt/sources.list.d/1password.list &&
sudo mkdir -p /etc/debsig/policies/AC2D62742012EA22/ &&
curl -sS https://downloads.1password.com/linux/debian/debsig/1password.pol | sudo tee /etc/debsig/policies/AC2D62742012EA22/1password.pol &&
sudo mkdir -p /usr/share/debsig/keyrings/AC2D62742012EA22 &&
curl -sS https://downloads.1password.com/linux/keys/1password.asc | sudo gpg --dearmor --output /usr/share/debsig/keyrings/AC2D62742012EA22/debsig.gpg &&
sudo apt update &&
sudo apt install -y 1password-cli
`;

// exec(installCLI, (error, message, sterr)=> {
//   const opCommands = `${exportToken} && op vault ls && op item ls --vault mfsqhaf3zntu2mgjzaqpdedkba`;
//   exec(opCommands, (error, vault, sterr) => {
//     console.log(vault);
//   });
// });

try {
  execSync(installCLI, { stdio: 'inherit' });

  const opCommands = `${exportToken} && op vault ls && op item ls --vault mfsqhaf3zntu2mgjzaqpdedkba`;
  const output = execSync(opCommands);
  console.log(output);

} catch (err) {
  console.error("Error:", err.message);
}