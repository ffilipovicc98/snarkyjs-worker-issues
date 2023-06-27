await new Promise((resolve) => setTimeout(resolve, 2000));

const addOneTopLevelAwait = (x: number) => x + 1;

export { addOneTopLevelAwait };
