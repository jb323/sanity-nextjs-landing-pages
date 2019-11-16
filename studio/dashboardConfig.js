export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dcfbc3fb42b5a1ee1750196',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x1e6jdzx',
                  apiId: '51b27550-8434-421a-b274-447f14de629a'
                },
                {
                  buildHookId: '5dcfbc3f34bd6a2bd7790460',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3fuoe1vb',
                  apiId: '0cbfa3d2-73ad-4b35-b7b8-8f4adc42d2ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jb323/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3fuoe1vb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
