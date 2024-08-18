import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the package.json file
const packageJsonPath = path.resolve(__dirname, "package.json");

// Load the package.json file
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

// Extract the required Node.js versions from package.json
const requiredVersionRange = packageJson.engines?.node;

if (!requiredVersionRange) {
  console.error(
    "Error: No 'node' version specified in the 'engines' field of package.json."
  );
  process.exit(1);
}

// Get the current Node.js version
const currentVersion = process.version.slice(1); // Removes the "v" prefix, e.g., "v18.20.4" -> "18.20.4"

// Function to parse version ranges
function parseVersionRange(range) {
  const match = range.match(/^(\^|>=)?(\d+)\.(\d+)\.(\d+)$/);
  if (!match) return null;
  const [, operator, major, minor, patch] = match;
  return {
    operator: operator || "",
    major: parseInt(major, 10),
    minor: parseInt(minor, 10),
    patch: parseInt(patch, 10),
  };
}

// Function to check if the current version matches any of the required versions
function matchesRequiredVersion(currentVersion, range) {
  const parsedRange = parseVersionRange(range);
  if (!parsedRange) return false;
  const { operator, major, minor, patch } = parsedRange;

  const [currentMajor, currentMinor, currentPatch] = currentVersion
    .split(".")
    .map(Number);

  switch (operator) {
    case "^":
      return (
        currentMajor === major &&
        (currentMinor > minor ||
          (currentMinor === minor && currentPatch >= patch))
      );
    case ">=":
      return (
        currentMajor > major ||
        (currentMajor === major && currentMinor > minor) ||
        (currentMajor === major &&
          currentMinor === minor &&
          currentPatch >= patch)
      );
    default:
      return (
        currentMajor === major &&
        currentMinor === minor &&
        currentPatch >= patch
      );
  }
}

// Split the version range by "||" to handle multiple ranges
const requiredVersions = requiredVersionRange.split(" || ");

// Validate current version against the required versions
const isValidVersion = requiredVersions.some((range) =>
  matchesRequiredVersion(currentVersion, range)
);

if (!isValidVersion) {
  console.error(
    `Error: Your current Node.js version (${currentVersion}) does not satisfy the required version(s): ${requiredVersionRange}`
  );
  process.exit(1);
}