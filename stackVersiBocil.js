const create_stack = () => {
  let stack = [];
  return stack;
};

const pushStack = (stack, kalimat) => {
  let filtered = kalimat.split("", kalimat.length);
  stack = filtered;
  return stack;
};


const isEmpty = (stack) => {
   return stack.length() -1 == -1
}

const isFull = (stack) => {
  return stack.length() -1 == 32
}

const kalimat_reversed = (stack, new_stack) => {
  for (let i = 0 - stack.length; i < stack.length; i++) {
    let stackPoped = stack.pop();

    new_stack.push(stackPoped);
  }
  return new_stack;
};

let stack = create_stack();
let reversed_stack = create_stack();

let isi_stack = pushStack(stack, "12345");
console.log(isi_stack);

let stack_dibalik = kalimat_reversed(isi_stack, reversed_stack);
console.log(isi_stack);

console.log(stack_dibalik);
