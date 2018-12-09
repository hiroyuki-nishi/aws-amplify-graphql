export const listProfilesQuery = `query {
listProfiles {
    items {
      id
      identifier
      company_id
      updated
    }
  }
}`
