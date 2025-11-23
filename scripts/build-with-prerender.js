#!/usr/bin/env node

import { spawn } from 'child_process';
import fetch from 'node-fetch';
import prerender from './prerender.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Make fetch available globally for Node.js
globalThis.fetch = fetch;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function buildWithPrerender() {
  console.log('🏗️  Starting build with pre-rendering...');
  
  try {
    // Step 1: Generate sitemap
    console.log('📊 Generating sitemap...');
    await runCommand('node', ['scripts/generate-sitemap.js'], projectRoot);
    
    // Step 2: Build the project
    console.log('⚡ Building project...');
    await runCommand('npm', ['run', 'build:only'], projectRoot);
    
    // Step 3: Start preview server for pre-rendering
    console.log('🖥️  Starting preview server...');
    const previewServer = spawn('npm', ['run', 'preview'], {
      cwd: projectRoot,
      detached: false,
      stdio: 'pipe'
    });

    // Wait for server to be ready
    await waitForServer();
    
    // Step 4: Pre-render pages
    console.log('🔄 Pre-rendering pages...');
    await prerender();
    
    // Step 5: Stop preview server
    console.log('🛑 Stopping preview server...');
    previewServer.kill('SIGTERM');
    
    console.log('✅ Build with pre-rendering completed successfully!');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { 
      cwd, 
      stdio: 'inherit',
      shell: true 
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command "${command} ${args.join(' ')}" failed with code ${code}`));
      }
    });
    
    child.on('error', reject);
  });
}

function waitForServer(maxAttempts = 30, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    
    const checkServer = async () => {
      attempts++;
      
      try {
        const response = await fetch('http://localhost:4173');
        if (response.ok) {
          console.log('✅ Preview server is ready');
          resolve();
          return;
        }
      } catch (error) {
        // Server not ready yet
      }
      
      if (attempts >= maxAttempts) {
        reject(new Error('Preview server failed to start'));
        return;
      }
      
      console.log(`⏳ Waiting for preview server... (${attempts}/${maxAttempts})`);
      setTimeout(checkServer, delay);
    };
    
    checkServer();
  });
}

// Run if this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  buildWithPrerender().catch(console.error);
}
