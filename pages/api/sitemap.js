import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(fileContents);
  } catch (error) {
    console.error('Error reading sitemap.xml:', error);
    res.status(500).send('Internal Server Error');
  }
}