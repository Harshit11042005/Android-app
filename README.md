# Android App

An open-source React Native mobile app. The native app source lives in [`AwesomeProject`](AwesomeProject/).

## Repository Structure

```text
.
├── AwesomeProject/          # React Native application
│   ├── android/             # Android native project
│   ├── ios/                 # iOS native project
│   ├── src/                 # TypeScript app source
│   └── __tests__/           # Jest tests
├── .github/                 # CI, issue templates, and PR template
├── docs/                    # Maintainer documentation
└── README.md
```

## Requirements

- Node.js 22.11 or newer
- npm
- Android Studio for Android development
- Xcode and CocoaPods for iOS development on macOS

## Getting Started

Install app dependencies:

```sh
cd AwesomeProject
npm ci
```

Start Metro:

```sh
npm start
```

Run Android:

```sh
npm run android
```

Run checks from the repository root:

```sh
npm run lint
npm run typecheck
npm test
```

## CI

GitHub Actions runs linting, TypeScript, Jest, and an Android debug build on pushes and pull requests to `main` or `master`.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please report vulnerabilities using the process in [SECURITY.md](SECURITY.md).

## License

This project is licensed under the [MIT License](LICENSE).
