install:
		npm ci
gendiff:
		node bin/index-gendiff.js
publish:
		npm publish --dry-run
lint:
		npx eslint .
test:
		npm test
test-coverage:
		npm test -- --coverage --coverageProvider=v8