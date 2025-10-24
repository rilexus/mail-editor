class Command {
  constructor(execute, undo) {
    this.execute = execute;
    this.undo = undo;
  }
}

export const add = (value) => {
  return new Command(
    (state) => {
      state.value = state.value + value;
    },
    (state) => {
      state.value = state.value - value;
    }
  );
};
