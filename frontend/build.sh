#!/bin/sh

rm -rf ./docs

docker compose run --rm docs sh -c '
{
  yarn install;
  yarn generate;
}
'
rsync -av "./frontend/app/.output/public/" "./docs/"