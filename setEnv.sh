rm -f .env
echo REACT_APP_HASH=$(git rev-parse HEAD) >> .env
echo REACT_APP_TAG=$(git describe --abbrev=0) >> .env
echo NODE_PATH="'src/'" >> .env