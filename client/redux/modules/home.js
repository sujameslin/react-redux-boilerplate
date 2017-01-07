const TEST = 'TEST';

export default function (state = {}, action) {
  switch (action.type) {
    case TEST:
      return {
        invoked: true,
        ...state
      };

    default:
      return state;
  }
}

export function doTest() {
  return {
    type: TEST
  };
}
