// capitalize the string provided

const capitalize = (str) => {
    let words = str.split(' ')
    words = words.map(word => word[0].toUpperCase() + word.slice(1))
    return words.join(" ");
}

export { capitalize }