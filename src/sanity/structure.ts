import type { StructureResolver } from 'sanity/structure'


export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Management')
    .items([
      S.documentTypeListItem('pageInfo').title('Page Info'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('social').title('Social Links'),
      S.divider(),
      // Include all other document types except the ones listed above
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['pageInfo', 'experience', 'skill', 'project', 'social'].includes(item.getId()!)
      ),
    ])
