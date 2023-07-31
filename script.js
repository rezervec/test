const foo = () => {
  console.log('hi')
}

for (let i = 0; i < 3; i++) {
  console.log(i)
  foo()
}