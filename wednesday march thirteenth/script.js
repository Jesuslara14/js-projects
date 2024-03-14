function secondLargest(list){
    for(let i = 0; i < list.length; i++){
        const moreThan = list.filter(number => {
            return number > list[i]
        })

        if (moreThan.length == 1) return list[i]
    }
}

function isPalindrome(term){
    term = term.toLowerCase()
    let reverseString = term.trim().split(' ').join('').split('').reverse().join('')

    return reverseString == term.trim().split(' ').join('')
}

function firstLongest(str){
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++){
        let longerThan = words.filter(w => {
            return w.length > words[i].length
        })

        if (longerThan.length == 0) return words[i]
    }
}

function reverse(str){
    return str.split('').reverse().join('')
}

// capitalist function
function capitalize(str){
    let words = str.split(' ').map(w => {
        return w.charAt(0).toUpperCase() + w.slice(1)
    })

    return words.join(' ')
}

function removeDuplicates(arr){
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] == arr[j] && i != j) {
                arr.splice(j, 1)
            }
        }
    }

    return arr
}