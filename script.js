document.querySelector('h1').addEventListener('click', (e)=> {
  if(e.target.textContent === '90=50') {
    e.target.textContent = 'Coming soon'
  } else {
    e.target.textContent = '90=50'
  }
})
