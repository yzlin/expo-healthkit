import {
  type ConfigPlugin,
  createRunOncePlugin,
  withEntitlementsPlist,
  withInfoPlist,
  withPlugins,
} from "expo/config-plugins";

import pkg from "../../package.json";

interface AppConfig extends EntitlementsConfig, InfoPlistConfig {}

interface EntitlementsConfig {
  background?: boolean;
}

const withEntitlementsPlugin: ConfigPlugin<EntitlementsConfig> = (
  config,
  { background = false },
) =>
  withEntitlementsPlist(config, (config) => {
    config.modResults["com.apple.developer.healthkit"] = true;
    config.modResults["com.apple.developer.healthkit.access"] = [];

    if (background !== false) {
      config.modResults["com.apple.developer.healthkit.background-delivery"] =
        true;
    }

    return config;
  });

interface InfoPlistConfig {
  NSHealthShareUsageDescription: string | boolean;
  NSHealthUpdateUsageDescription?: string | boolean;
}

const withInfoPlistPlugin: ConfigPlugin<InfoPlistConfig> = (config, props) =>
  withInfoPlist(config, (config) => {
    if (props.NSHealthShareUsageDescription !== false) {
      let description = `${config.name} wants to read your health data`;
      if (typeof props.NSHealthShareUsageDescription === "string") {
        description = props.NSHealthShareUsageDescription;
      }
      config.modResults.NSHealthShareUsageDescription = description;
    }

    if (props.NSHealthUpdateUsageDescription !== false) {
      let description = `${config.name} wants to update your health data`;
      if (typeof props.NSHealthUpdateUsageDescription === "string") {
        description = props.NSHealthUpdateUsageDescription;
      }
      config.modResults.NSHealthUpdateUsageDescription = description;
    }

    return config;
  });

const plugin: ConfigPlugin<AppConfig> = (config, props) =>
  withPlugins(config, [
    [withEntitlementsPlugin, props],
    [withInfoPlistPlugin, props],
  ]);

export default createRunOncePlugin(plugin, pkg.name, pkg.version);
