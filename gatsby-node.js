/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios');
const path = require('path');

const profileTemplate = path.resolve('./src/templates/profile.tsx');

exports.createPages = async ({ graphql, actions }) => {
  const response = await axios.get('https://www.qccareerschool.com/profiles');
  response.data.forEach(async profile => {
    actions.createPage({
      path: `profiles/${profile.id}`,
      component: profileTemplate,
      context: {
        ...profile,
        // id: profile.id,
        // name: profile.name,
        // foo: 4,
      },
    });
  });
};

