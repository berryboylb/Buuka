import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive';
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";
import Styles from "./css/styles.module.css"
const Filter = () => {
    let navigate = useNavigate();
    const [filter, setFilter] = useState(false);
    const [searchField, setSearchField] = useState("");
    const isMobile = useMediaQuery({ query: `(max-width: 540px)` });
    const triggerFilter = () => {
        if(isMobile) {
            setFilter(!filter)
        }
    }
    const handleForm = (e) => {
        e.preventDefault();
        console.log(searchField)
        navigate(`/search/:${searchField}`)
        
    }
    return (
        <div className={Styles.filter}>
           <div className={Styles.inner}>
               <div className={Styles.imgCon}><img src="/Images/buuka logo.png" alt="Logo" /></div>
               <div className={Styles.filterr}>
                   <form className={Styles.filterInput} onSubmit={handleForm}>
                       <input type="search" name="search" id="search" onChange={(e)=> setSearchField(e.target.value)}  value={searchField}   placeholder="&#128270; Search Services or Vendors" />
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

               {filter && <div className={Styles.filterer}>
                   <form className={Styles.filterInput} onSubmit={handleForm}>
                       <input type="search" name="search" id="search" onChange={(e)=> setSearchField(e.target.value)}  value={searchField}  placeholder="&#128270; Search Services or Vendors" />
                   </form>
                   <form className={Styles.filterSelect}>
                       <select name="filter" id="filter">
                            <option value="price">Filter</option>
                           <option value="price">Price</option>
                           <option value="price">People</option>
                           <option value="price">Name</option>
                       </select>
                   </form>
               </div>}

              <div className={Styles.lastCon}>
                  <div className={Styles.mobile}>
                      <button onClick={triggerFilter}><FontAwesomeIcon className={Styles.icon}  icon={filter ? faChevronUp : faChevronDown} /></button>
                  </div>
                <a className={Styles.profilepicCon} href="/">
                    <div>
                            <img src="/images/test1.png" alt="Profile" />
                    </div>
                </a>
              </div>
           </div>
        </div>
    )
}

export default Filter
