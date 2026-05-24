import fs from 'fs';

export default async function globalSetup() {
  if (fs.existsSync('storage/user.json')) {
    fs.unlinkSync('storage/user.json');
  }

  if (fs.existsSync('storage/admin.json')) {
    fs.unlinkSync('storage/admin.json');
  }
}