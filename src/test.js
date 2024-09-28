function doSomething() {
    var code = document.getElementById('code').value
    var input = document.getElementById('input').value
    var output = ""
    var stack = []
    var pointer = 0;
    const memory = Array(30000).fill(0);
    for (let i = 0; i < code.length; i++) {
        switch (code[i]) {
            case '+' :
                memory[pointer]++
                break
            case '-' :
                memory[pointer]--
                break
            case '>' :
                pointer++
                break
            case '<' :
                pointer--
                break
            case '.' :
                output = output + String.fromCharCode(memory[pointer])
                document.getElementById('output').value = output
                break
            case ',' :
                memory[pointer] = input[0]
                input = input.substring(1)
                document.getElementById('input').value = input
                break
            case '[' :
                if (memory[pointer] === 0) {
                    var brackets = 1
                    while (code[i] !== ']' || brackets > 0) {
                        i++
                        if (code[i] === '[')
                            brackets++
                        if (code[i] === ']')
                            brackets--
                    }
                } else {
                    stack.push(i - 1)
                }
                break
            case ']' :
                i = stack.pop()
                break
        }
    }
    return false;
}