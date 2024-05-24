import React, {useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { requestPermission, onMessageListener } from "./firebase";

function Notification() {
    const [notification, setNotification] = useState({ title: "", body: "" });
    useEffect(() =>{
        requestPermission();
        const unsubscribe = onMessageListener().then(payload => {
            setNotification({
                title: payload?.notification?.title,
                body: payload?.notification?.body
            });
            toast.success(`${payload?.notification?.title}: ${payload?.notification?.body}`,
            {
                autoClose: 3000, // Fermer la notification après 3 secondes
                position: toast.POSITION.BOTTOM_RIGHT // Afficher la notification en bas à droite
            }
            );
        });
        return () => {
            unsubscribe.catch(err => console.log("failed: ", err));
        };
    }, []);
    return(
        <div>
            <Toaster />
        </div>
    );
}
export default Notification;