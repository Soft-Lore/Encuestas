import { useState } from 'react'

const useActiveModal = () => {
    const [active, setActive] = useState(false);

    const toggleModal = async () => {
        await setActive(!active);

        active ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
    }


    return [active, toggleModal]
}

export default useActiveModal;