#!/usr/bin/env node

const DEFAULT_REPOSITORY = 'Harshit11042005/Android-app';
const API_VERSION = '2022-11-28';

const issues = [
  {
    title: 'Improve the counter screen accessibility labels',
    labels: ['good first issue', 'accessibility', 'frontend'],
    body: [
      '## Goal',
      'Improve accessibility support for the counter screen so screen reader users get clearer context.',
      '',
      '## Suggested Work',
      '- Review `AwesomeProject/src/App.tsx`.',
      '- Add or improve `accessibilityLabel`, `accessibilityHint`, and `accessibilityRole` where useful.',
      '- Make sure the current count is understandable when read aloud.',
      '',
      '## Acceptance Criteria',
      '- Counter buttons have clear accessible names.',
      '- Reset action has a clear accessible name.',
      '- Existing tests, lint, and typecheck pass.',
    ].join('\n'),
  },
  {
    title: 'Add a test for the reset button behavior',
    labels: ['good first issue', 'tests'],
    body: [
      '## Goal',
      'Add test coverage for resetting the counter value.',
      '',
      '## Suggested Work',
      '- Update `AwesomeProject/__tests__/App.test.tsx`.',
      '- Render the app, increment the count, press reset, and assert the count returns to zero.',
      '- Use the existing React Native test setup.',
      '',
      '## Acceptance Criteria',
      '- A test verifies the reset flow.',
      '- `npm test` passes.',
    ].join('\n'),
  },
  {
    title: 'Extract counter styles into a dedicated style section',
    labels: ['good first issue', 'refactor', 'frontend'],
    body: [
      '## Goal',
      'Make the counter screen styling easier to scan and maintain.',
      '',
      '## Suggested Work',
      '- Review the `StyleSheet.create` block in `AwesomeProject/src/App.tsx`.',
      '- Rename style keys where clearer names would help.',
      '- Keep visual behavior the same.',
      '',
      '## Acceptance Criteria',
      '- The UI looks the same.',
      '- Style names are clear and consistent.',
      '- `npm run lint` and `npm run typecheck` pass.',
    ].join('\n'),
  },
  {
    title: 'Add a simple empty state message for count zero',
    labels: ['good first issue', 'frontend'],
    body: [
      '## Goal',
      'Show a small friendly message when the counter is at zero.',
      '',
      '## Suggested Work',
      '- Update `AwesomeProject/src/App.tsx`.',
      '- Render a short message only when the count is `0`.',
      '- Keep the layout clean on small screens.',
      '',
      '## Acceptance Criteria',
      '- Message appears only at count zero.',
      '- Message disappears when count changes.',
      '- Existing checks pass.',
    ].join('\n'),
  },
  {
    title: 'Create a reusable CounterButton component file',
    labels: ['good first issue', 'refactor', 'frontend'],
    body: [
      '## Goal',
      'Move the inline `CounterButton` component into its own reusable component file.',
      '',
      '## Suggested Work',
      '- Create `AwesomeProject/src/components/CounterButton.tsx`.',
      '- Move the component and related props there.',
      '- Import it from `AwesomeProject/src/App.tsx`.',
      '',
      '## Acceptance Criteria',
      '- App behavior remains unchanged.',
      '- The new component is typed with TypeScript.',
      '- Lint and typecheck pass.',
    ].join('\n'),
  },
  {
    title: 'Document Android emulator setup tips',
    labels: ['good first issue', 'documentation'],
    body: [
      '## Goal',
      'Help new contributors run the app on Android more easily.',
      '',
      '## Suggested Work',
      '- Update the root `README.md` or add a short doc in `docs/`.',
      '- Include practical notes for Android Studio, SDK setup, and running an emulator.',
      '- Keep the docs concise and beginner friendly.',
      '',
      '## Acceptance Criteria',
      '- Documentation explains the basic Android setup path.',
      '- Links to official React Native setup docs remain included.',
    ].join('\n'),
  },
  {
    title: 'Add troubleshooting notes for common npm setup issues',
    labels: ['good first issue', 'documentation'],
    body: [
      '## Goal',
      'Add a short troubleshooting section for common install and setup problems.',
      '',
      '## Suggested Work',
      '- Update `README.md` with a troubleshooting section.',
      '- Mention Node version, running commands from the correct folder, and reinstalling dependencies.',
      '- Avoid adding platform-specific advice that is not verified.',
      '',
      '## Acceptance Criteria',
      '- Troubleshooting section is clear and concise.',
      '- Commands are formatted in code blocks.',
    ].join('\n'),
  },
  {
    title: 'Add npm script for Android debug build',
    labels: ['good first issue', 'build', 'developer-experience'],
    body: [
      '## Goal',
      'Make the Android debug build easier to run from npm.',
      '',
      '## Suggested Work',
      '- Add a script to `AwesomeProject/package.json`, such as `android:debug`.',
      '- The script should run the Gradle debug build from the Android folder.',
      '- Optionally add a root script that delegates to the app script.',
      '',
      '## Acceptance Criteria',
      '- Contributors can run one npm command for the Android debug build.',
      '- README command examples are updated if needed.',
      '- Existing checks pass.',
    ].join('\n'),
  },
  {
    title: 'Improve Header component test coverage',
    labels: ['good first issue', 'tests', 'frontend'],
    body: [
      '## Goal',
      'Add focused test coverage for the `Header` component.',
      '',
      '## Suggested Work',
      '- Create a test for `AwesomeProject/src/components/Header.tsx`.',
      '- Verify that a provided title renders correctly.',
      '- Keep the test simple and consistent with the existing Jest setup.',
      '',
      '## Acceptance Criteria',
      '- Header test exists and passes.',
      '- `npm test` passes.',
    ].join('\n'),
  },
  {
    title: 'Add screenshots section placeholder to README',
    labels: ['good first issue', 'documentation'],
    body: [
      '## Goal',
      'Prepare the README for future app screenshots.',
      '',
      '## Suggested Work',
      '- Add a `Screenshots` section to the root `README.md`.',
      '- Include a short note explaining where screenshots should go.',
      '- Do not add unrelated images.',
      '',
      '## Acceptance Criteria',
      '- README has a clear screenshots section.',
      '- The section is easy for future contributors to update.',
    ].join('\n'),
  },
];

const labelColors = {
  accessibility: '0E8A16',
  build: '5319E7',
  documentation: '0075CA',
  'developer-experience': 'C5DEF5',
  frontend: 'FBCA04',
  'good first issue': '7057FF',
  refactor: 'D4C5F9',
  tests: '1D76DB',
};

const labelDescriptions = {
  accessibility: 'Improves app accessibility support',
  build: 'Related to build scripts or packaging',
  documentation: 'Documentation updates',
  'developer-experience': 'Improves contributor or maintainer workflow',
  frontend: 'React Native UI work',
  'good first issue': 'Friendly for new contributors',
  refactor: 'Code cleanup without behavior changes',
  tests: 'Test coverage improvements',
};

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const repositoryArg = args.find(arg => !arg.startsWith('--'));
const repository =
  repositoryArg || process.env.GITHUB_REPOSITORY || DEFAULT_REPOSITORY;
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

if (!/^[^/\s]+\/[^/\s]+$/.test(repository)) {
  fail(`Invalid repository "${repository}". Use owner/repo format.`);
}

if (!dryRun && !token) {
  fail('Missing token. Set GITHUB_TOKEN or GH_TOKEN before running this script.');
}

const [owner, repo] = repository.split('/');
const uniqueLabels = [...new Set(issues.flatMap(issue => issue.labels))];

console.log(`${dryRun ? 'Previewing' : 'Creating'} ${issues.length} issues for ${repository}`);

if (dryRun) {
  for (const issue of issues) {
    console.log(`\n- ${issue.title}`);
    console.log(`  labels: ${issue.labels.join(', ')}`);
  }
  process.exit(0);
}

for (const label of uniqueLabels) {
  await ensureLabel(label);
}

for (const issue of issues) {
  const existingIssue = await findExistingIssue(issue.title);

  if (existingIssue) {
    console.log(`Skipped existing issue: #${existingIssue.number} ${issue.title}`);
    continue;
  }

  const createdIssue = await github(`/repos/${owner}/${repo}/issues`, {
    method: 'POST',
    body: {
      title: issue.title,
      body: issue.body,
      labels: issue.labels,
    },
  });

  console.log(`Created issue: #${createdIssue.number} ${createdIssue.title}`);
}

async function ensureLabel(name) {
  const encodedName = encodeURIComponent(name);
  const label = {
    name,
    color: labelColors[name] || 'EDEDED',
    description: labelDescriptions[name] || '',
  };

  const response = await github(`/repos/${owner}/${repo}/labels/${encodedName}`, {
    method: 'GET',
    allowNotFound: true,
  });

  if (response) {
    await github(`/repos/${owner}/${repo}/labels/${encodedName}`, {
      method: 'PATCH',
      body: label,
    });
    console.log(`Updated label: ${name}`);
    return;
  }

  await github(`/repos/${owner}/${repo}/labels`, {
    method: 'POST',
    body: label,
  });
  console.log(`Created label: ${name}`);
}

async function findExistingIssue(title) {
  const query = new URLSearchParams({
    state: 'all',
    per_page: '100',
  });
  const existingIssues = await github(`/repos/${owner}/${repo}/issues?${query}`, {
    method: 'GET',
  });

  return existingIssues.find(issue => issue.title === title);
}

async function github(path, options = {}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'User-Agent': 'android-app-good-first-issue-script',
    'X-GitHub-Api-Version': API_VERSION,
  };

  const response = await fetch(`https://api.github.com${path}`, {
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (options.allowNotFound && response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const text = await response.text();
    fail(`GitHub API error ${response.status} for ${path}: ${text}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
