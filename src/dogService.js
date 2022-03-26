export default async function dogPhoto() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random")
  const data = await response.json()
  return data.message
}