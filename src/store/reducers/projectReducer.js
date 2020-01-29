const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet consectetur, "
    },
    {
      id: "2",
      title: "help me find Mario",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet consectetur, "
    },
    {
      id: "3",
      title: "help me find Toughyear",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet consectetur, "
    }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("there was an error creating project: " + action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
