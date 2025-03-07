#!/bin/bash

# Create the logo SVG file
mkdir -p public/images
cat > public/images/logo.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="40" viewBox="0 0 180 40">
  <!-- Background hexagon -->
  <polygon points="20,0 40,10 40,30 20,40 0,30 0,10" fill="#1E3A8A" />
  
  <!-- Lightning bolt -->
  <path d="M13,10 L20,10 L15,18 L22,18 L10,30 L12,20 L7,20 Z" fill="#06B6D4" />
  
  <!-- Text -->
  <text x="50" y="24" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#F8FAFC">SKYWAVES</text>
  <text x="150" y="24" font-family="Arial, sans-serif" font-size="12" fill="#7E22CE">™</text>
  <text x="56" y="34" font-family="Arial, sans-serif" font-size="10" fill="#F8FAFC">ENGINEERS</text>
</svg>
EOF

# Create the network background pattern
cat > public/images/network-bg.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
  <defs>
    <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="2" fill="#1E3A8A" opacity="0.2" />
      <circle cx="50" cy="50" r="2" fill="#1E3A8A" opacity="0.2" />
      <circle cx="90" cy="90" r="2" fill="#1E3A8A" opacity="0.2" />
      <circle cx="90" cy="10" r="2" fill="#1E3A8A" opacity="0.2" />
      <circle cx="10" cy="90" r="2" fill="#1E3A8A" opacity="0.2" />
      
      <line x1="10" y1="10" x2="50" y2="50" stroke="#1E3A8A" stroke-width="0.5" opacity="0.1" />
      <line x1="90" y1="90" x2="50" y2="50" stroke="#1E3A8A" stroke-width="0.5" opacity="0.1" />
      <line x1="90" y1="10" x2="50" y2="50" stroke="#1E3A8A" stroke-width="0.5" opacity="0.1" />
      <line x1="10" y1="90" x2="50" y2="50" stroke="#1E3A8A" stroke-width="0.5" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#network)" />
</svg>
EOF

echo "SVG files created successfully!"

# Ensure all directories exist
mkdir -p public/images/projects
mkdir -p public/images/team

echo "All placeholder files created. Replace these with real images before deployment."