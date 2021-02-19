var domain = 'http://81.171.6.213:8280';

var keyCloakConf = {
  authRealm: "i-TRIBOMAT",
  authUrl: "http://".concat(domain, "/auth"),
  authClientId: "web",
  //logoutRedirectUri: "https://".concat(domain),
};

const CONST = {
    keyCloakConf: keyCloakConf,
};

export default CONST