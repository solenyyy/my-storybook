module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ["**/?(*.)+(test).[tj]s?(x)"],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
