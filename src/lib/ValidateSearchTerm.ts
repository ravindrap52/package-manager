export const validateSearchTerm = (value: string): boolean => {
  if (!value) return true;
  const npmPackageNameRegex = /^@?[a-z0-9][a-z0-9._\-+@]{0,213}$/;
  return npmPackageNameRegex.test(value);
};
