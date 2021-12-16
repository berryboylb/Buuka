import Styles from "./css/styles.module.css"
const Logout = ({deleted, setPopup}) => {
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:8000/cardDetails/${deleted.id}`, {
            method: 'DELETE',
        });
         res.status === 200 ? setPopup(false) :  alert('Error Deleting This card');
        // ? setCards(cards.filter((card) => card.id !== id))
        // : alert('Error Deleting This Task')
    }
    //console.log(deleted.id)

    return (
        <div className={Styles.logout}>
            <div className={Styles.inner}>
                {/* {<pre>{JSON.stringify(deleted, undefined, 2)}</pre>} */}
                <h3>Remove Card</h3>
                <p>Are you sure you want to remove card? This action cannot be revered when done.</p>
                <div>
                    <button onClick={() => setPopup(false)} className={Styles.cancel}>Cancel</button>
                    <button onClick={handleDelete}  className={Styles.log}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Logout