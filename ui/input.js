function Input(option) {
    return `<input value="${option?.value ?? ""}" onchange="${option?.onChange ?? ""}" />`
}

module.exports = Input