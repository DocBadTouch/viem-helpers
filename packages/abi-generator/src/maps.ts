export const RawAbiTypeGenericNameMap = new Map<string, string>();
RawAbiTypeGenericNameMap.set("string", "name");
RawAbiTypeGenericNameMap.set("address", "address");
RawAbiTypeGenericNameMap.set("address[]", "address[]");
RawAbiTypeGenericNameMap.set("uint256", "amount");
RawAbiTypeGenericNameMap.set("uint256[]", "amounts");
RawAbiTypeGenericNameMap.set("uint8", "amount");
RawAbiTypeGenericNameMap.set("uint8[]", "amounts");
RawAbiTypeGenericNameMap.set("uint32", "amount");
RawAbiTypeGenericNameMap.set("uint32[]", "amounts");
RawAbiTypeGenericNameMap.set("bool", "bool");
RawAbiTypeGenericNameMap.set("bool[]", "bools");

export const RawAbiTypeToTypeScriptTypeMap = new Map<string, string>();
RawAbiTypeToTypeScriptTypeMap.set("string", "string");
RawAbiTypeToTypeScriptTypeMap.set("address", "`0x${string}`");
RawAbiTypeToTypeScriptTypeMap.set("address[]", "`0x${string}`[]");
RawAbiTypeToTypeScriptTypeMap.set("uint256", "bigint");
RawAbiTypeToTypeScriptTypeMap.set("uint256[]", "bigint[]");
RawAbiTypeToTypeScriptTypeMap.set("uint8", "number | bigint");
RawAbiTypeToTypeScriptTypeMap.set("uint8[]", "(number | bigint)[]");
RawAbiTypeToTypeScriptTypeMap.set("uint32", "number | bigint");
RawAbiTypeToTypeScriptTypeMap.set("uint32[]", "(number | bigint)[]");
RawAbiTypeToTypeScriptTypeMap.set("bool", "boolean");
RawAbiTypeToTypeScriptTypeMap.set("bool[]", "boolean[]");
