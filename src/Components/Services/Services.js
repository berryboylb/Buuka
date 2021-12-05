import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Styles from "./css/style.module.css"
const Services = () => {
    // const[isActive, setIsActive] = useState(false)
    // const  setActive = () => {
    //     setIsActive(true)
    // }
    const active = (evt) => {
        evt.currentTarget.className += `${Styles.active}`;
    }
    return (
        <div className={Styles.services}>
            <div className="my-container">
                <div className={Styles.inner}>
                    <h3>Services</h3>
                    <Tabs className= {Styles.tabs}>
                        <TabList className= {Styles.tablist}>
                            <Tab className= {Styles.tab} onClick={active} >Hair cutting</Tab>
                            <Tab className= {Styles.tab}>Colouring</Tab>
                            <Tab className= {Styles.tab}>Styling</Tab>
                            <Tab className= {Styles.tab}>Facial hair grooming</Tab>
                            <Tab className= {Styles.tab}>Beauty Therapist</Tab>
                            <Tab className= {Styles.tab}>Hair grooming</Tab>
                        </TabList>

                        <div className= {Styles.tabpanel}>
                            <TabPanel >
                                <form>
                                    <div className={Styles.bruh}>
                                        <h3>Flat Waves Hairstyle</h3>
                                        <div>
                                            <label htmlFor="flat">₦5,000</label>
                                            <input type="checkbox" id="flat" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Blunt Bangs  Hairstyle</h3>
                                        <div>
                                            <label htmlFor="blunt">₦1,700</label>
                                            <input type="checkbox" id="blunt" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Butch</h3>
                                        <div>
                                            <label htmlFor="Butch">₦3,000</label>
                                            <input type="checkbox" id="Butch" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Super Straight Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Super">₦2,000</label>
                                            <input type="checkbox" id="Super" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Crew cut or G.I. haircut</h3>
                                        <div>
                                            <label htmlFor="Crew">₦1,500</label>
                                            <input type="checkbox" id="Crew" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Glam Half-Up Bouffant Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Glam">₦1,550</label>
                                            <input type="checkbox" id="Glam" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Ivy League or Harvard Clip</h3>
                                        <div>
                                            <label htmlFor="Ivy">₦2,550</label>
                                            <input type="checkbox" id="Ivy" />
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel >
                                <form>
                                    <div className={Styles.bruh}>
                                        <h3>Crown Braid Updo Hairstyle</h3>
                                        <div>
                                            <label htmlFor="flat">₦5,000</label>
                                            <input type="checkbox" id="flat" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Blunt Bangs  Hairstyle</h3>
                                        <div>
                                            <label htmlFor="blunt">₦1,700</label>
                                            <input type="checkbox" id="blunt" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Butch</h3>
                                        <div>
                                            <label htmlFor="Butch">₦3,000</label>
                                            <input type="checkbox" id="Butch" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Super Straight Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Super">₦2,000</label>
                                            <input type="checkbox" id="Super" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Crew cut or G.I. haircut</h3>
                                        <div>
                                            <label htmlFor="Crew">₦1,500</label>
                                            <input type="checkbox" id="Crew" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Glam Half-Up Bouffant Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Glam">₦1,550</label>
                                            <input type="checkbox" id="Glam" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Ivy League or Harvard Clip</h3>
                                        <div>
                                            <label htmlFor="Ivy">₦2,550</label>
                                            <input type="checkbox" id="Ivy" />
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel >
                                <form>
                                    <div className={Styles.bruh}>
                                        <h3>Glam Half-Up Bouffant Hairstyle</h3>
                                        <div>
                                            <label htmlFor="flat">₦5,000</label>
                                            <input type="checkbox" id="flat" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Blunt Bangs  Hairstyle</h3>
                                        <div>
                                            <label htmlFor="blunt">₦1,700</label>
                                            <input type="checkbox" id="blunt" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Butch</h3>
                                        <div>
                                            <label htmlFor="Butch">₦3,000</label>
                                            <input type="checkbox" id="Butch" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Super Straight Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Super">₦2,000</label>
                                            <input type="checkbox" id="Super" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Crew cut or G.I. haircut</h3>
                                        <div>
                                            <label htmlFor="Crew">₦1,500</label>
                                            <input type="checkbox" id="Crew" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Glam Half-Up Bouffant Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Glam">₦1,550</label>
                                            <input type="checkbox" id="Glam" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Ivy League or Harvard Clip</h3>
                                        <div>
                                            <label htmlFor="Ivy">₦2,550</label>
                                            <input type="checkbox" id="Ivy" />
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel >
                                <form>
                                    <div className={Styles.bruh}>
                                        <h3>Crown Braid Updo Hairstyle</h3>
                                        <div>
                                            <label htmlFor="flat">₦5,000</label>
                                            <input type="checkbox" id="flat" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Blunt Bangs  Hairstyle</h3>
                                        <div>
                                            <label htmlFor="blunt">₦1,700</label>
                                            <input type="checkbox" id="blunt" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Butch</h3>
                                        <div>
                                            <label htmlFor="Butch">₦3,000</label>
                                            <input type="checkbox" id="Butch" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Super Straight Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Super">₦2,000</label>
                                            <input type="checkbox" id="Super" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Crew cut or G.I. haircut</h3>
                                        <div>
                                            <label htmlFor="Crew">₦1,500</label>
                                            <input type="checkbox" id="Crew" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Glam Half-Up Bouffant Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Glam">₦1,550</label>
                                            <input type="checkbox" id="Glam" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Ivy League or Harvard Clip</h3>
                                        <div>
                                            <label htmlFor="Ivy">₦2,550</label>
                                            <input type="checkbox" id="Ivy" />
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel >
                                <form>
                                    <div className={Styles.bruh}>
                                        <h3>Glam Half-Up Bouffant Hairstyle</h3>
                                        <div>
                                            <label htmlFor="flat">₦5,000</label>
                                            <input type="checkbox" id="flat" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Blunt Bangs  Hairstyle</h3>
                                        <div>
                                            <label htmlFor="blunt">₦1,700</label>
                                            <input type="checkbox" id="blunt" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Butch</h3>
                                        <div>
                                            <label htmlFor="Butch">₦3,000</label>
                                            <input type="checkbox" id="Butch" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Super Straight Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Super">₦2,000</label>
                                            <input type="checkbox" id="Super" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Crew cut or G.I. haircut</h3>
                                        <div>
                                            <label htmlFor="Crew">₦1,500</label>
                                            <input type="checkbox" id="Crew" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Glam Half-Up Bouffant Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Glam">₦1,550</label>
                                            <input type="checkbox" id="Glam" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Ivy League or Harvard Clip</h3>
                                        <div>
                                            <label htmlFor="Ivy">₦2,550</label>
                                            <input type="checkbox" id="Ivy" />
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel >
                                <form>
                                    <div className={Styles.bruh}>
                                        <h3>Ivy League or Harvard Clip</h3>
                                        <div>
                                            <label htmlFor="flat">₦5,000</label>
                                            <input type="checkbox" id="flat" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Blunt Bangs  Hairstyle</h3>
                                        <div>
                                            <label htmlFor="blunt">₦1,700</label>
                                            <input type="checkbox" id="blunt" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Butch</h3>
                                        <div>
                                            <label htmlFor="Butch">₦3,000</label>
                                            <input type="checkbox" id="Butch" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Super Straight Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Super">₦2,000</label>
                                            <input type="checkbox" id="Super" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Crew cut or G.I. haircut</h3>
                                        <div>
                                            <label htmlFor="Crew">₦1,500</label>
                                            <input type="checkbox" id="Crew" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Glam Half-Up Bouffant Hairstyle</h3>
                                        <div>
                                            <label htmlFor="Glam">₦1,550</label>
                                            <input type="checkbox" id="Glam" />
                                        </div>
                                    </div>
                                    <div className={Styles.bruh}>
                                        <h3>Ivy League or Harvard Clip</h3>
                                        <div>
                                            <label htmlFor="Ivy">₦2,550</label>
                                            <input type="checkbox" id="Ivy" />
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Services
