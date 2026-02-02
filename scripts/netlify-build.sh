#!/bin/bash
set -e

# Install dependencies using npm (Netlify will use npm since packageManager field is removed)
npm ci

# Build the project
npm run build
