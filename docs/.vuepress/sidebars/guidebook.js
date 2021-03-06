module.exports = [
  ["/", "Back to Table of Contents"],
  ["/guidebook/", "Guidebook Home"],
  {
    title: "Ark Core",
    collapsable: false,
    children: [
      "/guidebook/core/",
      "/guidebook/core/node-lifecycle",
      "/guidebook/core/configuration",
      "/guidebook/core/database",
      "/guidebook/core/development",
      "/guidebook/core/docker",
      "/guidebook/core/events",
      "/guidebook/core/json-rpc",
      "/guidebook/core/logging",
      "/guidebook/core/plugins",
      "/guidebook/core/testing",
      "/guidebook/core/webhooks",
      "/guidebook/core/data-models"
    ]
  },
  {
    title: "Contribution Guidelines",
    collapsable: false,
    children: [
      "/guidebook/contribution-guidelines/",
      "/guidebook/contribution-guidelines/clean-code-and-tests",
      "/guidebook/contribution-guidelines/contributing",
      "/guidebook/contribution-guidelines/writing-documentation",
      "/guidebook/contribution-guidelines/git-branch-guidelines",
      "/guidebook/contribution-guidelines/git-commit-guidelines",
      "/guidebook/contribution-guidelines/migrating-your-tools-from-ark-node-to-ark-core",
      "/guidebook/contribution-guidelines/project-structuring",
      "/guidebook/contribution-guidelines/releases-and-versioning",
      "/guidebook/contribution-guidelines/repository-management"
    ]
  },
  {
    title: "Developer Guides",
    collapsable: false,
    children: [
      "/guidebook/guides/",
      "/guidebook/guides/mobile",
      "/guidebook/guides/desktop",
      "/guidebook/guides/explorer",
      "/guidebook/guides/core-commander"
    ]
  }
];
