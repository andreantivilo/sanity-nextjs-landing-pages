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
                  buildHookId: '5ee8f47e2a701901b20a9666',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-467wy7sz',
                  apiId: '08d85c1d-af67-4e69-a067-cd81be2f326a'
                },
                {
                  buildHookId: '5ee8f47e1fab9b0275c9ebf0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-boywsp4u',
                  apiId: 'fe4a5db8-6112-40cd-b53a-8a04839e47c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andreantivilo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-boywsp4u.netlify.app', category: 'apps'}
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
