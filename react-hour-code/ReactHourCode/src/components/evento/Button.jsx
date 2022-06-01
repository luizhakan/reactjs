export default function Button({text, evento}){
    return <button onClick={evento}>{text}</button>
}