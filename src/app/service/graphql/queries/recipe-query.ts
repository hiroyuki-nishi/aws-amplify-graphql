export const queryList = `query {
  listApplications {
    items {
      company_id
      id
      itunesstore_id
      updated
    }
  }
  listProfiles {
    items {
      id
      identifier
      company_id
      updated
    }
  }
  listMail {
    items {
      id
      company_id
      email
      updated
    }
  }
}`;

