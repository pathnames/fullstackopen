
const AddNotification = ({name}) => {
    if (name === null) {
        return null 
    }
    const notificationStyle = {
        color: 'green',
        font: 'italic',
        fontSize: 16
    }
    return (
        <div style={notificationStyle}>
            <p>Added {name} successfully</p>
        </div>
    );
}

export default AddNotification;