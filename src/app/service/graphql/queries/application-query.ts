export const listApplicationsQuery = `query {
  listApplications {
    items {
      company_id
      id
      itunesstore_id
      updated
    }
  }
}`;
