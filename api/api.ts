import app from "./server";
import config from "./lib/config";

const api = app.listen(config.api.port, () => {
  console.log(`Server listen on port ${config.api.port}`);
});

export default api;
