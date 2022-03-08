import illustrationImg from '../assets/images/illustration.svg'

export function Home(){
    return (
        <div>
            <aside>
               <img src={illustrationImg} alt="illustração " />
               <strong>Crie salas de Q</strong>
            </aside>
        </div>
    )
}