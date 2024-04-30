module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports"
  ],

  importOrder: [
    "^react$", // React and react-native stuff goes at the top
    "<THIRD_PARTY_MODULES>", // Third party modules (this is a plugin keyword)
    "^@/(.*)$",
    "^../(.*)$", // Local imports in parent directories
    "^./(.*)$", // Local imports in current directory
  ],
  importOrderSeparation: true,
};
