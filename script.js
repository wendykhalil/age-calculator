let input = document.getElementById("date")
input.max = new Date().toISOString().split('T')[0]
let result = document.getElementById("result")

function days(year, month) {
    return new Date(year, month, 0).getDate()
}

function cal() {
    let date = new Date(input.value)
    let m1 = date.getMonth() + 1
    let d1 = date.getDate()
    let y1 = date.getFullYear()

    let current = new Date()
    let m2 = current.getMonth() + 1
    let d2 = current.getDate()
    let y2 = current.getFullYear()

    let y3 = y2 - y1
    let m3
    let d3

    if (m2 >= m1) {
        m3 = m2 - m1
    } else {
        y3--
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1) {
        d3 = d2 - d1
    } else {
        m3--
        if (m3 < 0) {
            m3 = 11
            y3--
        }
        d3 = days(y2, m2 - 1) + d2 - d1
    }

    result.innerHTML = `you are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days`
}
