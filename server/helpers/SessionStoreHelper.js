class SessionStoreHelper {
  constructor() {}

  async storeCallback  (session) {
    this.session = session;
    return true;
  };

  async loadCallback (id) {
    // Never gets here if there is more than 1 minute
    // between /auth and /auth/callback
    return this.session;
  };

  async deleteCallback (id) {
    this.session = null;
    return true;
  };
}

export default SessionStoreHelper;
