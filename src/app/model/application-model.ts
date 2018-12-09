export class Application {
  company_id: string;
  id: string;
  itunesstore_id: string;
  updated: string;
  static create(
    company_id: string,
    id: string,
    itunesstore_id: string,
    updated: string,
  ): Application {
    const a = new Application();
    a.company_id = company_id;
    a.id = id;
    a.itunesstore_id = itunesstore_id;
    a.updated = updated;
    return a;
  }
}
