export const TEST_ACTION = 'TEST_ACTION';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
export const GET_PASSWORD = 'GET_PASSWORD';
export const SEE_PASSWORD = 'SEE_PASSWORD';
export const SHOW_BOX = 'SHOW_BOX';
export const CHANGE_COLOR = 'CHANGE_COLOR';


export const testAction = () => ({
  type: TEST_ACTION,
});

export const changeField = (field, value) => ({
  type: CHANGE_FIELD,
  field: field,
  value: value,
});
  
  export const seePassword = (seePassword) => ({
    type: SEE_PASSWORD,
    trigerVisible: seePassword,
  }); 

  export const showBox = () => ({
    type: SHOW_BOX,
  });

  export const changeColor = () => ({
    type: CHANGE_COLOR,
  });
