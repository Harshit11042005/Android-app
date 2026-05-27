# AwesomeProject

The React Native app package for this repository.

For full project documentation, CI details, contribution guidelines, and license information, see the root [README.md](../README.md).

## App Structure

```text
AwesomeProject/
|-- android/                 # Android native project
|-- ios/                     # iOS native project
|-- src/
|   |-- components/          # Reusable React Native components
|   `-- App.tsx              # Main app component
|-- __tests__/               # Jest tests
|-- index.js                 # Native app registration
|-- package.json             # App scripts and dependencies
`-- tsconfig.json            # TypeScript config
```

## Local Setup

```sh
npm ci
npm start
```

Run Android:

```sh
npm run android
```

Run iOS on macOS:

```sh
bundle install
bundle exec pod install --project-directory=ios
npm run ios
```

## Checks

```sh
npm run lint
npm run typecheck
npm test
```
