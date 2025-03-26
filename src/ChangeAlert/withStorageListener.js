import React from "react";  

/* function withStorageListener(WrappedComponent) { */
function useStorageListener(sincronize) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage',(change) => {
            if (change.key === 'TODOS_V1') {
                console.log("Hubo cambios en TODOS_V1.");
                setStorageChange(true);
            }
        });
        
        const toggleShow = () => {
            /* props.sincronize(); */
            sincronize();
            setStorageChange(false);
        };

        return {
            show: storageChange,
            toggleShow: toggleShow,
        };
        /* return (    
            <WrappedComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        ); */
    }
}

/* export { withStorageListener }; */
export { useStorageListener };
