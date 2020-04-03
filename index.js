let uniStudent = student => {
    let {name, university} = student
    console.log(`${name} from ${university}`)
}

uniStudent({
    name: 'Sanjay Krishna',
    university: 'IIN'
})