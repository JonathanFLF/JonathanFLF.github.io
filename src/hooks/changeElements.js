import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('Vamos, respondeme! ')
    const [image, setImage] = useState('https://i.pinimg.com/originals/55/da/72/55da721f5581f754ada9cca87657662f.gif')
    const [image2, setImage2] = useState()

    const options = ['Segura?', 'Segurisima?', 'Estas completamente segura?', 'No te arrepentiras?', 'Pero si estas segura?', 'ya no me quieres verdad?', 'No hay devoluciones', 'Tienes a otro', 'No hay reembolsos', 'No hay cambios', 'No hay nada', 'No hay', 'Que no hay']

    const handleButtonNo = () => {
        setIndex(index + 1)
        setImage('https://i.pinimg.com/originals/99/cf/86/99cf860a99daff075a50f195dbfa5d3f.gif')
        setImage2("")
        setTextP(options.at(index))
        
        if(index === options.length - 1) setIndex(0)
    }

    const handleButtonYes = () => {
        setImage("https://i.pinimg.com/originals/77/81/79/778179a6a9ebc7a191cd9d84489b48a6.gif")
        setImage2("https://i.pinimg.com/originals/77/81/79/778179a6a9ebc7a191cd9d84489b48a6.gif")
        setTextP('Gracias por aceptar, te amo mucho <3')
        confetti()
    }

    return { handleButtonNo, handleButtonYes, textP, image,image2 }
}