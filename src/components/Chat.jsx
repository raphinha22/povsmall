const MessengerButton = () => {
    const openMessenger = () => {
        const fbUserId = "100055347733672"; // Your Facebook User ID
        const message = encodeURIComponent("Hello, I need support."); // Auto-filled message
        window.open(`https://m.me/${fbUserId}?text=${message}`, "_blank");
    };

    return (
        <button 
            onClick={openMessenger} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Chat on Messenger
        </button>
    );
};

export default MessengerButton;
