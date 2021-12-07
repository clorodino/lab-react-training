export default function Greetings(props) {
    let hello= ""
    switch (props.lang) {
        case "de": 
            hello="hallo"
            break
        case "en": 
            hello="hello"
            break
        case "es": 
            hello="hola"
            break
        case "fr": 
            hello="bonjour"
            break
        default:
            hello="hi"

    }
    return (
        <p>{hello} {props.children}</p>
    )
}