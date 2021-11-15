import Styles from "./css/styles.module.css"
const Filter = () => {
    return (
        <div className={Styles.filter}>
           <div className={Styles.inner}>
               <div className={Styles.imgCon}><img src="./Images/buuka logo.png" alt="Logo" /></div>
               <div className={Styles.filter}>
                   <form className={Styles.filterInput} >
                       <input type="search" name="search" id="search"  placeholder="&#128270; Search Services or Vendors" />
                   </form>
                   <form className={Styles.filterSelect}>
                       <select name="filter" id="filter">
                            <option value="price">Filter</option>
                           <option value="price">Price</option>
                           <option value="price">People</option>
                           <option value="price">Name</option>
                       </select>
                   </form>
               </div>

               <a className={Styles.profilepicCon} href="/">
                   <div>
                        <img src="./images/test1.png" alt="Profile" />
                   </div>
               </a>
           </div>
        </div>
    )
}

export default Filter
