# Android App

An open-source React Native mobile app built with the React Native CLI, TypeScript, Jest, ESLint, and GitHub Actions.

The React Native application lives in [`AwesomeProject`](AwesomeProject/). The repository root contains shared open-source files such as CI configuration, contribution guidelines, security policy, and license information.

## Features

- React Native CLI project with Android and iOS native folders
- TypeScript source code organized under `AwesomeProject/src`
- Reusable component structure
- Jest test setup
- ESLint and TypeScript validation
- GitHub Actions CI for linting, type checking, tests, and Android debug builds
- Open-source community files and issue templates

## Repository Structure

```text
.
|-- AwesomeProject/
|   |-- android/              # Android native project
|   |-- ios/                  # iOS native project
|   |-- src/                  # React Native TypeScript source
|   |   |-- components/       # Reusable components
|   |   `-- App.tsx           # Main app component
|   |-- __tests__/            # Jest tests
|   |-- package.json          # App scripts and dependencies
|   `-- README.md             # App-specific notes
|-- .github/
|   |-- workflows/ci.yml      # GitHub Actions workflow
|   |-- ISSUE_TEMPLATE/       # Bug and feature templates
|   `-- PULL_REQUEST_TEMPLATE.md
|-- docs/                     # Maintainer documentation
|-- CHANGELOG.md
|-- CODE_OF_CONDUCT.md
|-- CONTRIBUTING.md
|-- LICENSE
|-- SECURITY.md
`-- README.md
```

## Requirements

- Node.js 22.11 or newer
- npm
- Android Studio, Android SDK, and an emulator or device
- Xcode and CocoaPods for iOS development on macOS

Before running the app, complete the official React Native environment setup:
https://reactnative.dev/docs/set-up-your-environment

## Setup

Install dependencies from the app folder:

```sh
cd AwesomeProject
npm ci
```

Start the Metro bundler:

```sh
npm start
```

In another terminal, run the app on Android:

```sh
npm run android
```

For iOS on macOS:

```sh
bundle install
bundle exec pod install --project-directory=ios
npm run ios
```

## Development Commands

You can run these commands from the repository root:

```sh
npm run lint
npm run typecheck
npm test
```

Or from `AwesomeProject`:

```sh
npm run lint
npm run typecheck
npm test
```

Build the Android debug APK:

```powershell
cd AwesomeProject\android
.\gradlew.bat assembleDebug
```

On macOS or Linux:

```sh
cd AwesomeProject/android
./gradlew assembleDebug
```

## Continuous Integration

GitHub Actions runs on pushes and pull requests to `main` or `master`.

The CI workflow checks:

- Dependency installation with `npm ci`
- ESLint
- TypeScript compilation with `tsc --noEmit`
- Jest tests
- Android debug build

Workflow file: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

For issue reports, use the templates in [`.github/ISSUE_TEMPLATE`](.github/ISSUE_TEMPLATE/).

## Security

Please do not open public issues for security vulnerabilities. Follow the private reporting process in [SECURITY.md](SECURITY.md).

## License

This project is licensed under the [MIT License](LICENSE).
