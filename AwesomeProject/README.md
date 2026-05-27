# AwesomeProject

A React Native counter app built with the React Native CLI.

## Features

- Native Android and iOS project structure
- TypeScript application code under `src/`
- Jest test setup
- ESLint, Prettier, and TypeScript checks
- GitHub Actions CI for JavaScript checks and Android debug builds

## Project Structure

```text
AwesomeProject/
├── android/                 # Android native project
├── ios/                     # iOS native project
├── src/
│   ├── components/          # Reusable React Native components
│   └── App.tsx              # App entry component
├── __tests__/               # Jest tests
├── .github/                 # GitHub workflows and templates
└── docs/                    # Maintainer and project documentation
```

## Requirements

- Node.js 22.11 or newer
- npm
- Android Studio and an Android emulator or device
- Xcode and CocoaPods for iOS development on macOS

Follow the official React Native environment setup guide before building:
https://reactnative.dev/docs/set-up-your-environment

## Getting Started

Install dependencies:

```sh
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

Run iOS:

```sh
bundle install
bundle exec pod install --project-directory=ios
npm run ios
```

## Quality Checks

```sh
npm run lint
npm run typecheck
npm test
```

Build Android debug from the command line:

```sh
cd android
./gradlew assembleDebug
```

On Windows PowerShell:

```powershell
cd android
.\gradlew.bat assembleDebug
```

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please report security issues privately using the process in [SECURITY.md](SECURITY.md).

## License

This project is licensed under the [MIT License](LICENSE).
