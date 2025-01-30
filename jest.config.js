export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
