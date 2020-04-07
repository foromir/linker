export const handleSubmitUrl = ({ url, keyword, description }) => (dispatch, getState) => {
 
  // TODO: fetch item
  const item = { 
    url,
    keyword,
    description,
    expiration: "01/01/2020 12:45",
    clicks: "357",
    active: true,
    select: false
  };

  const table = getState().table.table;
  const mewTable = [...table, ...[item]]
  dispatch({ type: "SET_TABLE", payload: mewTable });
};

export const removeTableItem = ({ id }) => (dispatch, getState) => {
  const table = getState().table.table;
  const mewTable = table.filter(elem => elem.id !== id)
  dispatch({ type: "SET_TABLE", payload: mewTable });
};

export const handleselect = type => () => {
  if (type === "fb") {
    //   ....
  }

  if (type === "tw") {
    //   ....
  }

  if (type === "ln") {
    //   ....
  }
};

export const handleChecked = ({ id, checked }) => (dispatch, getState) => {
  const table = getState().table.table;
  const mewTable = table.map(elem => {
    if (elem.id === id) {
      return {
        ...elem,
        checked
      };
    }
    return elem;
  });
  // TODO: Fetch 
  // ... 
  dispatch({ type: "SET_TABLE", payload: mewTable });
};

export const removeTableItems = () => (dispatch, getState) => {
  const table = getState().table.table;
  const mewTable = table.filter(elem => !elem.checked);
  // TODO: Fetch 
  // ... 
  dispatch({ type: "SET_TABLE", payload: mewTable });
};

export const handleEditDescription = ({ id, value }) => (
  dispatch,
  getState
) => {
  const table = getState().table.table;
  const mewTable = table.map(elem => {
    if (elem.id === id) {
      return {
        ...elem,
        description: value
      };
    }
    return elem;
  });
  // TODO: Fetch 
  // ... 
  dispatch({ type: "SET_TABLE", payload: mewTable });
};

export const handleEditUrl = ({ id, value }) => (dispatch, getState) => {
  const table = getState().table.table;
  const mewTable = table.map(elem => {
    if (elem.id === id) {
      return {
        ...elem,
        url: value
      };
    }
    return elem;
  });
  // TODO: Fetch 
  // ... 
  dispatch({ type: "SET_TABLE", payload: mewTable });
};

export const removeClickTableItem = ({ id }) => (dispatch, getState) => {
  const table = getState().table.table;
  const mewTable = table.map(elem => {
    if (elem.id === id) {
      return {
        ...elem,
        clicks: 0
      };
    }
    return elem;
  });
  // TODO: Fetch 
  // ... 
  dispatch({ type: "SET_TABLE", payload: mewTable });
};

export const changeExpiredTableItem = ({ id }) => (dispatch, getState) => {
  const table = getState().table.table;
  const mewTable = table.map(elem => {
    if (elem.id === id) {
      return {
        ...elem,
        active: true
      };
    }
    return elem;
  });
  // TODO: Fetch 
  // ... 
  dispatch({ type: "SET_TABLE", payload: mewTable });
};


