import Lottie from 'react-lottie'
import Styles from "./css/styles.module.css"
const NotFound = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../../error.json'),
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      window.addEventListener('resize', function() {
	    window.Webflow.require("Lottie").lottie.resize();
	});	

      
      
    
    return (
        <div className={Styles.container}>
            <Lottie 
                options={defaultOptions}
                //height={'100%'}
                // width={'100%'}
                className={Styles.file}
            />
        </div>      
    )
}

export default NotFound
