install:
		npm ci
gendiff:
		node bin/index-gendiff.js
publish:
		npm publish --dry-run
lint:
		npx eslint .
test:
		npx jest