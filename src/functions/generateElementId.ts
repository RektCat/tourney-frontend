let num: number = 0;
function nextId(): string {
  return "nextId" + num++;
}

export default nextId;
