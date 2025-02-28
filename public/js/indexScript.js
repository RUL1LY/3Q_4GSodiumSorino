function markEmpty(input) {
    if (input.value.trim() === "") {
        input.classList.add("empty");
    } else {
        input.classList.remove("empty");
    }
}

console.log('work')