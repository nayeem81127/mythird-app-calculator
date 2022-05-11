export const evaluate = ({ current, previous, operation }) => {
    const prev = parseFloat(previous)
    const cur = parseFloat(current)

    if(isNaN(prev) || isNaN(cur)){
        return ''
    }

    let result = ''
    switch(operation){
        case '+': 
            result = cur + prev
            break;

        case '-':
            result = prev - cur
            break;

        case '*':
            result = cur * prev
            break;

        case '÷':
            result = prev / cur
            break;
    }

    return result
 }