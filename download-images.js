import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the before-after directory if it doesn't exist
const beforeAfterDir = path.join(__dirname, 'public', 'before-after');
fs.ensureDirSync(beforeAfterDir);

// List of dental before/after images to download
const imagesToDownload = [
  // Teeth whitening images
  {
    url: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg',
    filename: 'whitening-before.jpg',
    description: 'Teeth whitening before image'
  },
  {
    url: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg',
    filename: 'whitening-after.jpg',
    description: 'Teeth whitening after image'
  },
  
  // Veneers images
  {
    url: 'https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg',
    filename: 'veneers-before.jpg',
    description: 'Veneers before image'
  },
  {
    url: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg',
    filename: 'veneers-after.jpg',
    description: 'Veneers after image'
  },
  
  // Implants images
  {
    url: 'https://images.pexels.com/photos/3845552/pexels-photo-3845552.jpeg',
    filename: 'implants-before.jpg',
    description: 'Dental implants before image'
  },
  {
    url: 'https://images.pexels.com/photos/3811843/pexels-photo-3811843.jpeg',
    filename: 'implants-after.jpg',
    description: 'Dental implants after image'
  }
];

// Download function
async function downloadImage(url, filename, description) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });
    
    const filePath = path.join(beforeAfterDir, filename);
    const writer = fs.createWriteStream(filePath);
    
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log(`✅ Downloaded: ${filename} - ${description}`);
        resolve();
      });
      writer.on('error', (err) => {
        console.error(`❌ Error downloading ${filename}:`, err.message);
        reject(err);
      });
    });
  } catch (error) {
    console.error(`❌ Failed to download ${filename}:`, error.message);
  }
}

// Download all images
async function downloadAllImages() {
  console.log('🔄 Starting download of dental before/after images...');
  
  try {
    const promises = imagesToDownload.map(img => 
      downloadImage(img.url, img.filename, img.description)
    );
    
    await Promise.all(promises);
    console.log('✨ All images downloaded successfully!');
  } catch (error) {
    console.error('❌ Error in download process:', error.message);
  }
}

downloadAllImages();