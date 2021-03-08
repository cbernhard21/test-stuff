export async function displayHeader() {
  const response = await fetch('./header.html')
  const data = await response.text();
  document.querySelector('.header').innerHTML = data
}

export async function displayFooter() {
  const response = await fetch('./footer.html')
  const data = await response.text();
  document.querySelector('.footer').innerHTML = data
}
