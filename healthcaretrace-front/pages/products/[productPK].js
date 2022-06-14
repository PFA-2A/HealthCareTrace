import { useRouter } from "next/router";
import Navbar from "/components/navbar/Navbar";
import Image from "next/image"
import image from "../../images/bg30.jpeg"
import LeftNavBar from "../../components/home/LeftNavBar";
import Timeline from "../../components/timeline/timeline"

const SpecificPage = () => {

    const router = useRouter()
    const path = router.query.navitem

    return (<div>
        <Navbar />
        <Image
                src={image}
                quality="100"
                layout="fill"
        />
        <Timeline />
    </div>)
}

export default SpecificPage;