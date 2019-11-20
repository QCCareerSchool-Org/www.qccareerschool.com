/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const axios = require('axios');
const path = require('path');

exports.createPages = async ({ actions }) => {
  if (process.env.MODE !== 'prod') {
    console.log('WARNING: Set environment variable `mode` equal to "prod" to build all profile pages');
  }
  const profileTemplate = path.resolve('./src/templates/profile.tsx');
  const response = await axios.get('https://www.qccareerschool.com/profiles/');
  response.data
    .filter((profile, index) => process.env.MODE === 'prod' ? true : index < 100)
    .forEach(async profile => {
      actions.createPage({
        path: `profiles/${profile.id}`,
        component: profileTemplate,
        context: {
          ...profile,
        },
      });
    });
};

