let initialState = {
  files: [],
};

export const filesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FILES':
      return {
        ...state,
        files: action.files,
      };
    default:
      return { ...state };
  }
};

export const setFiles = (files) => ({
  type: 'GET_FILES',
  files: files,
});
