// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { FuncWithAllOptionalInputsArgs, FuncWithAllOptionalInputsResult, FuncWithAllOptionalInputsOutputArgs } from "./funcWithAllOptionalInputs";
export const funcWithAllOptionalInputs: typeof import("./funcWithAllOptionalInputs").funcWithAllOptionalInputs = null as any;
export const funcWithAllOptionalInputsOutput: typeof import("./funcWithAllOptionalInputs").funcWithAllOptionalInputsOutput = null as any;
utilities.lazyLoad(exports, ["funcWithAllOptionalInputs","funcWithAllOptionalInputsOutput"], () => require("./funcWithAllOptionalInputs"));

export { FuncWithConstInputArgs } from "./funcWithConstInput";
export const funcWithConstInput: typeof import("./funcWithConstInput").funcWithConstInput = null as any;
utilities.lazyLoad(exports, ["funcWithConstInput"], () => require("./funcWithConstInput"));

export { FuncWithDefaultValueArgs, FuncWithDefaultValueResult, FuncWithDefaultValueOutputArgs } from "./funcWithDefaultValue";
export const funcWithDefaultValue: typeof import("./funcWithDefaultValue").funcWithDefaultValue = null as any;
export const funcWithDefaultValueOutput: typeof import("./funcWithDefaultValue").funcWithDefaultValueOutput = null as any;
utilities.lazyLoad(exports, ["funcWithDefaultValue","funcWithDefaultValueOutput"], () => require("./funcWithDefaultValue"));

export { FuncWithDictParamArgs, FuncWithDictParamResult, FuncWithDictParamOutputArgs } from "./funcWithDictParam";
export const funcWithDictParam: typeof import("./funcWithDictParam").funcWithDictParam = null as any;
export const funcWithDictParamOutput: typeof import("./funcWithDictParam").funcWithDictParamOutput = null as any;
utilities.lazyLoad(exports, ["funcWithDictParam","funcWithDictParamOutput"], () => require("./funcWithDictParam"));

export { FuncWithEmptyOutputsArgs } from "./funcWithEmptyOutputs";
export const funcWithEmptyOutputs: typeof import("./funcWithEmptyOutputs").funcWithEmptyOutputs = null as any;
utilities.lazyLoad(exports, ["funcWithEmptyOutputs"], () => require("./funcWithEmptyOutputs"));

export { FuncWithListParamArgs, FuncWithListParamResult, FuncWithListParamOutputArgs } from "./funcWithListParam";
export const funcWithListParam: typeof import("./funcWithListParam").funcWithListParam = null as any;
export const funcWithListParamOutput: typeof import("./funcWithListParam").funcWithListParamOutput = null as any;
utilities.lazyLoad(exports, ["funcWithListParam","funcWithListParamOutput"], () => require("./funcWithListParam"));

export { GetBastionShareableLinkArgs, GetBastionShareableLinkResult, GetBastionShareableLinkOutputArgs } from "./getBastionShareableLink";
export const getBastionShareableLink: typeof import("./getBastionShareableLink").getBastionShareableLink = null as any;
export const getBastionShareableLinkOutput: typeof import("./getBastionShareableLink").getBastionShareableLinkOutput = null as any;
utilities.lazyLoad(exports, ["getBastionShareableLink","getBastionShareableLinkOutput"], () => require("./getBastionShareableLink"));

export { GetClientConfigResult } from "./getClientConfig";
export const getClientConfig: typeof import("./getClientConfig").getClientConfig = null as any;
utilities.lazyLoad(exports, ["getClientConfig"], () => require("./getClientConfig"));

export { GetIntegrationRuntimeObjectMetadatumArgs, GetIntegrationRuntimeObjectMetadatumResult, GetIntegrationRuntimeObjectMetadatumOutputArgs } from "./getIntegrationRuntimeObjectMetadatum";
export const getIntegrationRuntimeObjectMetadatum: typeof import("./getIntegrationRuntimeObjectMetadatum").getIntegrationRuntimeObjectMetadatum = null as any;
export const getIntegrationRuntimeObjectMetadatumOutput: typeof import("./getIntegrationRuntimeObjectMetadatum").getIntegrationRuntimeObjectMetadatumOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationRuntimeObjectMetadatum","getIntegrationRuntimeObjectMetadatumOutput"], () => require("./getIntegrationRuntimeObjectMetadatum"));

export { ListStorageAccountKeysArgs, ListStorageAccountKeysResult, ListStorageAccountKeysOutputArgs } from "./listStorageAccountKeys";
export const listStorageAccountKeys: typeof import("./listStorageAccountKeys").listStorageAccountKeys = null as any;
export const listStorageAccountKeysOutput: typeof import("./listStorageAccountKeys").listStorageAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listStorageAccountKeys","listStorageAccountKeysOutput"], () => require("./listStorageAccountKeys"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as types from "./types";

export {
    types,
};
pulumi.runtime.registerResourcePackage("mypkg", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:mypkg") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
