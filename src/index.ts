export type JSONPrimitive = string | number | boolean | null;
export type JSONObject = { [member: string]: JSONValue };
export type JSONArray = Array<JSONValue>;
export type JSONValue<P = JSONPrimitive> = P | JSONObject | JSONArray;
