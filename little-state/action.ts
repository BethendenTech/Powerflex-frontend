// Allow payload to be a partial update of the context
export default function updateAction(
  state: any,
  payload: Partial<any> // Now payload can be partial
): any {
  console.log("state:", state);
  console.log("payload:", payload);

  return {
    ...state,
    ...payload  // Overwrite state with any provided payload properties
  };
}
