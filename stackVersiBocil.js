const create_stack = () => {
  let stack = [];
  return stack;
};

const pushStack = (stack, kalimat) => {
  let filtered = kalimat.split("", kalimat.length);
  stack = filtered;
  return stack;
};

const kalimat_reversed = (stack, new_stack) => {
  for (let i = 1 - stack.length; i < stack.length; i++) {
    let stackPoped = stack.pop();

    new_stack.push(stackPoped);
  }
  return new_stack;
};

let stack = create_stack();
let reversed_stack = create_stack();

let isi_stack = pushStack(stack, "randi");
console.log(isi_stack);

let stack_dibalik = kalimat_reversed(isi_stack, reversed_stack);
console.log(isi_stack);

console.log(stack_dibalik);
