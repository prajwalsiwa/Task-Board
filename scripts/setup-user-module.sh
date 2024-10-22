#!/bin/bash

# setup directory path to clone the module
SETUP_DIRECTORY=./src/modules/user-auth-module/

# exit if SETUP_DIRECTORY already exists
if [ -d "$SETUP_DIRECTORY" ]; then
  echo "Directory already exists!"
  echo "Please remove $SETUP_DIRECTORY and run the command again."
  exit
fi

# clone user-auth-module repo without files
git clone --no-checkout --depth=1 --filter=tree:0 \
git@github.com:naxa-developers/user-auth-module.git $SETUP_DIRECTORY

# cd into user-auth-module directory
cd $SETUP_DIRECTORY

# fetch files only from ./src/ directory
git sparse-checkout set --no-cone '/src/*/' 

# fetch the folder and files
git checkout

# remove .git file to detach tracking
rm -rf .git

echo "----------------------------------------------"
echo "User module setup successful. Enjoy!"