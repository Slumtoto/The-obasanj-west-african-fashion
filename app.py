npm install -g eslint

import subprocess

# Path to your JavaScript file
js_file = "owino.js"

# Run ESLint to fix JavaScript issues automatically
subprocess.run(["eslint", js_file, "--fix"], check=True)
