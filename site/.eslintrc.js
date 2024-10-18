module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'plugin:tailwindcss/recommended', 'plugin:storybook/recommended'],
  plugins: ['tailwindcss'],
}