#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps optimize images for the LPMI website.
 * Run with: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');

function checkImageStructure() {
  console.log('📁 Checking image directory structure...\n');
  
  const directories = [
    'backgrounds',
    'hero', 
    'icons',
    'logos',
    'services',
    'team'
  ];
  
  directories.forEach(dir => {
    const dirPath = path.join(IMAGES_DIR, dir);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      console.log(`✅ ${dir}/ - ${files.length} files`);
    } else {
      console.log(`❌ ${dir}/ - missing`);
    }
  });
}

function validateImageFormats() {
  console.log('\n🔍 Checking image formats...\n');
  
  const validExtensions = ['.svg', '.webp', '.png', '.jpg', '.jpeg'];
  let totalFiles = 0;
  let validFiles = 0;
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else {
        totalFiles++;
        const ext = path.extname(item).toLowerCase();
        if (validExtensions.includes(ext)) {
          validFiles++;
          console.log(`✅ ${fullPath.replace(IMAGES_DIR, '')}`);
        } else {
          console.log(`❌ ${fullPath.replace(IMAGES_DIR, '')} (invalid format)`);
        }
      }
    });
  }
  
  scanDirectory(IMAGES_DIR);
  
  console.log(`\n📊 Summary: ${validFiles}/${totalFiles} files have valid formats`);
}

function generateImageList() {
  console.log('\n📋 Generating image list...\n');
  
  const imageList = [];
  
  function scanDirectory(dirPath, relativePath = '') {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, path.join(relativePath, item));
      } else {
        const ext = path.extname(item).toLowerCase();
        if (['.svg', '.webp', '.png', '.jpg', '.jpeg'].includes(ext)) {
          imageList.push({
            path: path.join(relativePath, item),
            size: stat.size,
            ext: ext
          });
        }
      }
    });
  }
  
  scanDirectory(IMAGES_DIR);
  
  console.log('Available images:');
  imageList.forEach(img => {
    const sizeKB = (img.size / 1024).toFixed(1);
    console.log(`  /images/${img.path} (${sizeKB}KB)`);
  });
}

// Main execution
console.log('🎨 LPMI Image Optimization Helper\n');
console.log('=====================================\n');

checkImageStructure();
validateImageFormats();
generateImageList();

console.log('\n✨ Done!');
console.log('\n💡 Tips:');
console.log('  - Use WebP format for better performance');
console.log('  - Optimize images before adding to the directory');
console.log('  - Use descriptive filenames with kebab-case');
console.log('  - Include dimensions in filenames when needed'); 