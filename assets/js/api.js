
async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/Luizfcs35/Portfolio.DIO/main/assets/data/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}