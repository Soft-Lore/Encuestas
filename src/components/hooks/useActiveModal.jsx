import { useState } from 'react'

const useActiveModal = () => {
    const [active, setActive] = useState(false);

    const toggleModal = async () => {
        await setActive(!active);
    }

    return [active, toggleModal]
}

export default useActiveModal;