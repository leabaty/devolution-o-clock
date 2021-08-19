// ACTION TYPES
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

// ACTION CREATORS
export const changeFieldValue = (key, value) => ({
  type: CHANGE_FIELD_VALUE,
  value,
  key,
});
