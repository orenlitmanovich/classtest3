class Config {
    public DeveloperGroupUrl = "http://localhost:3001/api/developergroups/";
    public meetingsPerDeveloperGroupUrl = "http://localhost:3001/api/meetings-per-developergroup/";
    public meetingsUrl = "http://localhost:3001/api/meeting/";
}

const appConfig = new Config(); // Singleton

export default appConfig;
