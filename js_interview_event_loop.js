async function func() {
console.log("print A");
setTimeout(()=>console.log("print B"), 0);
await Promise.resolve().then(()=>console.log("print C"));
console.log("print D");
}
func();
console.log("print E");